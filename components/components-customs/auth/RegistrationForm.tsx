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
import useAuthentificationMutations from '@/mutations/useAuthentifcationMutations'
import { RegisterSchema } from '@/schemas'
import useAuthModalsStore from '@/stores/authModalsStore'
import SocialLoginAuthentication from './SocialLoginAuthentication'

type RegistrationFormData = z.infer<typeof RegisterSchema>

interface RegistrationFormProps { }

export const RegistrationForm: React.FC<RegistrationFormProps> = () => {
	const { dictionary } = useTranslationStore()
	const { openLoginDialog, setShowRegisterDialog } = useAuthModalsStore()
	const { registerMutation } = useAuthentificationMutations();

	const [error, setError] = useState<string | null>(null);

	const form = useForm<RegistrationFormData>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	})

	async function onSubmit(data: RegistrationFormData) {
		try {
			await registerMutation.mutateAsync(data);
			// Registration successful, handled by onSuccess in the mutation
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("An unexpected error occurred");
			}
		}
	}

	return (
		<Card>
			<CardHeader className="space-y-1">
				<CardTitle className="text-2xl">{dictionary?.RegistrationForm.title || 'Create an account'}</CardTitle>
				<CardDescription>
					{dictionary?.RegistrationForm.description || 'Enter your information to create an account'}
				</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{dictionary?.RegistrationForm.nameLabel || 'Name'}</FormLabel>
									<FormControl>
										<Input placeholder="John Doe" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{dictionary?.RegistrationForm.emailLabel || 'Email'}</FormLabel>
									<FormControl>
										<Input placeholder="m@example.com" {...field} />
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
									<FormLabel>{dictionary?.RegistrationForm.passwordLabel || 'Password'}</FormLabel>
									<FormControl>
										<Input type="password"  {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{dictionary?.RegistrationForm.confirmPasswordLabel || 'Confirm Password'}</FormLabel>
									<FormControl>
										<Input type="password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							className="w-full"
							type="submit"
							disabled={registerMutation.isPending}
						>
							{registerMutation.isPending && (
								<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
							)}
							{dictionary?.RegistrationForm.signUpButton || 'Sign Up'}
						</Button>
					</form>
				</Form>
				<SocialLoginAuthentication isLoading={registerMutation.isPending} />
			</CardContent>
			<CardFooter>
				<p className="text-xs text-center text-gray-700 mt-4">
					{dictionary?.RegistrationForm.alreadyHaveAccountText || 'Already have an account?'}{" "}
					<span onClick={openLoginDialog} className="text-blue-600 hover:underline cursor-pointer">
						{dictionary?.RegistrationForm.signInLink || 'Sign in'}
					</span>
				</p>
			</CardFooter>
		</Card>
	)
}

export default RegistrationForm