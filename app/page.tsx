import { getFeaturedEvents } from "../dummy_data.js"
import EventList from "../components/events/event-list"
import MainHeader from "../components/layout/main-header"

export default function Home() {
	const featuredEvents = getFeaturedEvents()

	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	)
}
