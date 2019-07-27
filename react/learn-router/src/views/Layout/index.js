import React from 'react';
import {Link} from 'react-router-dom';

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleJump = (path) => {
        // console.log(this.props);
        // this.props.history.push(path)
        this.props.history.go(-1)
    };

    render() {
        return (
            <div className="layout">
                <h1 className='title'>
                    欢迎你
                </h1>
                <aside>
                    <ul>
                        <li>
                            <Link to='/layout'>
                                首页
                            </Link>
                        </li>
                        <li>
                            <Link to='/layout/two'>
                                第二页
                            </Link>
                        </li>
                        <li>
                            <Link to='/layout/notfount'>
                                404
                            </Link>
                        </li>
                        <li>
                            <button onClick={()=>{
                                this.handleJump('/layout')
                            }}>跳转到首页</button>
                        </li>
                        <li>
                            <button onClick={()=>{
                                this.handleJump('/layout/two')
                            }}>跳转到第二页</button>
                        </li>
                    </ul>
                </aside>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;

