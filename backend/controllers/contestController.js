const pool = require("../config/db");

const createContest = async (req, res) => {
  try {
    const {
      title,
      description,
      start_date,
      end_date,
      created_by,
    } = req.body;

    const contest = await pool.query(
      `INSERT INTO contests
      (title, description, start_date, end_date, created_by)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [
        title,
        description,
        start_date,
        end_date,
        created_by,
      ]
    );

    res.status(201).json({
      message: "Contest created successfully",
      contest: contest.rows[0],
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const getContests = async (req, res) => {
  try {
    const contests = await pool.query(
      `SELECT * FROM contests
       ORDER BY start_date DESC`
    );

    res.status(200).json(contests.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  createContest,
  getContests,
};