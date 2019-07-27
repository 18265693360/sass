import React from 'react';

class NotFound extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="todo-header">
                <h1>404! 习近平说，这个页面没有！</h1>

                <ul>
                    <li>1.假如不服，找纪委</li>
                    <li>2.假如不服，找上帝</li>
                </ul>

            </div>
        )
    }
}

export default NotFound;