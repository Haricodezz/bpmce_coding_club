import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getEvents } from "../services/eventService";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">
          Upcoming Events
        </h1>

        <div className="grid gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold">
                {event.title}
              </h2>

              <p>{event.description}</p>
              <p><strong>Date:</strong> {event.event_date}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;