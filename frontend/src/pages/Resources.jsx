import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getResources } from "../services/resourceService";

function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      const data = await getResources();
      setResources(data);
    };

    fetchResources();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">
          Learning Resources
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h2 className="text-2xl font-bold">
                {resource.title}
              </h2>

              <p className="mt-2">
                {resource.description}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Category: {resource.category}
              </p>

              <a
                href={resource.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 mt-4 inline-block"
              >
                Access Resource
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Resources;