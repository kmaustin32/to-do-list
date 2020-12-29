import React from 'react';

const Form = ({input, setInput, list, setList, setStatus}) => {

    const inputTextHandler = (event) => {
        setInput(event.target.value);
    };

    const toDoHandler = (event) => {
        event.preventDefault();
        setList([...list, {text: input, completed: false, id: Math.random() * 1000}]);
        setInput('')
    };

    const statusHandler = (event) => {
        setStatus(event.target.value)
    }

    return(
        <form className="form">
            <input 
            type="text" 
            className="to-do-input"
            onChange={inputTextHandler}
            value={input} />
            <button onClick={toDoHandler}>Submit</button>
            <div className="select">
                <select onChange={statusHandler} name="" id="">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    );
};

export default Form;