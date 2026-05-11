const pool = require("../config/db");

const registerForContest = async (req, res) => {
  try {
    const { contest_id, user_id } = req.body;

    const existing = await pool.query(
      `SELECT * FROM contest_participants
       WHERE contest_id = $1 AND user_id = $2`,
      [contest_id, user_id]
    );

    if (existing.rows.length > 0) {
      return res.status(400).json({
        message: "Already registered for this contest",
      });
    }

    await pool.query(
      `INSERT INTO contest_participants
       (contest_id, user_id)
       VALUES ($1, $2)`,
      [contest_id, user_id]
    );

    res.status(201).json({
      message: "Contest registration successful",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const updateContestScore = async (req, res) => {
  try {
    const {
      contest_id,
      user_id,
      score,
      rank,
    } = req.body;

    await pool.query(
      `UPDATE contest_participants
       SET score = $1, rank = $2
       WHERE contest_id = $3 AND user_id = $4`,
      [score, rank, contest_id, user_id]
    );

    // Major leaderboard contribution
    await pool.query(
      `UPDATE user_scores
       SET contest_score = contest_score + $1
       WHERE user_id = $2`,
      [score, user_id]
    );

    res.status(200).json({
      message: "Contest score updated successfully",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  registerForContest,
  updateContestScore,
};