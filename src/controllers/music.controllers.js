import { MusicModel } from "../modules/music.models";

export const createMusic = async (req, res) => {
  try {
    const { title, album, duration, realeaseDate, artist } = req.body;

    const newMusic = MusicModel.create({
      title,
      album,
      duration,
      realeaseDate,
      artist,
    });

    return res.status(201).json({
      msg: "Cancion creada correctamente",
      data: newMusic,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

export const getAllMusic = async (req, res) => {
  try {
    const music = await MusicModel.find().populate("artist")

    return res.status(200).json({
      msg: "Se encontraron las canciones correctamente",
      data: music,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};