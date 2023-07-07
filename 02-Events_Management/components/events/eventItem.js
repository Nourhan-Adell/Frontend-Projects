import Link from "next/link";
import classess from "./eventItem.module.css";
import Button from "../UI/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

export default function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classess.item}>
      <img src={"/" + image} alt={title} />
      <div className={classess.content}>
        <div className={classess.summary}>
          <h2>{title}</h2>
          <div className={classess.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classess.address}>
            <AddressIcon />
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div className={classess.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classess.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
