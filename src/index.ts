import buildServer from "./app";

const server = buildServer();

const startServer = () => {
  try {
    const PORT = process.env.PORT || 3001;
    server.listen(
      {
        port: PORT,
        host: "0.0.0.0",
      },
      () => {
        console.log(`${new Date()}`);
        console.log(`Server run in: http://localhost:${PORT}`);
      }
    );
  } catch (error) {
    console.log(`Server crush:${error}`);
    process.exit(1);
  }
};

startServer();
