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
import { LoginSchema } from '@/schemas'
import useAuthentificationMutations from '@/mutations/useAuthentifcationMutations'
import useAuthModalsStore from '@/stores/authModalsStore'
import { useRouter } from 'next/navigation'
import { signIn } from "next-auth/react"
import SocialLoginAuthentication from './SocialLoginAuthentication'

type LoginFormData = z.infer<typeof LoginSchema>

interface LoginFormProps { }

export const LoginForm: React.FC<LoginFormProps> = () => {
	const { dictionary } = useTranslationStore()
	const { openRegisterDialog, setShowLoginDialog, openResetPasswordDialog } = useAuthModalsStore()
	const { loginMutation } = useAuthentificationMutations();
	const [error, setError] = useState<string | null>(null);
	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)
	const form = useForm<LoginFormData>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	async function onSubmit(data: LoginFormData) {
		setIsLoading(true);
		setError(null);
		try {
			const result = await loginMutation.mutateAsync(data);
			if (result.success === true && result.redirectTo) {
				setShowLoginDialog(false);
				router.push(result.redirectTo);
			} else if (typeof result.success === 'string') {
				// Handle the case for unverified email
				setError(result.success);
			}
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("An unexpected error occurred. Please try again.");
			}
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Card className="">
			<CardHeader className="space-y-1 ">
				<CardTitle className="text-2xl">{dictionary?.LoginForm.title}</CardTitle>
				<CardDescription>
					{dictionary?.LoginForm.description}
				</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				{error && (
					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
						<span className="block sm:inline">{error}</span>
					</div>
				)}
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{dictionary?.LoginForm.emailLabel}</FormLabel>
									<FormControl>
										<Input placeholder="mail@example.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{dictionary?.LoginForm.passwordLabel}</FormLabel>
									<FormControl>
										<Input type="password" placeholder='********' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='button' variant="link" onClick={openResetPasswordDialog} className="px-0 text-sm text-blue-600 hover:underline cursor-pointer">
							{dictionary?.LoginForm.forgotPasswordLink}
						</Button>
						<Button className="w-full" type="submit" disabled={isLoading}>
							{isLoading && (
								<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
							)}
							{dictionary?.LoginForm.signInButton}
						</Button>
					</form>
				</Form>
				<SocialLoginAuthentication isLoading={isLoading} />
			</CardContent>
			<CardFooter className="flex flex-col space-y-2">

				<p className="text-xs text-center text-gray-700">
					{dictionary?.LoginForm.noAccountText}{" "}
					<span onClick={openRegisterDialog} className="text-blue-600 hover:underline cursor-pointer">
						{dictionary?.LoginForm.signUpLink}
					</span>
				</p>
			</CardFooter>
		</Card>
	)
}

export default LoginForm

