import { Component } from 'react';
import Form from './Form/Form';
// import SignUpForm from './SignUpForm/SignUpForm';

class App extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = evt => {
    this.setState({ inputValue: evt.target.value });
    console.log(evt.target.value);
  };

  formSubmitHandler = data => {
    console.log('data', data);
  };
  render() {
    const { inputValue } = this.state;
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <Form onSubmitProps={this.formSubmitHandler} />
        {/* <SignUpForm /> */}
      </>
    );
  }
}
export default App;
