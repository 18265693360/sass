import React from 'react';

class Person extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="person">
                <h1>
                    当前用户id是：
                    {this.props.match.params}
                </h1>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props);
    }
}

export default Person;