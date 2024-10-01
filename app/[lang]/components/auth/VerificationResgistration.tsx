'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import useAuthentificationMutations from '@/app/[lang]/mutations/useAuthentifcationMutations';
import { FormSuccess } from '@/components/ui/form-success/form-sucess';
import { FormError } from '@/components/ui/form-error/form-error';

const VerificationRegistration = () => {
	const { verificationEmailMutation } = useAuthentificationMutations();
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();
	const [loading, setLoading] = useState<boolean>(true); // Add a loading state

	const searchParams = useSearchParams();
	const token = searchParams?.get('token');

	const onSubmit = useCallback(async () => {
		if (success || error || verificationEmailMutation.isPending) return;

		if (!token) {
			setError('Missing token!');
			setLoading(false);
			return;
		}
		try {
			const data = await verificationEmailMutation.mutateAsync(token);
			if (data.success) {
				setSuccess(data.success);
			} else {
				setError(data.error);
			}
		} catch (error) {
			setError('Something went wrong!');
		} finally {
			setLoading(false); // Stop loading after the request is done
		}
	}, [token, success, error, verificationEmailMutation]);
	useEffect(() => {
		onSubmit();
	}, []);
	return (
		<div className="flex flex-col gap-4 bg-blue-200 items-center">
			<h1>Confirming your verification</h1>
			{loading && <BeatLoader />} {/* Show loader while loading */}
			{!loading && success && <FormSuccess message={success} />}
			{!loading && !success && <FormError message={error} />}
			<Link href={'/'}> back to login </Link>
		</div>
	);
};

export default VerificationRegistration;
