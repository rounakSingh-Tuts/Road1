import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       list
    }

    this.OnDismiss = this.OnDismiss.bind(this);
   // this.onClickMe = this.onClickMe.bind(this);
  }

  OnDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID != id)
    this.setState({
      list: updatedList
    })
  }

  onClickMe() {
    console.log("clicked");
  }

  render() {
    return (
      <div>
        {
          this.state.list.map(item => 
            <div>
              <span>
                {item.title}
              </span>
              <button type="button" onClick={() => this.OnDismiss(item.objectID)}>
                Dismiss
              </button>
              <button type="button" onClick={() => this.onClickMe()}>
                Click Me
              </button>
            </div>
          )
        }
      </div>
    )
  }
}
export default App