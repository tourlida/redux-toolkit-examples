import { useThunk } from "../hooks/useThunk";
import { deleteUser } from "../store";
import { User } from "../store/slices/usersSlice";
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { Accordion } from "./Accordion";
import AlbumsList from "./ AlbumsList";

interface UserListItemProps {
  user: User;
}

export function UserListItem({ user }: UserListItemProps) {
    const [doDeleteUser,isLoading,error] = useThunk(deleteUser);

    const handleDeleteUser=()=>{
        doDeleteUser(user);
    }

    const header = <>
     <Button className="mr-3" loading={isLoading} onClick={handleDeleteUser}>
            <GoTrash/>
        </Button>
        {
            error && <div> Error deleting user </div>
        }
        {user.name}
    
    </>

  return  <Accordion header={header}>
    <AlbumsList user={user}/>
  </Accordion>;
}
