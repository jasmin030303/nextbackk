import "dotenv/config";
import express from "express";
import cors from "cors";
import globalRouter from "./routes";

const buildServer = () => {
  const server = express();
  server.use(express.json());

  server.use(
    cors({
      origin: ["http://localhost:3001"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      credentials: true,
    })
  );

  server.get("/", (req, res) => {
    res.status(200).json({
      message: "hello prisma",
    });
  });

  server.use("/api", globalRouter);

  return server;
};

export default buildServer;
