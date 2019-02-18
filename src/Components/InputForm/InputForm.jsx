import React from 'react'
import InputText from '../InputText/InputText.jsx'

// eslint-disable-next-line react/prefer-stateless-function
export default class InputForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      enteredInput: null,
    }

    // 2: Binding
    // Bind handler function to `this`
    this.inputStateHandler = this.inputStateHandler.bind(this);
  }

  // 2: Set State Handler
  // Use a function to contain `setState`
  // Set the state to event.target.value
  // event.target.value is passed through params
  inputStateHandler(event) {
    this.setState({
      enteredInput: event.target.value
    })
  }

  render() {
    let { enteredInput } = this.state

    return (
      <div id="login-form">
        <form>
          {/* Username Input */}
          {/* 3: stateText === HTML value */}
          {/*
            3: Added onChange inside InputForm and InputText
          */}
          <InputText
            divId="username-input"
            labelText="Username"
            type="text"
            placeholder="jen@email.com"
            name="username"
            stateText={enteredInput}
            onChange={this.inputStateHandler}
          />

          <button type="submit">Log In</button>
        </form>
      </div>
    )
  }
}
