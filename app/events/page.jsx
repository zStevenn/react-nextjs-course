"use client"

import { getAllEvents } from "@/dummy_data"
import EventList from "@/components/events/event-list"
import EventsSearch from "@/components/events/events-search"

export const metadata = {
	title: "Events Page",
}

function EventsPage() {
	const events = getAllEvents()

	return (
		<>
			<EventsSearch />
			<EventList items={events} />
		</>
	)
}

export default EventsPage
