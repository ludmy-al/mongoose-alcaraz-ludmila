import { ArtistModel } from "../modules/artist.models.js";

export const createArtist = async (req, res) => {
  try {
    const { name, genre, nationality } = req.body;

    const newArtist = ArtistModel.create({
      name,
      genre,
      nationality,
    });

    return res.status(201).json({
      msg: "Artista creado correctamente",
      data: newArtist,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

export const getAllArtist = async (req, res) => {
  try {
    const artist = await ArtistModel.find()
    return res.status(200).json({
      msg: "Se encontro todos los artistas",
      data: artist,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};