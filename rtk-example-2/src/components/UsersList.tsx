import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, fetchUsers } from "../store";
import Skeleton from "./Skeleton";

function UsersList() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state: RootState) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch]);

  if(isLoading){
    return <Skeleton times={6} className="h-10 w-full"/>
  }

  if(error){
    return <div>Error fetcing data...</div>
  }

    return <div>
    {
        data.map((user)=>{
            return <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {user.name}
                     </div>
            </div>
        })
    }
    </div>
  

}

export default UsersList;
