import {Component} from 'react'

import msg from '../Message'
import loginMsg from '../Login'
import logoutMsg from '../Logout'

import './index.css'
import '../Message/index.css'
import '../Login/index.css'
import '../Logout/index.css'

class Home extends Component {
  state = {isLogged: false}

  onChangeStatus = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  render() {
    const {isLogged} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="message">{msg(isLogged)}</h1>
          <button className="button" onClick={this.onChangeStatus}>
            {!isLogged && loginMsg}
            {isLogged && logoutMsg}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
