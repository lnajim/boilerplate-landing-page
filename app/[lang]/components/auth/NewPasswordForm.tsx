'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { NewPasswordSchema } from '@/schemas';
import Link from 'next/link';
import { useState } from 'react';
import useAuthentificationMutations from '../../mutations/useAuthentifcationMutations';

export const NewPasswordForm = () => {
	const searchParams = useSearchParams();
	const [error, setError] = useState('');
	const token = searchParams?.get('token');

	console.log("token :", token)
	const { newPasswordMutation } = useAuthentificationMutations();
	const form = useForm<z.infer<typeof NewPasswordSchema>>({
		resolver: zodResolver(NewPasswordSchema),
		defaultValues: {
			password: '',
			confirmPassword: ''
		}
	});

	const onSubmit = async (values: z.infer<typeof NewPasswordSchema>) => {
		console.log(values)
		if (!token) {
			// Handle the case where the token is null
			setError('Token is missing');
			return;
		}
		await newPasswordMutation.mutateAsync({
			password: values.password,
			confirmPassword: values.confirmPassword,
			token: token
		});
	};

	return (
		<div>
			<h2 className="text-3xl font-bold mb-8">Create new password</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input {...field} disabled={newPasswordMutation.isPending} placeholder="******" type="password" />
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
									<FormLabel>Confirma password</FormLabel>
									<FormControl>
										<Input {...field} disabled={newPasswordMutation.isPending} placeholder="******" type="password" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button disabled={newPasswordMutation.isPending} type="submit" className="w-full">
						Reset password
					</Button>
					<Button variant="link" size={'sm'} asChild className="font-normal">
						<Link href="/">Back to login</Link>
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default NewPasswordForm;

// const NewVerificationSuspenseWrapper = () => (
//   <Suspense fallback={<BeatLoader />}>
//     <NewPasswordForm />
//   </Suspense>
// );

// export default NewVerificationSuspenseWrapper;
