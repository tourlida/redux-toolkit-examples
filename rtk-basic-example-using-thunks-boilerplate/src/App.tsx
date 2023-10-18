import { Button, Divider } from "@mui/material";
import MoviePlaylist from "./components/MoviesPlaylist";
import SongPlaylist from "./components/SongsPlaylist";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

export default function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {};

  // Use selectors to get data in the App component
  const movies = useSelector((state: RootState) => state.movies.data);
  const songs = useSelector((state: RootState) => state.songs.data);

  return (
    <>
      <Button
        onClick={() => handleResetClick()}
        variant="contained"
        endIcon={<RestartAltIcon />}
        sx={{ mb: 2 }}
      >
        {" "}
        Reset Both Playlists
      </Button>
      <Divider />
      <MoviePlaylist data={movies} />
      <Divider />
      <SongPlaylist data={songs} />
    </>
  );
}
