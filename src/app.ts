import "dotenv/config";
import express from "express";
import cors from "cors";
import globalRouter from "./routes";

const buildServer = () => {
  const server = express();

  server.use(
    cors({
      origin: [
        "http://localhost:3000",
        "https://nextfront-3.onrender.com",
        "http://localhost:3001",
      ],
    })
  );

  server.use(express.json());

  server.get("/", (req, res) => {
    res.status(200).json({
      message: "hello prisma",
    });
  });

  server.use("/api", globalRouter);

  return server;
};

export default buildServer;
