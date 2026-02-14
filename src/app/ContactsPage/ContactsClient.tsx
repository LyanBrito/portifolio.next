"use client"

import { useEffect, useState } from "react"
import ContactsSK from "@/components/ui/skeleton/ContactsSK"
import ContactsContent from "@/app/ContactsPage/ContactsContent"

export default function ContactsClient() {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 800)
		return () => clearTimeout(timer)
	}, [])

	if (loading) return <ContactsSK />

	return <ContactsContent />
}
