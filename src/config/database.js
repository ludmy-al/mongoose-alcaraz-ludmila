import mongoose from "mongoose";

export const startDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/db_mongoose");

        console.log("Conexion con la DB exitosa");
    } catch (error) {
        console.log("No se c+puco conectar con la DB", error);
    }
};