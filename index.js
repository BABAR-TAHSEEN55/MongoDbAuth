const express = require("express");
const app = express();
const PORT = 4000;
const userRouter = require("./routes/Admin");

app.use(express.json());
app.use("/User", userRouter);
app.listen(PORT, () => console.log("Server started Successfully"));
