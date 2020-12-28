import React from 'react';

const ListItem = ({text, key, list, setList, item}) => {
    
    const deleteHandler = () => {
        setList(list.filter(elem => elem.id !== item.id))
    };

    const completeHandler = () => {
        setList(list.map((elem) => {
            if(elem.id === item.id) {
                return {
                    ...elem,
                    completed: !elem.completed
                };
            };
            return elem;
        }));
    };

    return(
        <div className="to-do">
            <li className="item">{text}</li>
            <button 
            className="complete" 
            onClick={completeHandler}>Complete</button>
            <button 
            className="delete"
            onClick={deleteHandler}>Delete</button>
        </div>
    )
};

export default ListItem;