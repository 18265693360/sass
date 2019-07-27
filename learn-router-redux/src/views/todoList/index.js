import React from 'react';
import Header from './components/TodoHeader';



class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="todo">
              <Header />
            </div>
        )
    }
}

export default TodoList;