import React from 'react';
//引入路由
import {BrowserRouter as Router, Route, Link, Redirect, Switch, Prompt} from "react-router-dom";
import One from './views/One';
import Two from './views/Two';
import Person from './views/Person';
import NotFont from './views/NotFound';
import Layout from './views/Layout';

// switch 仅仅渲染一个 限制只能出现 一个路由 一个页面
//Prompt 阻止跳转
{/*<Prompt when={false/true} message="你确定你要离开这个页面"></Prompt>*/}

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    {/*   <Prompt when={true} message="你确定你要离开这个页面"></Prompt>*/}
                    <ul>
                        {/*<li><Link to='/'>首页</Link></li>*/}
                        {/*<li><Link to='/two'>第二页</Link></li>*/}
                        <li>
                            <Route path='/' exact={true} children={(props)=>(
                                <div>
                                    <Link to='/' className={props.match?'active':''}>首页</Link>
                                </div>
                            )}>
                            </Route>
                        </li>
                        <li>
                            <Route path='/Two' children={(props)=>(
                                <div>
                                    <Link to='/Two' className={props.match? 'active': ''}>第二页</Link>
                                </div>
                            )}>
                            </Route>
                        </li>
                    </ul>
                    <hr/>
                </header>
                <hr/>
                <Switch>
                    <Route path='/' exact component={One}></Route>
                    <Route path='/Two' component={Two}></Route>
                    <Route path='/Layout' render={(props)=>(
                        <Layout>
                            <Switch>
                                <Route path='/layout' exact component={One}></Route>
                                <Route path='/layout/two' component={Two}></Route>
                            </Switch>
                        </Layout>
                    )}></Route>
                    <Route path='/person/:id' component={Person}></Route>
                    <Route path='/not-found' component={NotFont}></Route>
                    <Route render={()=>(
                        <Redirect to='/not-found'></Redirect>
                    )}></Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
