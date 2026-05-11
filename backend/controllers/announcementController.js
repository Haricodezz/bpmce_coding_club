const pool = require("../config/db");

const createAnnouncement = async (req, res) => {
  try {
    const { title, content, created_by } = req.body;

    const announcement = await pool.query(
      `INSERT INTO announcements (title, content, created_by)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [title, content, created_by]
    );

    res.status(201).json({
      message: "Announcement posted successfully",
      announcement: announcement.rows[0],
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const getAnnouncements = async (req, res) => {
  try {
    const announcements = await pool.query(
      `SELECT announcements.*, users.name
       FROM announcements
       JOIN users ON users.id = announcements.created_by
       ORDER BY created_at DESC`
    );

    res.status(200).json(announcements.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  createAnnouncement,
  getAnnouncements,
};