'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from '@/components/ui/icons'
import useTranslationStore from '@/stores/TranslationStore'
import useAuthModalsStore from '@/stores/authModalsStore'
import useAuthentificationMutations from '@/app/[lang]/mutations/useAuthentifcationMutations'
import { useToast } from "@/hooks/use-toast";

// Define the schema for the reset password form
const ResetPasswordSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
})

type ResetPasswordFormData = z.infer<typeof ResetPasswordSchema>

export const ResetPasswordForm: React.FC = () => {
	const { dictionary } = useTranslationStore()
	const { setShowResetPasswordDialog, openLoginDialog } = useAuthModalsStore()
	const { resetPasswordMutation } = useAuthentificationMutations();
	const { toast } = useToast()

	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<ResetPasswordFormData>({
		resolver: zodResolver(ResetPasswordSchema),
		defaultValues: {
			email: "",
		},
	})

	async function onSubmit(data: ResetPasswordFormData) {
		setIsLoading(true)
		try {
			const result = await resetPasswordMutation.mutateAsync(data);
			if (result.error) {
				toast({
					variant: "destructive",
					title: dictionary.ResetPasswordForm.errorTitle,
					description: result.error,
				})
			} else {
				toast({
					title: dictionary.ResetPasswordForm.successTitle,
					description: dictionary.ResetPasswordForm.successDescription,
				})
				setShowResetPasswordDialog(false)
			}
		} catch (error) {
			console.error('Error sending reset password email:', error)
			toast({
				variant: "destructive",
				title: dictionary.ResetPasswordForm.errorTitle,
				description: dictionary.ResetPasswordForm.unexpectedError,
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Card>
			<CardHeader className="space-y-1">
				<CardTitle className="text-2xl">{dictionary.ResetPasswordForm.title}</CardTitle>
				<CardDescription>
					{dictionary.ResetPasswordForm.description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{dictionary.ResetPasswordForm.emailLabel}</FormLabel>
									<FormControl>
										<Input placeholder="mail@example.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className="w-full" type="submit" disabled={isLoading}>
							{isLoading && (
								<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
							)}
							{dictionary.ResetPasswordForm.submitButton}
						</Button>
					</form>
				</Form>
			</CardContent>
			<CardFooter>
				<p className="text-xs text-center text-gray-700 mt-4">
					{dictionary.ResetPasswordForm.rememberPasswordText}{" "}
					<span onClick={openLoginDialog} className="text-blue-600 hover:underline cursor-pointer">
						{dictionary.ResetPasswordForm.loginLink}
					</span>
				</p>
			</CardFooter>
		</Card>
	)
}

export default ResetPasswordForm