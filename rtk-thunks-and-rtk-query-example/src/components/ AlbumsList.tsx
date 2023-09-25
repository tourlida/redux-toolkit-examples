import { useFetchAlbumsQuery } from "../store";
import { User } from "../store/slices/usersSlice";

interface AlbumsListProps{
    user:User;
}
function AlbumsList({user}:AlbumsListProps){
    const {data, isLoading,error}=  useFetchAlbumsQuery(user);
    console.log(data,error,isLoading);
    return <div>
        Albums from {user.name}
    </div>

}


export default AlbumsList;