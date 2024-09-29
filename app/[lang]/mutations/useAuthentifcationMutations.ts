import * as z from "zod";
import { login } from "@/actions/auth/login";
import {
  LoginSchema,
  NewPasswordSchema,
  RegisterSchema,
  ResetSchema,
} from "@/schemas";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reset } from "@/actions/auth/reset";
import { newPassword } from "@/actions/auth/new-password";
import { register } from "@/actions/auth/regiter";
import { newVerification } from "@/actions/auth/new-verification";
import { useToast } from "@/hooks/use-toast";
import { AuthError } from "@/lib/exceptions";
import { useRouter } from "next/navigation";
import useTranslationStore from "@/stores/TranslationStore";

const useAuthentificationMutations = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();
  const { dictionary } = useTranslationStore();

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (values: z.infer<typeof LoginSchema>) => login(values),
    onSuccess: (data) => {
      console.log("success: ", data);
      toast({
        title: dictionary.useMutation.login.successTitle,
        description: dictionary.useMutation.login.successDescription,
      });
    },
    onError: (error) => {
      toast({
        title: dictionary.useMutation.login.errorTitle,
        description:
          error instanceof AuthError
            ? error.message
            : dictionary.useMutation.login.errorDescription,
        variant: "destructive",
      });
      console.error("Login error:", error);
    },
  });

  const registerMutation = useMutation({
    mutationKey: ["register"],
    mutationFn: (values: z.infer<typeof RegisterSchema>) => register(values),
    onSuccess: (data) => {
      toast({
        title: dictionary.useMutation.register.successTitle,
        description: dictionary.useMutation.register.successDescription,
      });
      router.push("/login");
    },
    onError: (error) => {
      toast({
        title: dictionary.useMutation.register.errorTitle,
        description:
          error instanceof AuthError
            ? error.message
            : dictionary.useMutation.register.errorDescription,
        variant: "destructive",
      });
      console.error("Registration error:", error);
    },
  });

  const verificationEmailMutation = useMutation({
    mutationKey: ["verificationEmailMutation"],
    mutationFn: (token: string) => newVerification(token),
  });

  const resetPasswordMutation = useMutation({
    mutationKey: ["resetPasswordMutation"],
    mutationFn: (email: z.infer<typeof ResetSchema>) => reset(email),
  });

  const newPasswordMutation = useMutation({
    mutationKey: ["newPassworMutation"],
    mutationFn: (values: z.infer<typeof NewPasswordSchema>) => {
      const { password, confirmPassword, token } = values;
      return newPassword({ password, confirmPassword }, token);
    },
  });

  return {
    loginMutation,
    registerMutation,
    verificationEmailMutation,
    resetPasswordMutation,
    newPasswordMutation,
  };
};

export default useAuthentificationMutations;
