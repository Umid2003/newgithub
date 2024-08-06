import React, { Component } from 'react'
import Cards from './components/Cards'
import { GlobalStyled } from './components/GlobalStyled'
import Navbar from './components/Navbar'

export default class App extends Component {
  state = {
    users: [],
    search: ''
  }
  handleValue = (e) => {
    this.setState({
      search: e.target.value
    })
  }



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => this.setState({ users: data }))
  }



  render() {
    const { users, search } = this.state
    const searchRobot = users.filter(user => {
      return user.name.toLowerCase().includes(search)
    })
    return (
      <div>
        <GlobalStyled />
        <Navbar search={this.state.search} handleValue={this.handleValue} />
        <Cards users={searchRobot} />
      </div>
    )
  }
}
