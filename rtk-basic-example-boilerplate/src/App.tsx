import { Button, Divider } from "@mui/material";
import MoviePlaylist from "./components/MoviesPlaylist";
import SongPlaylist from "./components/SongsPlaylist";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
export default function App() {
  const handleResetClick = () => {};

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
      <MoviePlaylist />
      <Divider />
      <SongPlaylist />
    </>
  );
}
