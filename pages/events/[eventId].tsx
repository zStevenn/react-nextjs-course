import { useRouter } from "next/router"

function EventDetailPage() {
	const router = useRouter()

	const eventId = router.query.eventId

	return <h1>Event Detail Page {eventId}</h1>
}

export default EventDetailPage
