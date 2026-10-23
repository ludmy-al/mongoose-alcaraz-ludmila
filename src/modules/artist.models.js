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
    //Propiedad embebida
    socialMedia: {
      instagram: {
        type: String,
        require: true,
      },
      youtube: {
        type: String,
        require: true,
      },
      spotify: {
        type: String,
        require: true,
      },

    },
  },
  {
    timestamp: true,
  },
);