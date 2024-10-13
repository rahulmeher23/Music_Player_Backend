import { db } from "../config/firebase.js";

// Service to fetch all songs from Firestore
export const fetchAllSongs = async () => {
  try {
    // Reference to the 'songs' collection
    const songsRef = db.collection("songs");

    // Fetch all documents in the 'songs' collection
    const snapshot = await songsRef.get();

    const songsList = [];
    snapshot.forEach((doc) => {
      songsList.push({ id: doc.id, ...doc.data() });
    });

    return songsList;
  } catch (error) {
    console.error("Error in fetchAllSongs:", error);
    throw new Error("Error fetching songs");
  }
};
