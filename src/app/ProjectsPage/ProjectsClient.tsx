"use client"

import { useEffect, useState } from "react"
import ProjectsPageSK from "@/components/ui/skeleton/ProjectsPageSK"
// @ts-ignore
import ProjectsContent from "@/app/ProjectsPage/ProjectsContent"

export default function ProjectClient() {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 800)
		return () => clearTimeout(timer)
	}, [])

	if (loading) return <ProjectsPageSK />

	return <ProjectsContent />
}
