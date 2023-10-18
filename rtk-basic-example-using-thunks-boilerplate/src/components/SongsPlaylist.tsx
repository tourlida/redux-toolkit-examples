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
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { Song } from "../models/index.tsx";
import { createRandomSong } from "../utils.tsx/index.tsx";


interface SongPlaylistProps{
  data: Song[];
}
function SongPlaylist({data}:SongPlaylistProps) {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  const handleSongAdd = (song: Song) => {
  };

  const handleSongRemove = () => {
    if (selectedSong) {}
    handleClose();
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>, song: Song) => {
    setSelectedSong(song);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderedSongs = data.map((song) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={song.id}>
      <Card sx={{ maxWidth: 345 , height: 365 }}>
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
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
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
        <Button
          onClick={() => handleSongAdd(createRandomSong())}
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ maxHeight: "42px", whiteSpace: "nowrap" }}
        >
          {" "}
          Add Song
        </Button>
      </Stack>
      <Grid container spacing={2} style={{ padding: "48px 0px" }}>
        {renderedSongs}
      </Grid>
    </div>
  );
}

export default SongPlaylist;
