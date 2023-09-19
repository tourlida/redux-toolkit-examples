import { useDispatch } from "react-redux";
import "./App.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { reset } from "./store";

export default function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    console.log('reset->')
    dispatch(reset());
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
