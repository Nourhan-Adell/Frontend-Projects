import Link from "next/link";
import classes from "./mainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvent</Link>
        <nav className={classes.navigation}>
          <ul>
            <Link href="/events">Browes All Events</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
