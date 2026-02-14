"use client"

import { useEffect, useState } from "react"
import HomeContent from "@/app/HomePage/HomeContent"

export default function HomeClient() {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 800)
		return () => clearTimeout(timer)
	}, [])

	return <HomeContent />
}
