import { useThunk } from "../hooks/useThunk";
import { deleteUser } from "../store";
import { User } from "../store/slices/usersSlice";
import { GoTrash } from "react-icons/go";
import Button from "./Button";

interface UserListItemProps {
  user: User;
}

export function UserListItem({ user }: UserListItemProps) {
    const [doDeleteUser,isLoading,error] = useThunk(deleteUser);

    const handleDeleteUser=()=>{
        doDeleteUser(user);
    }

  return (
    <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
        <Button className="mr-3" loading={isLoading} onClick={handleDeleteUser}>
            <GoTrash/>
        </Button>
        {
            error && <div> Error deleting user </div>
        }
        {user.name}
        </div>

      </div>
    </div>
  );
}
