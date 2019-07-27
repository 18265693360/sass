import React from 'react';
import store from '../store/index';


class ReduxWithCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    increment = () =>{
        // 修改state的唯一方法就是 store.dipatch({type: action})
        store.dispatch({type: "INCREMENT"})
    };

    decrement = () =>{
        store.dispatch({type: 'DECREMENT'})
    };

    incrementWhenOdd = () =>{
        const state = store.getState();
        if (state % 2 == 1){
             this.increment();
        }
    };

    incrementWhenAsync = () => {
        setTimeout(()=>{
            this.increment();
        },2000)
    };

    render() {
        return (
            <div className="learn-router-redux">
                点击次数：{store.getState().count}
                {" "}
                <button onClick={this.increment}>++</button>
                {" "}
                <button onClick={this.incrementWhenOdd}>increment when odd</button>
                {" "}
                <button onClick={this.decrement}>--</button>
                {" "}
                <button onClick={this.incrementWhenAsync}>async 增加</button>
                {" "}
            </div>
        )
    }
}

export default ReduxWithCount;