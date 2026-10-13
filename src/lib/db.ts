import mysql from "mysql2/promise";

declare global {
  var __dbPool: mysql.Pool | undefined;
}

export const db =
  globalThis.__dbPool ??
  mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: "utf8mb4",
    waitForConnections: true,
    connectionLimit: 5,
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.__dbPool = db;
}