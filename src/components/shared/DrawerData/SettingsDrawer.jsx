'use client'
import { useState } from 'react'
import Settings from '../Settings'
import { CiSettings } from 'react-icons/ci'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const SettingsDrawer = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDrawer = () => {
		setIsOpen(prevState => !prevState)
	}

	return (
		<div>
			<button
				onClick={toggleDrawer}
				className="text-2xl bg-emerald-600 p-1 rounded-md text-white"
			>
				<CiSettings />
			</button>
			<Drawer
				open={isOpen}
				onClose={toggleDrawer}
				direction="right"
				className="bla bla bla"
			>
				<div className="flex justify-between items-center p-3">
					{/* <p>সেটিংস</p> */}
					<button onClick={toggleDrawer} className="text-2xl">
						x
					</button>
				</div>
				<div className="mx-4">
					<Settings />
				</div>
			</Drawer>
		</div>
	)
}

export default SettingsDrawer
