import store from "./redux/store";
import React from 'react'


import AddTodoButton from './VD2/components/todo/AddTodoButton';
import Counter2 from './VD2/components/counter/Counter';
import TodoList from './VD2/components/todo/TodoList';


function Counter() {

    const increase = () => {
        store.dispatch({
            type: 'counter/incremented'
        });
    }

    const decrease = () => {
        store.dispatch({
            type: 'counter/decremented'
        });
    }

    const updateData = () => {
        store.subscribe(() => console.log(store.getState()));
    };

    updateData();

    return (
        <div>
            <p>Value: {store.getState().value}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}


function VD2(){
return(
    <div>
        <Counter2 /> <br />
        <AddTodoButton />
        <TodoList />
      </div>
)
}

export default {Counter,VD2 };
