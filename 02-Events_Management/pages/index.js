import Link from "next/link";
import EventList from "../components/events/eventList";
import { getFeaturedEvents } from "../dummy-data";
import ALLEventsPage from "./events";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return <ALLEventsPage />;
}

export default HomePage;
