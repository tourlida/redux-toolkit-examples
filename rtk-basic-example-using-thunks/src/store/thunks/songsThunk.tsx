import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Song } from "../../models";

// Fetch songs
export const fetchSongs = createAsyncThunk(
  'songs/fetchSongs',
  async () => {
    const response = await axios.get('http://localhost:3005/songs');
    return response.data;
  }
);

// Add a new song
export const addSong = createAsyncThunk(
  'songs/addSong',
  async (song:Song) => {
    const response = await axios.post('http://localhost:3005/songs', song);
    return response.data;
  }
);

// Delete a song by ID
export const deleteSong = createAsyncThunk(
  'songs/deleteSong',
  async (songId) => {
    await axios.delete(`http://localhost:3005/songs/${songId}`);
    return songId; 
  }
);

// Delete all songs
export const deleteAllSongs = createAsyncThunk(
  'songs/deleteAllSongs',
  async () => {
    const response = await axios.get('http://localhost:3005/songs');
    const songs = response.data;

    // Send delete requests for each song
    const deletePromises = songs.map((song: Song) => axios.delete(`http://localhost:3005/songs/${song.id}`));

    // Wait for all delete requests to complete
    await Promise.all(deletePromises);
  }
);
