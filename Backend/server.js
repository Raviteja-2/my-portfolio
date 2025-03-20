const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: "your_user",
  host: "localhost",
  database: "blogdb",
  password: "your_password",
  port: 5432,
});

app.get("/api/posts", async (req, res) => {
  const result = await pool.query("SELECT * FROM blog_posts");
  res.json(result.rows);
});

app.post("/api/posts/:id/like", async (req, res) => {
  const { id } = req.params;
  await pool.query("UPDATE blog_posts SET likes = likes + 1 WHERE id = $1", [id]);
  res.send("Liked");
});

app.post("/api/posts/:id/comment", async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  await pool.query("UPDATE blog_posts SET comments = array_append(comments, $1) WHERE id = $2", [comment, id]);
  res.send("Comment added");
});

app.listen(5000, () => console.log("Server running on port 5000"));
