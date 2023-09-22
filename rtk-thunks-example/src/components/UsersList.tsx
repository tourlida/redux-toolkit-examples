import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [dispatch, doFetchUsers]);

  const handleUserAdd = () => {
    doAddUser();
  };

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  }else if (loadingUsersError) {
    content =  <div>Error fetcing data...</div>;
  }else{
    content =data.map((user) => {
      return (
        <div key={user.id} className="mb-2 border rounded">
          <div className="flex p-2 justify-between items-center cursor-pointer">
            {user.name}
          </div>
        </div>
      );
    })
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd} loading={isCreatingUser}>
          + Add User
        </Button>
        {creatingUserError && "Error creating user"}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
