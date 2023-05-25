"use client"

import { getAllEvents } from "@/dummy_data"
import EventList from "@/components/events/event-list"
import EventsSearch from "@/components/events/events-search"
import { useRouter } from "next/navigation"

export const metadata = {
	title: "Events Page",
}

function EventsPage() {
	const router = useRouter()
	const events = getAllEvents()

	function findEventsHandler(year, month) {
		const fullPath = `/events/${year}/${month}`

		router.push(fullPath)
	}

	return (
		<>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	)
}

export default EventsPage
