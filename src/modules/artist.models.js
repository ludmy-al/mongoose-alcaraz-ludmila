import { Schema } from "mongoose";

const artisSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    genre: {
      type: String,
      require: true,
    },
    nationality: {
      type: String,
    },
    user: {
      type: String,
      require: true,
    },
  },
  {
    timestamp: true,
  },
);