const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorHandler");
const connectDB = require("./config/db");
const PORT = process.env.PORT;

const app = express();
connectDB();
app.use(cors({ origin: "https://p4-node-app-fe.vercel.app" }));
app.use(express.json());
app.use(helmet());

app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/tickets", require("./routes/ticketRoute"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
