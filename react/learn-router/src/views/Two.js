import React from 'react';
import {Link} from 'react-router-dom';

class Two extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="Two">
                <h1>我是第2个页面</h1>
                <Link to='/'>调回第一个页面</Link>
            </div>
        )
    }
}

export default Two;