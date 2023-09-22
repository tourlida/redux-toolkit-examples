import { User } from "../store/slices/usersSlice";

interface AlbumsListProps{
    user:User;
}
function AlbumsList({user}:AlbumsListProps){
    return <div>
        Albums from {user.name}
    </div>

}


export default AlbumsList;