const pool = require("../config/db");

const getDashboardData = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await pool.query(
      `SELECT users.*, user_scores.*
       FROM users
       LEFT JOIN user_scores
       ON users.id = user_scores.user_id
       WHERE users.id = $1`,
      [userId]
    );

    const solvedProblems = await pool.query(
      `SELECT COUNT(*) FROM user_problem_submissions
       WHERE user_id = $1`,
      [userId]
    );

    const contests = await pool.query(
      `SELECT COUNT(*) FROM contest_participants
       WHERE user_id = $1`,
      [userId]
    );

    res.status(200).json({
      profile: user.rows[0],
      solvedProblems:
        parseInt(solvedProblems.rows[0].count),
      contestsParticipated:
        parseInt(contests.rows[0].count),
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  getDashboardData,
};