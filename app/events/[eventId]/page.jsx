"use client"

import { usePathname } from "next/navigation"
import { getEventById } from "../../../dummy_data"
import EventSummary from "../../../components/event-detail/event-summary"
import EventLogistics from "../../../components/event-detail/event-logistics"
import EventContent from "../../../components/event-detail/event-content"
import { useEffect, useState } from "react"

function EventDetailPage() {
	// Set an event state
	const [event, setEvent] = useState(null)
	// Retrieve a pathname from the router
	const pathname = usePathname()

	// Create an useEffect that retrieves the last part of the pathname and use it to get the event from the dummy data
	useEffect(() => {
		const eventId = pathname.split("/")[2]
		const event = getEventById(eventId)
		setEvent(event)
	}, [pathname])

	// If the event is not found, return a message
	if (!event) {
		return (
			<>
				<p>No event found!</p>
			</>
		)
	}

	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	)
}

export default EventDetailPage
