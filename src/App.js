import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';


class App extends React.Component {

  state = {
    users: []
  };

  async componentDidMount() {
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users users={this.state.users} />
        </div>
      </div>
    );
  }

};
  

export default App;