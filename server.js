const express = require("express");

class AppServer {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8000;

    this.init();
    this.getConnection();
    this.middleware();
    this.routes();
    this.listen();
  }

  init() {}

  getConnection() {}

  middleware() {}
  routes() {
    this.app.get("/order", (req, res) => {
      res.json({ message: "Hello this is order route" });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App is running on PORT: ${this.port}`);
    });
  }
}

new AppServer();
