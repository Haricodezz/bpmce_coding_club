const pool = require("../config/db");

const updateUserScore = async (req, res) => {
  try {
    const {
      user_id,
      leetcode_easy,
      leetcode_medium,
      leetcode_hard,
      event_score,
      platform_score,
      contest_score,
    } = req.body;

    const leetcodeScore =
      (leetcode_easy * 2) +
      (leetcode_medium * 5) +
      (leetcode_hard * 10);

    const total_score =
      (contest_score * 0.70) +
      (platform_score * 0.15) +
      (leetcodeScore * 0.10) +
      (event_score * 0.05);

    const updatedScore = await pool.query(
      `UPDATE user_scores
       SET
       leetcode_easy = $1,
       leetcode_medium = $2,
       leetcode_hard = $3,
       event_score = $4,
       platform_score = $5,
       contest_score = $6,
       total_score = $7,
       updated_at = CURRENT_TIMESTAMP
       WHERE user_id = $8
       RETURNING *`,
      [
        leetcode_easy,
        leetcode_medium,
        leetcode_hard,
        event_score,
        platform_score,
        contest_score,
        total_score,
        user_id,
      ]
    );

    res.status(200).json({
      message: "Score updated successfully",
      score: updatedScore.rows[0],
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await pool.query(
      `SELECT
        users.name,
        users.email,
        user_scores.*
      FROM user_scores
      JOIN users ON users.id = user_scores.user_id
      ORDER BY total_score DESC`
    );

    res.status(200).json(leaderboard.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  updateUserScore,
  getLeaderboard,
};