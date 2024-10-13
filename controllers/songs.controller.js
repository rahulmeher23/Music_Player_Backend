import { fetchAllSongs } from "../service/songsService.js";

// Controller to handle GET request to /songs
export const getAllSongs = async (req, res) => {
  try {
    const songs = await fetchAllSongs();

    if (!songs.length) {
      return res.status(404).json({ message: "No songs found" });
    }

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: songs,
    });
  } catch (error) {
    console.error("Error in getAllSongs:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
