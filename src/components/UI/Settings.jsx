import React from 'react'

const Settings = () => {
	return (
		<div className="text-center">
			<h1 className="text-sm font-semibold p-2">সেটিংস</h1>
			<label className="form-control w-full max-w-xs  px-3">
				<div className="label">
					<span className="label-text text-[10px]">
						আরবি ফন্ট সিলেক্ট করুন
					</span>
				</div>
				<select className="border p-1 rounded-lg mx-auto w-full">
					<option selected>KFGQ</option>
					<option>Me Quran</option>
					<option>Al Mushaf</option>
					<option>Amiri</option>
					<option>Arial</option>
				</select>
				<div>
					<p className="text-start text-[9px]">এরাবিক ফন্ট সাইজ</p>
				</div>
			</label>
		</div>
	)
}

export default Settings
