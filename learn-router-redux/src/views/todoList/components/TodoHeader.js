import React from 'react';
import store from '../../../store';
//store 是src目录下的文件


class TodoHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleAdd = () => {
        const item = {
            text: this.state.text,
            isDone: false,
            isEdit: false
        };
        store.dispatch({type: "ADD_TODO", item})
    };

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (
            <div className="todo-header">
                <input type="text" name="text" value={this.state.text}
                onChange={this.handleChange}/>

                <button onClick={this.handleAdd}>添加todo</button>
            </div>
        )
    }
}

export default TodoHeader;