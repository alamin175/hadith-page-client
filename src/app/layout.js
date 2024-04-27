import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/UI/Navbar'
import LeftMenu from '@/components/UI/LeftMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`overflow-hidden ${inter.className} `}>
				<div className="max-w-screen-lg mx-auto">
					<Navbar />
					<div className="flex">
						<LeftMenu />
						{children}
					</div>
				</div>
			</body>
		</html>
	)
}
