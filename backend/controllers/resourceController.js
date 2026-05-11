const pool = require("../config/db");

const createResource = async (req, res) => {
  try {
    const {
      title,
      description,
      link,
      category,
      created_by,
    } = req.body;

    const resource = await pool.query(
      `INSERT INTO resources
      (title, description, link, category, created_by)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [title, description, link, category, created_by]
    );

    res.status(201).json({
      message: "Resource added successfully",
      resource: resource.rows[0],
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const getResources = async (req, res) => {
  try {
    const resources = await pool.query(
      `SELECT resources.*, users.name
       FROM resources
       JOIN users ON users.id = resources.created_by
       ORDER BY created_at DESC`
    );

    res.status(200).json(resources.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  createResource,
  getResources,
};