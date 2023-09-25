import {  useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import { Accordion } from "./Accordion";
import { Album, User } from "../store/models";
interface AlbumsListProps {
  user: User;
}

function AlbumsList({ user }: AlbumsListProps) {
  const { data, isLoading, error } = useFetchAlbumsQuery(user);
  let content;

  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((album: Album) => {
      const header = <div>{album.title}</div>;

      return (
        <Accordion key={album.id} header={header}>
          list of photos in the album
        </Accordion>
      );
    });
  }

  return (
    <div>
      Albums from {user.name}
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
