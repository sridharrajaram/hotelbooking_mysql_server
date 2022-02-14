const express = require("express");
const app = express();

const cors = require("cors");

const customerRouter = require("./routes/customerRouter.js");
const roomRouter = require("./routes/roomRouter.js");

var corsOptions = {
  origin: "*",
};

//middleware
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//routers
app.use("/customers", customerRouter);
app.use("/rooms", roomRouter);

//Port
const PORT = process.env.PORT || 8080;

//server
app.listen(PORT, () => {
  console.log(`server started running on port ${PORT}`);
});
