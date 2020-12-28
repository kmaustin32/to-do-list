import React from 'react';
//Import Component
import ListItem from './ListItem';

const ToDoList = ({list, setList, filtered}) => {

    return(
        <div className="to-do-container">
            <ul className="to-do-list">
                {filtered.map(item => (
                    <ListItem
                    text={item.text}
                    key={item.id}
                    list={list}
                    item={item}
                    setList={setList} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;