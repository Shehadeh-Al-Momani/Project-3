import React from 'react';
import "../../src/App.css";

const TodoItem = (props) => {
    const { oneProduct, num , i , updateOne ,deleteOne } = props;
    const { id , version , product, price , category , department } = oneProduct;

    const updateItem = () => {
        let newPrice = price *0.8 ;
        if ( price === null ) {newPrice = 0 ;}
        updateOne(newPrice,id)
    }
    
        const deleteItem = () => {
        deleteOne(i,id)
    }

    return (
        <div className="todo-list">
            {num}. {product}{' : '} {price}{" $ "}
            <button class="delete" onClick={deleteItem}> X </button>
            <button class="update" onClick={updateItem}> discount 80% </button>

        </div>
    );
}

export default TodoItem