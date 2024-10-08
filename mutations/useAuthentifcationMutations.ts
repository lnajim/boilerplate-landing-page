import * as z from "zod";
import { login } from "@/actions/auth/login";
import { register } from "@/actions/auth/regiter";
import { reset } from "@/actions/auth/reset";
import { newPassword } from "@/actions/auth/new-password";
import { newVerification } from "@/actions/auth/new-verification";
import {
  LoginSchema,
  NewPasswordSchema,
  RegisterSchema,
  ResetSchema,
} from "@/schemas";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { AuthError } from "@/lib/exceptions";
import { useRouter } from "next/navigation";
import useTranslationStore from "@/stores/TranslationStore";

const useAuthentificationMutations = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { dictionary, language } = useTranslationStore();

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async (values: z.infer<typeof LoginSchema>) => {
      try {
        const result = await login(values, language);
        if (result.error) {
          throw new AuthError(result.error);
        }
        return result;
      } catch (error) {
        if (error instanceof Error) {
          throw error;
        } else {
          throw new AuthError(dictionary.useMutation.login.errorDescription);
        }
      }
    },
    onSuccess: (data) => {
      if (data.success === true) {
        toast({
          title: dictionary.useMutation.login.successTitle,
          description: dictionary.useMutation.login.successDescription,
        });
      } else if (typeof data.success === "string") {
        // This is the case for unverified email
        toast({
          title: dictionary.useMutation.login.verificationNeededTitle,
          description: data.success,
        });
      }
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
    mutationFn: async (values: z.infer<typeof RegisterSchema>) => {
      try {
        const result = await register(values, language);
        if (result.error) {
          throw new AuthError(result.error);
        }
        return result;
      } catch (error) {
        if (error instanceof Error) {
          throw error;
        } else {
          throw new AuthError(dictionary.useMutation.register.errorDescription);
        }
      }
    },
    onSuccess: (data) => {
      toast({
        title: dictionary.useMutation.register.successTitle,
        description: dictionary.useMutation.register.successDescription,
      });
      router.push("/login");
    },
    // Remove the onError handler here
  });

  const verificationEmailMutation = useMutation({
    mutationKey: ["verificationEmailMutation"],
    mutationFn: async (token: string) => {
      try {
        const result = await newVerification(token);
        if (result.error) {
          throw new AuthError(result.error);
        }
        return result;
      } catch (error) {
        if (error instanceof Error) {
          throw error;
        } else {
          throw new AuthError(
            "An unexpected error occurred during verification"
          );
        }
      }
    },
  });

  const resetPasswordMutation = useMutation({
    mutationKey: ["resetPasswordMutation"],
    mutationFn: async (email: z.infer<typeof ResetSchema>) => {
      try {
        const result = await reset(email, language);
        if (result.error) {
          throw new AuthError(result.error);
        }
        return result;
      } catch (error) {
        if (error instanceof Error) {
          throw error;
        } else {
          throw new AuthError(
            dictionary.useMutation.resetPassword.errorDescription
          );
        }
      }
    },
  });

  const newPasswordMutation = useMutation({
    mutationKey: ["newPassworMutation"],
    mutationFn: async (values: z.infer<typeof NewPasswordSchema>) => {
      try {
        const { password, confirmPassword, token } = values;
        console.log(values);
        const result = await newPassword({ password, confirmPassword }, token);
        if (result.error) {
          throw new AuthError(result.error);
        }
        return result;
      } catch (error) {
        if (error instanceof Error) {
          throw error;
        } else {
          throw new AuthError(
            "An unexpected error occurred while setting new password"
          );
        }
      }
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
