import React from 'react';
import Form from './components/Form'
import List from './components/List'
import {BrowserRouter,Link,Route,} from 'react-router-dom'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <div>
       {
                 <ul>
                   <li>
                  <Link to ="/postlists" className="nav-link">Published</Link>
                </li>
                 <li>
                 <Link to="/posts" className="nav-link"> New post</Link> 

                </li>
                
                </ul>
               
          }
      
        <Route path="/" component={Home} exact={true}/>
             
              <Route path="/posts" component={Form}/>
              <Route path="/postlists" component={List} exact={true}/>
         
           
              </div>

       </BrowserRouter>
    </div>
  );
}

export default App;
