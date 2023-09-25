
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

type UseThunkReturnType = [
    (args?: any) => void,
    boolean,
    any
  ];

  
function useThunk(thunk: any):UseThunkReturnType{
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    const dispatch = useDispatch();
  
    const runThunk = useCallback((args:any) =>{
      setIsLoading(true);
      dispatch(thunk(args)).unwrap().catch((err:any)=>setError(err)).finally(()=> setIsLoading(false));
    },[dispatch, thunk]);
  
    return [runThunk,isLoading,error];
  }

export {useThunk};