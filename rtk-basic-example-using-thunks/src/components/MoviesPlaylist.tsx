import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Fade,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useCallback, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import MovieIcon from "@mui/icons-material/Movie";
import { Movie } from "../models/index.tsx";
import { createRandomMovie } from "../utils.tsx/index.tsx";
import {  addMovie, deleteMovie, fetchMovies } from "../store/index.tsx";
import { useDispatch } from "react-redux";
import LoadingSkeleton from "./LoadingSkeleton.tsx";
import LoadingButton from "@mui/lab/LoadingButton";
import { toast } from "react-toastify";

interface MoviesPlaylistProps{
  data: Movie[];
}

function MoviesPlaylist({data}:MoviesPlaylistProps) {
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [loadingMoviesError, setLoadingMoviesError] = useState(null);
  const [isAddingMovie, setIsAddingMovie] = useState(false);
  const [, setIsDeletingMovie] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const dispatch = useDispatch();

  const fetchMoviesFromServer = useCallback(() => {
    setIsLoadingMovies(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(fetchMovies())
      .unwrap()
      .then(() => {})
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
      .catch((err) => setLoadingMoviesError(err))
      .finally(() => setIsLoadingMovies(false));
  },[dispatch]);

  useEffect(() => {
    fetchMoviesFromServer();
  }, [dispatch, fetchMoviesFromServer]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  },[]);

  const handleMovieAdd =  useCallback((movie: Movie) => {
    setIsAddingMovie(true);

    dispatch(addMovie(movie))
      .unwrap()
      .then(() => {
        toast.success("Movie added succesfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        //Trigger re-fetch when movie added
        fetchMoviesFromServer();
      })
      .catch(() => {
        toast.error(
          "Oops! There was an issue adding your movie. Please try again.",
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
      .finally(() => setIsAddingMovie(false));
  },[dispatch, fetchMoviesFromServer]);

  const handleMovieRemove = useCallback(() => {
    if (selectedMovie) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch(deleteMovie(selectedMovie.id))
        .unwrap()
        .then(() => {
          //Show success toast notification
          toast.success("Movie deleted succesfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

        //Trigger re-fetch when movie added
        fetchMoviesFromServer();
        })
        .catch(() => {
          toast.error(
            "Oops! There was an issue deleting your movie. Please try again.",
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
        .finally(() => setIsDeletingMovie(false));
    }
    handleClose();
  },[dispatch, fetchMoviesFromServer, handleClose, selectedMovie]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>, movie: Movie) => {
    setSelectedMovie(movie);
    setAnchorEl(event.currentTarget);
  };


  if (isLoadingMovies) {
    return <LoadingSkeleton />;
  }

  if (loadingMoviesError) {
    return <div>Error fetching data</div>;
  }

  const renderedMovies = data.map((movie) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
      <Card sx={{ maxWidth: 345, height: 365 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              <MovieIcon />
            </Avatar>
          }
          action={
            <IconButton
              aria-label="settings"
              onClick={(e) => handleClick(e, movie)}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title={movie.title}
          subheader={movie.description}
        />
        <CardMedia
          sx={{ height: 140 }}
          image={movie.imageUrl}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.description}
          </Typography>
        </CardContent>
      </Card>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleMovieRemove}>
          Delete <DeleteIcon sx={{ marginLeft: 1 }} />
        </MenuItem>
      </Menu>
    </Grid>
  ));

  return (
    <div
      style={{ width: "calc(100% - 32px)", margin: "auto", marginTop: "48px" }}
    >
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="h4">Movies Playlist</Typography>
        <LoadingButton
          onClick={() => handleMovieAdd(createRandomMovie())}
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ maxHeight: "42px", whiteSpace: "nowrap" }}
          loading={isAddingMovie}
        >
          {" "}
          Add Movie
        </LoadingButton>
      </Stack>
      <Grid container spacing={2} style={{ padding: "48px 0px" }}>
        {renderedMovies}
      </Grid>
    </div>
  );
}

export default MoviesPlaylist;
