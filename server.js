// import config, { nodeEnv, logStars } from "./config";

// console.log(config, nodeEnv);
// logStars("Function");

// import https from "https";

// https.get("https://www.lynda.com/", (res) => {
//   console.log(("status:", res.statusCode));
//   res.on("data", (chunk) => {
//     console.log(chunk.toString());
//   });
// });

import http from "http";

const server = http.createServer();

server.listen(8080);

server.on("request", (req, res) => {
  res.write("Hello HTTP!\n");
  setTimeout(() => {
    res.write("I can stream\n");
    res.end();
  }, 3000);
});
