import { useMutation } from "@tanstack/react-query";
import { login } from "@/actions/auth/login";
import { LoginSchema } from "@/schemas";
import * as z from "zod";

const useAuthentificationMutations = () => {
  const loginMutation = useMutation({
    mutationFn: async (data: z.infer<typeof LoginSchema>) => {
      try {
        const result = await login(data);
        if (result.error) {
          throw new Error(result.error);
        }
        return result;
      } catch (error) {
        if (error instanceof Error) {
          throw error;
        } else {
          throw new Error("An unexpected error occurred");
        }
      }
    },
  });

  return { loginMutation };
};

export default useAuthentificationMutations;
