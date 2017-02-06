var React = require('react')
var ReactDOM = require('react-dom')

// e.g. getRandomInt(1, 6)
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Header = React.createClass({
  render: function () {
    return (
    <h1>Welcome to {this.props.name} Casino!</h1>
    );
  }
})

var Die = React.createClass({
  render: function() {
    return (
      <div className="col-sm-4">
        <img src={"http://golearntocode.com/images/dice/" + getRandomInt(1,6) + ".png"} />
      </div>
    );
  }
})

var App = React.createClass({
  render: function() {
    return (
      <div>
      <div className="container">
        <Header name="Kevin's"/>
        <div className="row">
          <Die />
          <Die />
        </div>
      </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
