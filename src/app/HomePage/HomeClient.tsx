"use client"

import { useEffect, useState } from "react"
import HomeContent from "@/app/HomePage/HomeContent"
import HomeSK from "@/components/ui/skeleton/HomeSK";

export default function HomeClient() {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 800)
		return () => clearTimeout(timer)
	}, [])
	if (loading) return <HomeSK />

	return <HomeContent />
}
