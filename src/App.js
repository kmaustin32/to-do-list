import React, {useState, useEffect} from 'react';
//components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

const App = () => {

    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const [status, setStatus] = useState('all'); 
    const [filtered, setFiltered] = useState([]); 

    const filterHandler = () => {
        switch(status) {
            case 'completed':
                setFiltered(list.filter(elem => elem.completed == true));
                break;
            case 'incomplete':
                setFiltered(list.filter(elem => elem.completed == false));
                break;
            default:
                setFiltered(list);
                break;
        }
    }

    //Save to local memory
    const saveLocalList = () => {
        localStorage.setItem('todoList', JSON.stringify(list));
    };

    const getLocalList = () => {
        if(localStorage.getItem('todoList') === null) {
            localStorage.setItem('todoList', JSON.stringify([])); 
        } else {
            let localList = JSON.parse(localStorage.getItem('todoList'));
            setList(localList)
        };
    };
    
    useEffect(() => {
        getLocalList();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalList();
    }, [status, list]);


    return (
        <div className="App">
            <div className="header">
                <h1>Ezra's To Do List </h1>
            </div>
            <Form
            input={input}
            setInput={setInput}
            list={list}
            setList={setList}
            setStatus={setStatus} />
            <ToDoList
            list={list}
            setList={setList}
            filtered={filtered} /> 
        </div>
    )
};

export default App;