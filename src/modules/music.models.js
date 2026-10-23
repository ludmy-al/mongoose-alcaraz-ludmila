import { model, Schema } from "mongoose";

const musicSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
        },
        album: {
            type: String,
        },
        duration: {
            type: Number,
            require: true,
        },
        realeaseDate: {
            type: Date,
            require: true,
        },
        artist: {
            type: String,
            ref: "Artist",
            require: true,
        },
    },
    {
        timestamp: true,
        versionKey: false
    },
)