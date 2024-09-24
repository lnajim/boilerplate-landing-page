'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from '@/components/ui/icons'
import useTranslationStore from '@/stores/TranslationStore'

const loginSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
	password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

type LoginFormData = z.infer<typeof loginSchema>

interface LoginFormProps {

}

export const LoginForm: React.FC<LoginFormProps> = () => {
	const { dictionary } = useTranslationStore()

	const [isLoading, setIsLoading] = useState(false)
	const form = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	async function onSubmit(data: LoginFormData) {
		setIsLoading(true)
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 2000))
		setIsLoading(false)
		console.log(data)
	}

	return (
		<Card>
			<CardHeader className="space-y-1">
				<CardTitle className="text-2xl">{dictionary?.LoginForm.title}</CardTitle>
				<CardDescription>
					{dictionary?.LoginForm.description}
				</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{dictionary?.LoginForm.emailLabel}</FormLabel>
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
									<FormLabel>{dictionary?.LoginForm.passwordLabel}</FormLabel>
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
							{dictionary?.LoginForm.signInButton}
						</Button>
					</form>
				</Form>
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<span className="w-full border-t" />
					</div>
					<div className="relative flex justify-center text-xs uppercase">
						<span className="bg-background px-2 text-muted-foreground">
							{dictionary?.LoginForm.orContinueWith}
						</span>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-6">
					<Button variant="outline">
						<Icons.gitHub className="mr-2 h-4 w-4" />
						{dictionary?.LoginForm.githubButton}
					</Button>
					<Button variant="outline">
						<Icons.google className="mr-2 h-4 w-4" />
						{dictionary?.LoginForm.googleButton}
					</Button>
				</div>
			</CardContent>
			<CardFooter>
				<p className="text-xs text-center text-gray-700 mt-4">
					{dictionary?.LoginForm.noAccountText}{" "}
					<Link href="#" className="text-blue-600 hover:underline">
						{dictionary?.LoginForm.signUpLink}
					</Link>
				</p>
			</CardFooter>
		</Card >
	)
}

export default LoginForm