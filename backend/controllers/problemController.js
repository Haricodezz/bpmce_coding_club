const pool = require("../config/db");

const createProblem = async (req, res) => {
  try {
    const {
      title,
      description,
      difficulty,
      points,
      category,
      link,
      created_by,
    } = req.body;

    const problem = await pool.query(
      `INSERT INTO problems
      (title, description, difficulty, points, category, link, created_by)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [
        title,
        description,
        difficulty,
        points,
        category,
        link,
        created_by,
      ]
    );

    res.status(201).json({
      message: "Problem created successfully",
      problem: problem.rows[0],
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const getProblems = async (req, res) => {
  try {
    const problems = await pool.query(
      "SELECT * FROM problems ORDER BY created_at DESC"
    );

    res.status(200).json(problems.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  createProblem,
  getProblems,
};