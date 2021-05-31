import React from 'react';

const Form = ({setInputText, inputText, todos, setTodos}) => {

    const inputTextHandler = (e) => {

        // console.log(e.target.value);
        setInputText(e.target.value);
    }


    const submitTodoHandler = (e) => {

        e.preventDefault();
        setTodos([
            ...todos, {

                text: inputText, 
                completed: false, 
                id: Math.random() * 10000

            }
        ]);

        // reset to default state
        setInputText('');
    }


    return(

        <form>

        {/* Form inputs */}
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"></input>
        <button className="todo-button" type="submit" onClick={submitTodoHandler}><i className="fas fa-plus-square"></i></button>


        {/* Todo List Options */}
        <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
        </div>
        </form>

    )

}

export default Form;