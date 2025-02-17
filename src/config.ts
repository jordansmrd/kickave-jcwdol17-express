/** @format */
//@ts-nocheck
import { config } from "dotenv";
import { resolve } from "path";
import { PrismaClient } from "@prisma/client";
import MidtransClient from "midtrans-client";

config({ path: resolve(__dirname, `../${".env"}`) });
const NODE_ENV = process.env.NODE_ENV || "development";
const envFile = NODE_ENV === "development" ? ".env.local" : ".env";
config({ path: resolve(__dirname, `../${envFile}`), override: true });

export const PORT = process.env.PORT || 8000;

export const prisma = new PrismaClient();

export const jwt_secret = process.env.ACCESS_SECRET || "";
export const refresh_jwt_secret = process.env.REFRESH_SECRET || "";
export const cloudinary_config = process.env.CLOUDINARY_URL || "";

export const node_account = {
  user: process.env.NODEMAILER_USER || "",
  pass: process.env.NODEMAILER_PASS || "",
};

export const snap = new MidtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
});

export const midtrans_server_key = process.env.MIDTRANS_SERVER_KEY || "";
