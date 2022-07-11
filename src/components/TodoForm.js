import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [ input, setInput ] = useState("");
    const inputRef = useRef(null)

    useEffect(() => {inputRef.current.focus() }); // input에 커서 보이게 하기

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput("") // 검색란 초기화
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                className='todo-input' 
                type="text" 
                name="text" 
                placeholder="Add a todo" 
                value={input}
                onChange={handleChange}
                ref={inputRef}
            />
            <button className="todo-button">Add todo</button>
        </form>
    )
}

export default TodoForm;