import React from 'react';
import ReactDOM from 'react-dom'
import Todo from './Todo'
import './index.css'

const App =()=>{
    return (
        <div>
        <div className="ui col-8">
            <h3 className="text-center">Todo</h3>
            <div className="text-input mt-3 mb-3">
                <input type="text" className="form-control" aria-label="Checkbox for following text input"/>
            </div>
            <div class="todo-list">
                <Todo name="Paint" />
                <Todo name="Dance"/>
                <Todo name="Hike 5km"/>
           </div>
        </div>
        </div>)
}

ReactDOM.render(<App/>, document.querySelector('#root'))