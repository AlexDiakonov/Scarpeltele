"use client";
import Typography from "../../Atoms/Typography/Typography";
import Container from "../../Atoms/Container/Container";
import styles from "./events.module.scss";
import Location from "../../assets/icons/Location";
import Slider from "../Slider/Slider";
import { urlFor } from "../../lib/client";
import { format, isSameMonth, isSameYear, addDays } from "date-fns";

/* eslint-disable @next/next/no-img-element */

const Events = ({ events }) => {
  function formatDateRange(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return "Invalid Date Range";
    }

    const startDay = format(start, "d");
    const endDay = format(end, "d");
    const month = format(start, "MMMM");
    const year = format(start, "yyyy");

    if (isSameMonth(start, end) && isSameYear(start, end)) {
      return `${month} ${startDay}-${endDay}, ${year}`;
    } else if (isSameYear(start, end)) {
      return `${month} ${startDay}-${endDay}, ${year}`;
    } else {
      const nextMonth = addDays(end, 1);
      if (isSameMonth(start, nextMonth) && isSameYear(start, nextMonth)) {
        return `${month} ${startDay}-${endDay}, ${year}`;
      } else {
        return `${month} ${startDay}-${month} ${endDay}, ${year}`;
      }
    }
  }

  return (
    <div id="events" className={styles.events}>
      <div data-section id="event" className={styles.anchor}></div>
      <Container className={styles.events_wrapper}>
        <Typography
          className={styles.events_wrapper_title}
          component="h3"
          variant="h3Title"
        >
          Let&#39;s connect in person!
        </Typography>
        <Typography
          className={styles.events_wrapper_description}
          component="p"
          variant="body1"
        >
          If you prefer to meet in person, that&#39;s not a problem. You can
          speak to one of our A2P specialists at these upcoming events. Or book
          a call with one of our experts.
        </Typography>
        <Slider>
          {events.map((item) => {
            return (
              <a
                target="_blank"
                href={item.slug.current}
                className={styles.slide}
                key={item._id}
                style={{ display: "block" }}
              >
                <div className={styles.slide_imgWrap}>
                  <img
                    className={styles.slide_imgWrap_img}
                    src={urlFor(item.mainImage).src}
                    alt="event_img"
                  />
                </div>
                <div className={styles.slide_content}>
                  <Typography
                    className={styles.slide_content_date}
                    variant="body4"
                  >
                    {formatDateRange(
                      item.eventDate.startDate,
                      item.eventDate.endDate
                    )}
                  </Typography>
                  <Typography
                    component="h4"
                    className={styles.slide_content_title}
                    variant="h4Title"
                  >
                    {item.title}
                  </Typography>
                  <div className={styles.slide_content_locationWrapper}>
                    <Typography
                      className={styles.slide_content_locationWrapper_location}
                      variant="body3"
                    >
                      <Location
                        className={
                          styles.slide_content_locationWrapper_location_icon
                        }
                      />
                      {item.location}
                    </Typography>
                    <div
                      className={
                        styles.slide_content_locationWrapper_logoWrapper
                      }
                    >
                      <img
                        className={
                          styles.slide_content_locationWrapper_logoWrapper_logo
                        }
                        alt="event_logo"
                        src={urlFor(item.eventLogo).src}
                      ></img>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};

export default Events;
