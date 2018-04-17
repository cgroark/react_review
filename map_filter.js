html 
//<div id='app'></div>

//map example
class Users extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(function(name){
          return <li> {name} </li>
        })
        }
      </ul>
    )
  }
}

ReactDOM.render(
  <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  document.getElementById('app')
);

//map example using prop types
var React = require('react');
var PropTypes = require('prop-types')

class Users extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(function (friend) {
          return <li>{friend}</li>
        })}
      </ul>
    )
  }
}
Users.propTypes = {
  list: PropTypes.array.isRequired
}

///filter example using keys
class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {this.props.list.filter(function(user){
            return user.friend === true;
          }).map(function(user){
            return <li key={user.name}> {user.name} </li>
          })}
        </ul>
        
        <hr />
        
        <h1> Non Friends </h1>
        <ul>
          {this.props.list.filter(function(user){
            return user.friend === false;
          }).map(function(user){
            return <li key={user.name}> {user.name} </li>
          })}
        </ul>        
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} 
  />,
  document.getElementById('app')
);