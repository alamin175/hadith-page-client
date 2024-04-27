import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/UI/Navbar'
import LeftMenu from '@/components/UI/LeftMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'সহিহ বুখারী',
	description: 'Sahih Bukhari Hadis App',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`overflow-hidden ${inter.className} `}>
				<div className="max-w-screen-xl mx-auto">
					<Navbar />
					<div className="flex">
						<div className="hidden md:block">
							<LeftMenu />
						</div>
						{children}
					</div>
				</div>
			</body>
		</html>
	)
}
