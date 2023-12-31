import {
  Avatar,
  Button,
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
import { createRandomMovie } from "../data";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { Movie } from "../models";
import { useDispatch, useSelector } from "react-redux";
import { RootState, addMovie, removeMovie } from "../store";

function MoviesPlaylist() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);


  const dispatch = useDispatch();
  const moviesPlaylist:Movie[] =  useSelector((state:RootState)=>{
    return state.movies;
  });

  const handleMovieAdd = (movie:Movie) => {
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = () => {
    if (selectedMovie) {
      dispatch(removeMovie(selectedMovie));
    }
    handleClose();
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>,movie:Movie) => {
    setSelectedMovie(movie)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderedMovies = moviesPlaylist.map((movie) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
        <Card sx={{ maxWidth: 345 }} key={movie.id}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                <LibraryMusicIcon />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" onClick={(e)=>handleClick(e,movie)}>
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            sx={{ height: 140 }}
            image={movie.imageUrl}
            title="green iguana"
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
          style={{}}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem
            onClick={handleMovieRemove}
          >
            Delete <DeleteIcon sx={{ marginLeft: 1 }} />
          </MenuItem>
        </Menu>
      </Grid>
    );
  });

  return (
    <div
      style={{ width: "calc(100% - 32px)", margin: "auto", marginTop: "48px" }}
    >
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="h4">Movies Playlist</Typography>
        <Button
          onClick={() => handleMovieAdd(createRandomMovie())}
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ maxHeight: "42px", whiteSpace: "nowrap" }}
        >
          {" "}
          Add movie
        </Button>
      </Stack>
      <Grid container spacing={2} style={{ padding: "48px 0px" }}>
        {renderedMovies}
      </Grid>
    </div>
  );
}

export default MoviesPlaylist;
