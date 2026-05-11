import { useState } from "react";
import Navbar from "../components/Navbar";
import { createEvent } from "../services/eventService";
import { updateScore } from "../services/scoreService";


 
function Admin() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    event_date: "",
    venue: "",
  });

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createEvent({
        ...eventData,
        created_by: user.id,
      });

      alert(response.message);

      setEventData({
        title: "",
        description: "",
        event_date: "",
        venue: "",
      });

    } catch (error) {
      alert("Event creation failed");
    }
  };
const [scoreData, setScoreData] = useState({
  user_id: "",
  leetcode_easy: 0,
  leetcode_medium: 0,
  leetcode_hard: 0,
  event_score: 0,
  platform_score: 0,
  contest_score: 0,
});


const handleScoreSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await updateScore(scoreData);
    alert(response.message);
  } catch (error) {
    alert("Score update failed");
  }
};


const handleScoreChange = (e) => {
  setScoreData({
    ...scoreData,
    [e.target.name]: e.target.value,
  });
};
  return (
    <>
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">
          Admin Panel
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg max-w-xl"
        >
          <h2 className="text-2xl font-bold mb-6">
            Create New Event
          </h2>

          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={eventData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={eventData.description}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
            required
          />

          <input
            type="date"
            name="event_date"
            value={eventData.event_date}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
            required
          />

          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={eventData.venue}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-6"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Create Event
          </button>
        </form>
        <form
  onSubmit={handleScoreSubmit}
  className="bg-white p-8 rounded-lg shadow-lg max-w-xl mt-10"
>
  <h2 className="text-2xl font-bold mb-6">
    Update User Score
  </h2>

  <input
    type="number"
    name="user_id"
    placeholder="User ID"
    value={scoreData.user_id}
    onChange={handleScoreChange}
    className="w-full p-3 border rounded mb-4"
    required
  />

  <input
    type="number"
    name="leetcode_easy"
    placeholder="LeetCode Easy Solved"
    value={scoreData.leetcode_easy}
    onChange={handleScoreChange}
    className="w-full p-3 border rounded mb-4"
  />

  <input
    type="number"
    name="leetcode_medium"
    placeholder="LeetCode Medium Solved"
    value={scoreData.leetcode_medium}
    onChange={handleScoreChange}
    className="w-full p-3 border rounded mb-4"
  />

  <input
    type="number"
    name="leetcode_hard"
    placeholder="LeetCode Hard Solved"
    value={scoreData.leetcode_hard}
    onChange={handleScoreChange}
    className="w-full p-3 border rounded mb-4"
  />

  <input
    type="number"
    name="event_score"
    placeholder="Event Score"
    value={scoreData.event_score}
    onChange={handleScoreChange}
    className="w-full p-3 border rounded mb-4"
  />

  <input
    type="number"
    name="platform_score"
    placeholder="Platform Score"
    value={scoreData.platform_score}
    onChange={handleScoreChange}
    className="w-full p-3 border rounded mb-4"
  />

  <input
    type="number"
    name="contest_score"
    placeholder="Contest Score"
    value={scoreData.contest_score}
    onChange={handleScoreChange}
    className="w-full p-3 border rounded mb-6"
  />

  <button
    type="submit"
    className="w-full bg-green-600 text-white py-3 rounded-lg"
  >
    Update Score
  </button>
</form>
      </div>
    </>
  );
}

export default Admin;