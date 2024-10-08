import { auth } from '@/auth'
import AdminSidebar from '@/components/components-customs/AdminSidebar'
import TanstackProvider from '@/providers/tanstack-provider'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
	const session = await auth()

	console.log(session)
	return (
		<TanstackProvider>
			<div className="flex h-screen bg-slate-100">
				<AdminSidebar />
				<div className="flex-grow overflow-auto transition-all duration-300 ease-in-out ml-20 lg:ml-64">
					<main className="p-5 mt-16 md:mt-24">{children}</main>
				</div>
			</div>
		</TanstackProvider>
	)
}