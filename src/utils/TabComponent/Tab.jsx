'use client'
import { useState } from 'react'

const TabComponent = () => {
	// State to track the active tab index
	const [activeTab, setActiveTab] = useState(0)

	// Function to handle tab click and set the active tab
	const handleTabClick = index => {
		setActiveTab(index)
	}

	// Define your tab data with labels
	const tabsData = [
		{ label: 'বই', content: 'Content for বই tab' },
		{ label: 'অধ্যায়', content: 'Content for অধ্যায় tab' },
	]

	return (
		<div>
			{/* Tab navigation */}
			<div role="tablist" className="tabs mx-auto w-full">
				{tabsData.map((tab, index) => (
					<a
						key={index}
						role="tab"
						className={`tab ${
							activeTab === index ? 'tab-active bg-emerald-400' : ''
						}`}
						onClick={() => handleTabClick(index)}
					>
						{tab.label}
					</a>
				))}
			</div>

			{/* Tab content */}
			<div className="tab-content">{tabsData[activeTab].content}</div>
		</div>
	)
}

export default TabComponent
