"use client"

import { getFilteredEvents } from "@/dummy_data"
import EventList from "@/components/events/event-list"
import { usePathname } from "next/navigation"
import ResultsTitle from "@/components/events/results-title"
import Button from "@/components/ui/button"
import ErrorAlert from "@/components/ui/error-alert"

function FilteredEventsPage() {
	const pathname = usePathname()

	// Split the pathname into an array of strings
	const pathArray = pathname.split("/")

	// Get the year and month from the pathname
	const year = pathArray[2]
	const month = pathArray[3]

	// Change the year and month into numbers
	const numYear = +year
	const numMonth = +month

	if (!pathname) {
		return <ErrorAlert>Loading...</ErrorAlert>
	}

	// Check if the year and month are valid
	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 1 ||
		numMonth > 12
	) {
		return (
			<>
				<ErrorAlert>Invalid filter. Please adjust your values!</ErrorAlert>
				<Button link="/events">Show All Events</Button>
			</>
		)
	}

	const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<ErrorAlert>No events found for the chosen filter!</ErrorAlert>
				<Button link="/events">Show All Events</Button>
			</>
		)
	}

	return (
		<>
			<ResultsTitle date={new Date(numYear, numMonth - 1)} />
			<EventList items={filteredEvents} />
		</>
	)
}

export default FilteredEventsPage
