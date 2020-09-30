import React, {Component} from 'react';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    console.log('Hello World!');
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Casie's Lorem Ipsum and Bill Murray App!</h1>
        </header>
        <main>
          <div id="intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </div>
          <div id="form">
            <label htmlFor="title">Title:</label>
            <input id="title"></input>
            <label htmlFor="description">Description:</label>
            <input id="description"></input>
            <label htmlFor="image">Image URL:</label>
            <input id="image"></input>
            <button>Submit</button>
          </div>
          <ul>
            <li><img src="http://www.fillmurray.com/200/250" alt="random bill murray"/></li>
            <li><img src="http://www.fillmurray.com/300/250" alt="random bill murray"/></li>
            <li><img src="http://www.fillmurray.com/50/50" alt="random bill murray"/></li>
            <li><img src="http://www.fillmurray.com/200/100" alt="random bill murray"/></li>
            <li><img src="http://www.fillmurray.com/50/100" alt="random bill murray"/></li>
            <li><img src="http://www.fillmurray.com/100/100" alt="random bill murray"/></li>
          </ul>
          </main>
          <footer id="footer">
            <p id="footerCopy">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div id="contactInfo">
              <p>Casie Siekman</p>
              <p>@CassandraDanger</p>
              <p>www.cassandradanger.com</p>
            </div>
          </footer>
      </div>
    );
  }
}

export default App;
