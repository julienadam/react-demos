import React from "react";

class NameForm extends React.Component<{}, { value: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  }
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <p>Current data : {this.state.value}</p>
        <form onSubmit={this.handleSubmit}><label> Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      );
  }
}
export default NameForm;