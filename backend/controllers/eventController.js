const pool = require("../config/db");

const getAllEvents = async (req, res) => {
  try {
    const events = await pool.query(
      "SELECT * FROM events ORDER BY event_date ASC"
    );

    res.status(200).json(events.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      event_date,
      venue,
      created_by,
    } = req.body;

    const newEvent = await pool.query(
      `INSERT INTO events
      (title, description, event_date, venue, created_by)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [title, description, event_date, venue, created_by]
    );

    res.status(201).json({
      message: "Event created successfully",
      event: newEvent.rows[0],
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  getAllEvents,
  createEvent,
};