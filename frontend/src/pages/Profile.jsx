import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  getProfile,
  updateProfile,
} from "../services/profileService";

function Profile() {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const [profile, setProfile] = useState(null);

  const [formData, setFormData] = useState({
    github: "",
    linkedin: "",
    portfolio: "",
    skills: "",
    achievements: "",
    resume_link: "",
    codeforces_handle: "",
    leetcode_handle: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile(currentUser.id);

        setProfile(data);

        setFormData({
          github: data.github || "",
          linkedin: data.linkedin || "",
          portfolio: data.portfolio || "",
          skills: data.skills || "",
          achievements: data.achievements || "",
          resume_link: data.resume_link || "",
          codeforces_handle:
            data.codeforces_handle || "",
          leetcode_handle:
            data.leetcode_handle || "",
        });

      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [currentUser.id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateProfile(
        currentUser.id,
        formData
      );

      alert(response.message);

      setProfile(response.profile);

    } catch (error) {
      alert("Profile update failed");
    }
  };

  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <>
      <Navbar />

      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          My Profile
        </h1>

        {/* Profile Overview */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            {profile.name}
          </h2>

          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Department:</strong> {profile.department}</p>
          <p><strong>Year:</strong> {profile.year}</p>
          <p>
            <strong>Total Score:</strong>{" "}
            {Math.round(profile.total_score || 0)}
          </p>
        </div>

        {/* Edit Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6">
            Update Profile
          </h2>

          <input
            type="text"
            name="leetcode_handle"
            placeholder="LeetCode Username"
            value={formData.leetcode_handle}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
          />

          <input
            type="text"
            name="codeforces_handle"
            placeholder="Codeforces Handle"
            value={formData.codeforces_handle}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
          />

          <input
            type="text"
            name="github"
            placeholder="GitHub Link"
            value={formData.github}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn Link"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
          />

          <input
            type="text"
            name="portfolio"
            placeholder="Portfolio Link"
            value={formData.portfolio}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
          />

          <input
            type="text"
            name="resume_link"
            placeholder="Resume Link"
            value={formData.resume_link}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
          />

          <textarea
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
          />

          <textarea
            name="achievements"
            placeholder="Achievements"
            value={formData.achievements}
            onChange={handleChange}
            className="w-full p-3 border rounded mb-6"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Save Profile
          </button>
        </form>
      </div>
    </>
  );
}

export default Profile;