const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const quoteRoutes = require("./routes/quote");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "https://www.oniaerial.com",
  "https://oniaerial.vercel.app",
  "http://localhost:3000",
  "http://localhost:3001",
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.options("*", cors());

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.use("/api/quote", quoteRoutes);

app.use((err, _req, res, _next) => {
  console.error("Server error:", err.message || err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
  console.log("Allowed origins:", allowedOrigins);
});