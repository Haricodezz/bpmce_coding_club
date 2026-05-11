const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database
const pool = require("./config/db");

pool.connect()
  .then(() => console.log("PostgreSQL Connected"))
  .catch(err => console.error("DB Connection Error:", err));

// Routes
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Coding Club API Running...");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const eventRoutes = require("./routes/eventRoutes");

app.use("/api/events", eventRoutes);






const scoreRoutes = require("./routes/scoreRoutes");

app.use("/api/scores", scoreRoutes);


const announcementRoutes = require("./routes/announcementRoutes");

app.use("/api/announcements", announcementRoutes);



const resourceRoutes = require("./routes/resourceRoutes");

app.use("/api/resources", resourceRoutes);




const profileRoutes = require("./routes/profileRoutes");

app.use("/api/profile", profileRoutes);


const problemRoutes = require("./routes/problemRoutes");

app.use("/api/problems", problemRoutes);






const submissionRoutes = require("./routes/submissionRoutes");

app.use("/api/submissions", submissionRoutes);


const contestRoutes = require("./routes/contestRoutes");

app.use("/api/contests", contestRoutes);




const contestParticipationRoutes = require("./routes/contestParticipationRoutes");

app.use("/api/contest-participation", contestParticipationRoutes);





const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/api/dashboard", dashboardRoutes);
















