import { Button, Divider } from "@mui/material";
import MoviePlaylist from "./components/MoviesPlaylist";
import SongsPlaylist from "./components/SongsPlaylist";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

export default function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {};

   // Use selectors to get data in the App component
   const {
    isLoading: moviesLoading,
    error: moviesError,
    data: moviesData,
  } = useSelector((state: RootState) => state.movies);
  const {
    isLoading: songsLoading,
    error: songsError,
    data: songsData,
  } = useSelector((state: RootState) => state.songs);

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
      <MoviePlaylist data={moviesData} isLoading={moviesLoading} error={moviesError}/>
      <Divider />
      <SongsPlaylist data={songsData} isLoading={songsLoading} error={songsError}/>
    </>
  );
}
