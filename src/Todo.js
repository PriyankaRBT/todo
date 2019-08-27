import React from 'react'

const Todo = (props)=>{
    return(
        <div className="input-group mb-3">
        <div className="form-control" aria-label="Text input with checkbox">
            {props.name}
        </div>
        <div className="input-group-prepend">
            <div className="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input"/>
            </div>
        </div>    
    </div>
    )
}

export default Todo;