import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = { name: '', tag: '', experience: 'junior' };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.target.value });
  };
  // handleNameChange = evt => {
  //   this.setState({ name: evt.target.value });
  //   console.log(evt.target.value);
  // };
  // handleTagChange = evt => {
  //   this.setState({ tag: evt.target.value });
  //   console.log(evt.target.value);
  // };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmitProps(this.state);

    console.log(1, this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', tag: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          Nickname
          <input
            id={this.tagInputId}
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <p>YOur level</p>
        <label htmlFor="">
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>

        <button type="submit">Spend</button>
      </form>
    );
  }
}
export default Form;
