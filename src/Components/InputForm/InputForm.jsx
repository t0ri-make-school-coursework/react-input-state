import React from 'react'
import InputText from '../InputText/InputText.jsx'

// eslint-disable-next-line react/prefer-stateless-function
export default class InputForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      enteredUsername: null,
    }
  }

  usernameStateHandler(value) {
    this.setState({
      enteredUsername: value,
    })
  }

  render() {
    let { enteredUsername } = this.state

    return (
      <div id="login-form">
        <form>
          {/* Username Input */}
          <InputText
            divId="username-input"
            labelText="Username"
            type="text"
            placeholder="jen@email.com"
            name="username"
            stateText={enteredUsername}
          />

          <button type="submit">Log In</button>
        </form>
      </div>
    )
  }
}
