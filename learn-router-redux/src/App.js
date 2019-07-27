import React from 'react';
import Count from './components/Count';
import ReduxWithCount from './components/ReduxWithCount';
import {BrowserRouter as Router, Route} from "react-router-dom";
import TodoList from './views/todoList'


// 传统的react 写计数器  对比  redux
function App() {
  return (
      <Router>
          <div className="App">

              <Route path="/reduxWithCount" component={ReduxWithCount} />

              <Route path="/TodoList" component={TodoList} />

          </div>

      </Router>

  );
}


//     <ReduxWithCount storeState={props.storeState} />

export default App;
