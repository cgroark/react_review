//if a Component only has a render method, you can just write it as a stateless functional component

//this 
function HelloWorld(props) {
  return (
    <div>Hello {props.name}</div>
  )
}
ReactDOM.render(<HelloWorld name='Tyler' />, document.getElementById('app'))

//instead of this

class HelloWorld extends React.Component {
  render () {
    return (
      <div>Hello {this.props.name}</div>
    )
  }
}
ReactDOM.render(<HelloWorld name='Tyler' />, document.getElementById('app'))