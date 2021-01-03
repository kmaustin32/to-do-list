import React from 'react';
//Import Component
import ListItem from './ListItem';
import {AnimatePresence} from 'framer-motion'
import {fall} from '../animation'

const ToDoList = ({list, setList, filtered}) => {

    return(
        <div className="to-do-container">
            <ul className="to-do-list">
                <AnimatePresence>
                {filtered.map(item => (
                    <ListItem
                    text={item.text}
                    key={item.id}
                    list={list}
                    item={item}
                    setList={setList} />
                ))}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default ToDoList;