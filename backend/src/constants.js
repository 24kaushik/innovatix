export const DB_NAME = "innovatix";
export const PORT = 6969;
export const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: false,
  secure: process.env.NODE_ENV === "production",
};