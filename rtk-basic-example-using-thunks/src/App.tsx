import { Button, Divider } from "@mui/material";
import MoviePlaylist from "./components/MoviesPlaylist";
import SongsPlaylist from "./components/SongsPlaylist";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useDispatch, useSelector } from "react-redux";
import { resetAllData } from "./store/thunks/resetThunk";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { RootState } from "./store";

export default function App() {
  const [,setResetLoading]=useState(true);
  const dispatch = useDispatch();

  const handleResetClick = useCallback(() => {
    setResetLoading(true);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch(resetAllData())
      .unwrap()
      .then(() => {
        toast.success("Playlists reseted succesfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(() =>{
        toast.error(
          "Oops! There was an issue while reseting your playlists. Please try again.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      })
      .finally(() => setResetLoading(false));
  },[dispatch]);

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
      <MoviePlaylist data={movies}/>
      <Divider />
      <SongsPlaylist data={songs}/>
    </>
  );
}
