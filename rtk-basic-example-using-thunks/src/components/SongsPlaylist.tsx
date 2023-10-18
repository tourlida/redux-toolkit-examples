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
import { useCallback, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { Song } from "../models/index.tsx";
import { createRandomSong } from "../utils.tsx/index.tsx";
import { addSong, deleteSong } from "../store/index.tsx";
import { useDispatch } from "react-redux";
import LoadingSkeleton from "./LoadingSkeleton.tsx";
import LoadingButton from "@mui/lab/LoadingButton";
import { toast } from "react-toastify";
import { SerializedError } from "@reduxjs/toolkit";


interface SongsPlaylistProps{
  isLoading: boolean;
  data: Song[];
  error: SerializedError | null;
}

function SongsPlaylist({data,isLoading:isLoadingSongs,error:loadingSongsError}:SongsPlaylistProps) {
  const [isAddingSong, setIsAddingSong] = useState(false);

  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const dispatch = useDispatch();
  

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  },[]);

  const handleSongAdd = useCallback((song: Song) => {
    setIsAddingSong(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(addSong(song))
      .unwrap()
      .then(() => {
        toast.success("Song added succesfully!", {
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
      .catch(() => {
        toast.error(
          "Oops! There was an issue adding your song. Please try again.",
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
      .finally(() => setIsAddingSong(false));
  },[dispatch]);

  const handleSongRemove =useCallback(() => {
    if (selectedSong) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch(deleteSong(selectedSong.id))
        .unwrap()
        .then(() => {
          toast.success("Song deleted succesfully!", {
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
        .catch(() => {
          toast.error(
            "Oops! There was an issue deleting your song. Please try again.",
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

        });
    }
    handleClose();
  },[dispatch, handleClose, selectedSong]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>, song: Song) => {
    setSelectedSong(song);
    setAnchorEl(event.currentTarget);
  };

  if (isLoadingSongs) {
    return <LoadingSkeleton />;
  }

  if (loadingSongsError) {
    return <div>Error fetching data</div>;
  }

  const renderedSongs = data.map((song) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={song.id}>
      <Card sx={{ maxWidth: 345, height: 365  }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              <LibraryMusicIcon />
            </Avatar>
          }
          action={
            <IconButton
              aria-label="settings"
              onClick={(e) => handleClick(e, song)}
            >
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardMedia
          sx={{ height: 140 }}
          image={song.imageUrl}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {song.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {song.description}
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
        <MenuItem onClick={handleSongRemove}>
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
        <Typography variant="h4">Songs Playlist</Typography>
        <LoadingButton
          onClick={() => handleSongAdd(createRandomSong())}
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ maxHeight: "42px", whiteSpace: "nowrap" }}
          loading={isAddingSong}
        >
          {" "}
          Add Song
        </LoadingButton>
      </Stack>
      <Grid container spacing={2} style={{ padding: "48px 0px" }}>
        {renderedSongs}
      </Grid>
    </div>
  );
}

export default SongsPlaylist;
