// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  first = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  last = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    const firstNameCard = firstName ? (
      <div className="show-card">
        <p className="name">Joe</p>
      </div>
    ) : null

    const lastNameCard = lastName ? (
      <div className="show-card">
        <p className="name">Jonas</p>
      </div>
    ) : null

    return (
      <div className="bg-card">
        <h1 className="head">Show/Hide</h1>
        <div className="bg">
          <div className="card">
            <button onClick={this.first} className="btn" type="button">
              Show/Hide Firstname
            </button>

            <br />
            {firstNameCard}
          </div>
          <div className="card">
            <button onClick={this.last} className="btn" type="button">
              Show/Hide Lastname
            </button>
            <br />
            {lastNameCard}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
