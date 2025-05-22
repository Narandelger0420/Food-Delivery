import { connect } from "mongoose";

export const connectDatabase = async () => {
  const dbConnectionString = process.env.MONGODB_CONNECTION_STRING;

  if (!dbConnectionString) throw new Error("Failed to connect to the MongoDB");

  try {
    await connect(dbConnectionString);
    console.log("Succesfully connected to the MongoDB");
  } catch (error) {
    console.error(error instanceof Error && error.message);
  }
};
