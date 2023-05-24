import classes from "./event-item.module.css"
import Button from "../ui/button"
import DateIcon from "../icons/date-icon"
import AddressIcon from "../icons/address-icon"
import ArrowRightIcon from "../icons/arrow-right-icon"

function EventItem(props: any) {
	const { title, image, date, location, id } = props

	// Convert date to human readable format
	const humanReadableDate = new Date(date).toLocaleDateString("nl-NL", {
		day: "numeric",
		month: "long",
		year: "numeric",
	})

	// Convert location to human readable format
	const formattedAddress = location.replace(", ", "\n")
	// Create a link to the event
	const exploreLink = `/events/${id}`

	return (
		<li className={classes.item}>
			<img src={`/` + image} alt={title} />
			<div className={classes.content}>
				<div>
					<h2>{title}</h2>
					<div className={classes.date}>
						<DateIcon />
						<time>{humanReadableDate}</time>
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={exploreLink}>
						Explore Event
						<span className={classes.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	)
}

export default EventItem
