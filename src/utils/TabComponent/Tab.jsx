'use client'
import { useState } from 'react'
import Books from '../BookDetails/Books'
import HadisDetails from '../HadisDetails/HadisDetails.'
import Link from 'next/link'

const TabComponent = ({ books, chapters }) => {
	const [activeTab, setActiveTab] = useState(0)
	const handleTabClick = index => {
		setActiveTab(index)
	}

	const tabsData = [
		{ label: 'বই', content: books },
		{ label: 'অধ্যায়', content: chapters },
	]

	// console.log(tabsData[activeTab])
	return (
		<div>
			<div role="tablist" className="tabs mx-auto w-full rounded-xl">
				{tabsData.map((tab, index) => (
					<a
						key={index}
						role="tab"
						className={`tab ${
							index === 0
								? 'rounded-ss-xl'
								: index === 1
								? 'rounded-se-xl'
								: ''
						} ${
							activeTab === index
								? 'tab-active text-white bg-emerald-600'
								: ''
						}`}
						onClick={() => handleTabClick(index)}
					>
						{tab.label}
					</a>
				))}
			</div>
			<div className=" flex m-4 justify-center mx-auto">
				<input
					type="text"
					name="search"
					placeholder="Search"
					className="border-2 rounded-md p-1 h-8 w-44"
				/>
			</div>
			<div>
				{tabsData[activeTab].content.map((data, index) => (
					<div key={index}>
						{activeTab === 0 ? (
							<div className="bg-emerald-100 m-2 p-4 rounded-xl">
								<Link href="/bukhari" key={data.id}>
									<div className="flex items-center -ml-2">
										<p
											className="bg-emerald-400  p-2 px-3 rounded-3xl"
											style={{
												clipPath:
													'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
											}}
										>
											{data.abvr_code}
										</p>
										<div className="ml-3">
											<p className="text-[10px] font-semibold">
												{data.title}
											</p>
											<p className="text-[8px] text-gray-500 mt-1">
												সর্বমোট হাদিস :{''} {data.number_of_hadis}
											</p>
										</div>
									</div>
								</Link>
							</div>
						) : activeTab === 1 ? (
							<div className="bg-emerald-100 m-2 p-4 rounded-xl">
								<Link href={`/bukhari/${data.id}`} key={data.id}>
									<div className="flex items-center -ml-2">
										<p
											className="bg-emerald-400  p-2 px-3 rounded-3xl"
											style={{
												clipPath:
													'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
											}}
										>
											{data.number}
										</p>
										<div className="ml-3">
											<p className="text-[10px] font-semibold">
												{data.title}
											</p>
											<p className="text-[8px] text-gray-500 mt-1">
												হাদিসের রেঞ্জ :{''} {data.hadis_range}
											</p>
										</div>
									</div>
								</Link>
							</div>
						) : (
							''
						)}
					</div>
				))}
			</div>

			{/* <div className="">{tabsData[activeTab].content.title}</div> */}
			{/* Tab content */}
		</div>
	)
}

export default TabComponent
