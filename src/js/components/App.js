import React, { PropTypes, Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="contianer-fluid">
        <p>Header</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;