import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/UI/Navbar'
import LeftMenu from '@/components/UI/LeftMenu'

const inter = Inter({ subsets: ['latin'] })

const favicon = '/src/app/favicon.ico'

export const metadata = {
	title: 'সহিহ বুখারী',
	description: 'Sahih Bukhari Hadis App',
	icons: {
		icon: favicon,
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href={metadata.icon} />
			</head>
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
