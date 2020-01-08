import React from 'react';
import './App.css';
import Contact from './Contact'
import About from './About'
import Topics from './Topics'
import Homepage from './Homepage'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

class Testing extends React.Component {
  constructor() {
    super();
    this.state = { currentView: "home" };
  }
  render() {
    const currentView = this.state.currentView;
    return (
      <div class="App-header">
        <ul>
          <li onClick={() => this.setState({ currentView: "about" })}>About</li>
          <li onClick={() => this.setState({ currentView: "topics" })}>Topics</li>
          <li onClick={() => this.setState({ currentView: "contact" })}>Contact</li>
        </ul>
        {currentView === "contact" && <Contact />}
        {currentView === "about" && <About />}
        {currentView === "topics" && <Topics />}
        {currentView === 'home' && <Homepage/>}
      </div>
    );
  }
}

// class Testing extends React.Component {
//   render() {
//     return (
//       <Router>
//       <div class="App-header">
//         <ul>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/topics">Topics</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//         <Switch>
//           <Route path="/contact" component={Contact}/>
//           <Route path="/about" component={About}/>
//           <Route path="/topics" component={Topics}/>
//           <Homepage/>
//         </Switch>
//       </div>
//     </Router>
//     )
//   }
// }

export default Testing

