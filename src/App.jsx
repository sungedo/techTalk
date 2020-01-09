import React from 'react';
import './App.css';
import Contact from './Contact'
import About from './About'
import Topics from './Topics'
import Homepage from './Homepage'
import Admin from './Admin'
import { Route, Link, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'

// using conditional renderingg
// class Testing extends React.Component {
//   constructor() {
//     super();
//     this.state = { 
//       currentView: "home"
//     };
//   }
//   render() {
//     const currentView = this.state.currentView;
//     return (
//       <div class="App-header">
//         <ul>
//           <li onClick={() => this.setState({ currentView: "home" })}>Home</li>
//           <li onClick={() => this.setState({ currentView: "about" })}>About</li>
//           <li onClick={() => this.setState({ currentView: "topics" })}>Topics</li>
//           <li onClick={() => this.setState({ currentView: "contact" })}>Contact</li>
//         </ul>
//         {currentView === 'home' && <Homepage/>}
//         {currentView === "contact" && <Contact />}
//         {currentView === "about" && <About />}
//         {currentView === "topics" && <Topics />}
//       </div>
//     );
//   }
// }
 
// Using React Router

class Testing extends React.Component {
  constructor() {
        super();
        this.state = { 
          isAdmin : true
        };
      }
  render() {
    const routes = [
      {
        path: '/about',
        component: About
      },
      {
        path: '/topics',
        component: Topics
      }, 
      {
        path: '/contact',
        component: Contact
      },
      {
        path: '/admin',
        component: Admin
      }
    ]
    
    const PrivateRoute = ({component : Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        this.state.isAdmin ? <Admin {...props}/>
        : <Redirect exact to='/'/>
      )} />
    )
    return (
      <Router>
      <div class="App-header">
        <ul>
          <li><Link exact to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to='/admin'>Admin</Link></li>
        </ul>

        {/* <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
          <Homepage/>
          <PrivateRoute/>
        </Switch> */}

        <Switch>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
          <PrivateRoute path='/admin' component={Admin}/> 
          <Homepage/>
        </Switch>
      </div>
    </Router>
    )
  }
}

export default Testing

