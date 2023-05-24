import Link from "next/link"
import { getFeaturedEvents } from "../dummy_data.js"
import EventList from "../components/events/event-list"

export default function Home() {
	const featuredEvents = getFeaturedEvents()

	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	)
}
