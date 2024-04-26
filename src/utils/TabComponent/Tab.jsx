'use client'
import { useState } from 'react'

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

			{/* <div className="">{tabsData[activeTab].content.title}</div> */}
			{/* Tab content */}
		</div>
	)
}

export default TabComponent
