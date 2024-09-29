import { auth } from '@/auth';
import TanstackProvider from '@/providers/tanstack-provider';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
	const session = await auth();
	return (

		<TanstackProvider>

			<div className="flex-grow mt-16 p-5 overflow-y-auto bg-slate-100 md:mt-24">
				<main>{children}</main>
			</div>
		</TanstackProvider>
	);
}
