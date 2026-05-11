const pool = require("../config/db");

const getProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    const profile = await pool.query(
      `SELECT users.*, user_scores.total_score
       FROM users
       LEFT JOIN user_scores
       ON users.id = user_scores.user_id
       WHERE users.id = $1`,
      [userId]
    );

    res.status(200).json(profile.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const {
      github,
      linkedin,
      portfolio,
      skills,
      achievements,
      resume_link,
      codeforces_handle,
      leetcode_handle,
    } = req.body;

    const { userId } = req.params;

    const updatedProfile = await pool.query(
      `UPDATE users
       SET
       github = $1,
       linkedin = $2,
       portfolio = $3,
       skills = $4,
       achievements = $5,
       resume_link = $6,
       codeforces_handle = $7,
       leetcode_handle = $8
       WHERE id = $9
       RETURNING *`,
      [
        github,
        linkedin,
        portfolio,
        skills,
        achievements,
        resume_link,
        codeforces_handle,
        leetcode_handle,
        userId,
      ]
    );

    res.status(200).json({
      message: "Profile updated successfully",
      profile: updatedProfile.rows[0],
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};