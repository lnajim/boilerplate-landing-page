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
import { useAuthModals } from '@/app/[lang]/components/AuthModalsProvider'

const registrationSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters" }),
	email: z.string().email({ message: "Invalid email address" }),
	password: z.string().min(6, { message: "Password must be at least 6 characters" }),
	confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
	message: "Passwords don't match",
	path: ["confirmPassword"],
})

type RegistrationFormData = z.infer<typeof registrationSchema>

interface RegistrationFormProps { }

export const RegistrationForm: React.FC<RegistrationFormProps> = () => {
	const { dictionary } = useTranslationStore()
	const { openLoginDialog } = useAuthModals()

	const [isLoading, setIsLoading] = useState(false)
	const form = useForm<RegistrationFormData>({
		resolver: zodResolver(registrationSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	})

	async function onSubmit(data: RegistrationFormData) {
		setIsLoading(true)
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 2000))
		setIsLoading(false)
		console.log(data)
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
										<Input type="password" {...field} />
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
						<Button className="w-full" type="submit" disabled={isLoading}>
							{isLoading && (
								<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
							)}
							{dictionary?.RegistrationForm.signUpButton || 'Sign Up'}
						</Button>
					</form>
				</Form>
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<span className="w-full border-t" />
					</div>
					<div className="relative flex justify-center text-xs uppercase">
						<span className="bg-background px-2 text-muted-foreground">
							{dictionary?.RegistrationForm.orContinueWith || 'Or continue with'}
						</span>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-6">
					<Button variant="outline">
						<Icons.gitHub className="mr-2 h-4 w-4" />
						{dictionary?.RegistrationForm.githubButton || 'GitHub'}
					</Button>
					<Button variant="outline">
						<Icons.google className="mr-2 h-4 w-4" />
						{dictionary?.RegistrationForm.googleButton || 'Google'}
					</Button>
				</div> {/* Added missing closing div tag */}
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