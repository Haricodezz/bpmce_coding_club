import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAnnouncements } from "../services/announcementService";

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnnouncements();
      setAnnouncements(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">
          Announcements
        </h1>

        <div className="space-y-6">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h2 className="text-2xl font-bold">
                {item.title}
              </h2>

              <p className="mt-2">{item.content}</p>

              <p className="text-sm text-gray-500 mt-4">
                Posted by {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Announcements;