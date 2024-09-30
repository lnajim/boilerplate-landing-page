'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import useTranslationStore from '@/stores/TranslationStore';
import useAuthentificationMutations from '@/app/[lang]/mutations/useAuthentifcationMutations';
import { useToast } from '@/hooks/use-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const NewPasswordSchema = z.object({
	password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
	confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
	message: "Passwords do not match",
	path: ["confirmPassword"],
});

type NewPasswordFormData = z.infer<typeof NewPasswordSchema>;

export const NewPasswordForm = () => {
	const searchParams = useSearchParams();

	const { dictionary } = useTranslationStore();
	const { newPasswordMutation } = useAuthentificationMutations();
	const token = searchParams?.get('token') || undefined;

	const { toast } = useToast();
	const router = useRouter();

	const [isLoading, setIsLoading] = useState(false);
	const [isDictionaryLoaded, setIsDictionaryLoaded] = useState(false);

	useEffect(() => {
		if (dictionary && dictionary.useMutation && dictionary.useMutation.newPassword) {
			setIsDictionaryLoaded(true);
		}
	}, [dictionary]);

	const form = useForm<NewPasswordFormData>({
		resolver: zodResolver(NewPasswordSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	async function onSubmit(data: NewPasswordFormData) {
		setIsLoading(true);
		try {
			const result = await newPasswordMutation.mutateAsync({ ...data, token });
			if (result.error) {
				toast({
					variant: "destructive",
					title: dictionary.useMutation.newPassword.errorTitle,
					description: result.error,
				});
			} else {
				toast({
					title: dictionary.useMutation.newPassword.successTitle,
					description: dictionary.useMutation.newPassword.successDescription,
				});
				router.push('/');
			}
		} catch (error) {
			console.error('Error updating password:', error);
			toast({
				variant: "destructive",
				title: dictionary.useMutation.newPassword.errorTitle,
				description: dictionary.useMutation.newPassword.unexpectedError,
			});
		} finally {
			setIsLoading(false);
		}
	}

	if (!isDictionaryLoaded) {
		return <div>Loading...</div>; // Or any loading component you prefer
	}

	return (
		<Card>
			<CardHeader className="space-y-1">
				<CardTitle className="text-2xl">{dictionary.useMutation.newPassword.title}</CardTitle>
				<CardDescription>
					{dictionary.useMutation.newPassword.description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{dictionary.useMutation.newPassword.passwordLabel}</FormLabel>
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
									<FormLabel>{dictionary.useMutation.newPassword.confirmPasswordLabel}</FormLabel>
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
							{dictionary.useMutation.newPassword.submitButton}
						</Button>
					</form>
				</Form>
			</CardContent>
			<CardFooter>
				<p className="text-xs text-center text-gray-700 mt-4 w-full">
					<Link href="/login" className="text-blue-600 hover:underline cursor-pointer">
						{dictionary.useMutation.newPassword.backToLogin}
					</Link>
				</p>
			</CardFooter>
		</Card>
	);
};

export default NewPasswordForm;

// const NewVerificationSuspenseWrapper = () => (
//   <Suspense fallback={<BeatLoader />}>
//     <NewPasswordForm />
//   </Suspense>
// );

// export default NewVerificationSuspenseWrapper;
