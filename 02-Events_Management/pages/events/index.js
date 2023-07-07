import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "@/dummy-data";
import EventList from "../../components/events/eventList";
import EventSearch from "../../components/events/eventSearch";

export default function ALLEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
