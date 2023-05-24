import { useRouter } from "next/router"

function FilteredEventsPage() {
	var router = useRouter()
	var filterData = router.query.slug
	console.log(filterData)

	return (
		<div>
			<h1>Filtered Events Page</h1>
			{router.query.slug}
		</div>
	)
}

export default FilteredEventsPage
