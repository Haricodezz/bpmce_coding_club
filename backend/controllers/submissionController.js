const pool = require("../config/db");

const submitProblem = async (req, res) => {
  try {
    const { user_id, problem_id } = req.body;

    // Prevent duplicate solve
    const existing = await pool.query(
      `SELECT * FROM user_problem_submissions
       WHERE user_id = $1 AND problem_id = $2`,
      [user_id, problem_id]
    );

    if (existing.rows.length > 0) {
      return res.status(400).json({
        message: "Problem already solved",
      });
    }

    // Insert submission
    await pool.query(
      `INSERT INTO user_problem_submissions
       (user_id, problem_id)
       VALUES ($1, $2)`,
      [user_id, problem_id]
    );

    // Get problem points
    const problem = await pool.query(
      `SELECT points FROM problems
       WHERE id = $1`,
      [problem_id]
    );

    const points = problem.rows[0].points;

    // Update platform score
    await pool.query(
      `UPDATE user_scores
       SET platform_score = platform_score + $1
       WHERE user_id = $2`,
      [points, user_id]
    );

    res.status(201).json({
      message: "Problem solved successfully",
      pointsEarned: points,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  submitProblem,
};