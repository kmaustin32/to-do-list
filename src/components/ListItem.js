import React from 'react';
import ToDoList from './ToDoList';
import {motion} from 'framer-motion'
import {fall} from '../animation'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, facheck, faTrashAlt} from '@fortawesome/free-solid-svg-icons';


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
        <motion.div
         className="to-do"
         key={item.id}
         variants={fall}
         initial='hidden'
         animate='show'
         exit='exit'>
            <li className={`item ${item.completed ? 'doneItem' : ''}`}>{text}</li>
            <button 
            className="complete" 
            onClick={completeHandler}>
                <FontAwesomeIcon icon={faCheck} />
            </button>
            <button 
            className="delete"
            onClick={deleteHandler}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </motion.div>
    )
};

export default ListItem;