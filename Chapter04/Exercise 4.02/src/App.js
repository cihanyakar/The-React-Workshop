import React, { Component } from 'react';

class LifecycleTest extends Component {
  constructor(props) {
    super(props);
    console.log('LifecycleTest Constructor');
  }
  render() {
    return <p>I only show up if the conditional is true!</p>;
  }
}

class App extends Component {
  renderLifecycleTest() {
    if (false) {
      return <LifecycleTest />;
    } else {
      return;
    }
  }
  render() {
    return (
      <div className="App">
        Hello Conditional
        {true && <LifecycleTest />}
      </div>
    );
  }
}

export default App;
