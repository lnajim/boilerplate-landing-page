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
import { useRouter } from "next/navigation"; // Add this import

const useAuthentificationMutations = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter(); // Add this line

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (values: z.infer<typeof LoginSchema>) => login(values),
    onSuccess: (data) => {
      // Invalidate and refetch relevant queries
      console.log("success: ", data);
      // Show success toast
      toast({
        title: "Login Successful",
        description: "You have been successfully logged in.",
      });

      // Redirect to dashboard or home page
      // You might want to use a router here, e.g., Next.js router
      // router.push("/dashboard");
    },
    onError: (error) => {
      // Show error toast
      toast({
        title: "Login Failed",
        description:
          error instanceof AuthError
            ? error.message
            : "An error occurred during login. Please try again.",
        variant: "destructive",
      });

      // You can also log the error for debugging
      console.error("Login error:", error);
    },
  });

  const registerMutation = useMutation({
    mutationKey: ["register"],
    mutationFn: (values: z.infer<typeof RegisterSchema>) => register(values),
    onSuccess: (data) => {
      // Invalidate and refetch relevant queries if needed
      // queryClient.invalidateQueries(["user"]);

      // Show success toast
      toast({
        title: "Registration Successful",
        description:
          "Your account has been created. Please check your email for verification.",
      });

      // Redirect to login page or dashboard
      router.push("/login"); // Adjust the route as needed
    },
    onError: (error) => {
      // Show error toast
      toast({
        title: "Registration Failed",
        description:
          error instanceof AuthError
            ? error.message
            : "An error occurred during registration. Please try again.",
        variant: "destructive",
      });

      // Log the error for debugging
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
      const password = values.password;
      const confirmPassword = values.confirmPassword;
      const token = values.token;
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
