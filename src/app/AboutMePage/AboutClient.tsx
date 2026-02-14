"use client"

import { useEffect, useState } from "react"
import AboutMeSK from "@/components/ui/skeleton/AboutMeSK"
import AboutContent from "@/app/AboutMePage/AboutContent"

export default function AboutClient() {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 800)
		return () => clearTimeout(timer)
	}, [])

	if (loading) return <AboutMeSK />
	return <AboutContent />
}
