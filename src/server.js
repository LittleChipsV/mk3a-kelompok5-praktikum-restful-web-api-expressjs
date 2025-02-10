require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const bookRoutes = require("./routes/book");
const errorHandler = require("./middleware/globalErrorHandler");
const routeNotFoundHandler = require("./middleware/routeNotFoundHandler");
const helmet = require("helmet");
const limiter = require("./middleware/rateLimiter");
const sanitizeMiddleware = require("./middleware/sanitizeUserInput");

const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", limiter);
app.use(sanitizeMiddleware);

// Routes
app.use("/api/books", bookRoutes);

// 404 route handling
app.all("*", routeNotFoundHandler);

// Global error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.authenticate().then(() => {
   console.log("Berhasil terkoneksi ke basis data");
   app.listen(PORT, () => console.log(`Server berhasil dijalankan di port ${PORT}`));
}).catch((err) => console.error("Gagal terkoneksi ke basis data:", err));
