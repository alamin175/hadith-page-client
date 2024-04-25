import LeftMenu from '@/components/LeftMenu'
import Navbar from '@/components/Navbar'

const HomePage = () => {
	return (
		<div>
			<Navbar />
			<div
			// style={{ height: 'calc(100vh -40px)' }}
			>
				<LeftMenu />
			</div>
		</div>
	)
}

export default HomePage
