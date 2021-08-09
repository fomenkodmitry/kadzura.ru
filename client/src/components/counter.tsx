import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useNamedSelector} from "../hooks/useNamedSelector";
import {addCount, setCount} from "../features/counter/counterSlice";

export const Counter: React.FC = () => {
    const dispatch = useDispatch();

    const getCounter = () => {
        dispatch(setCount(0))
    };

    const addCounter = () => {
        dispatch(addCount(1))
    };

    useEffect(() => {
        getCounter()
    }, [])

    const {count} = useNamedSelector('counterTest')

    return (
        <div>
            <span>{count}</span>
            <button onClick={addCounter}>add count</button>
        </div>
    )

}