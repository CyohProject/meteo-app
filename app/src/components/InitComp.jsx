
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrPosName } from "../reducers/locationReducer";

export default function InitComp(){
    // WARNING --> If we use useState, we'll be able only to use its information in the return statement. I think that with re-renders the state goes again to its initial state and we can use it for, for example: sending it to dispatch actions and then to store and use it in other components.
    const dispatch = useDispatch();

    const API_key = useSelector((state) => state.API_key);
    const currPosName = useSelector((state) => state.currPosName);
    
    // Once the component is mounted, this will be executed
    useEffect(() => {
        dispatch(getCurrPosName(API_key));
    }, [dispatch]);

    // console.log(location)
    return (
        <div className="currentPosition-container">
            {currPosName}
        </div>
    )
}



