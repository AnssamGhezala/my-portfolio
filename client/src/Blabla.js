import React, { Component } from "react";

class Blabla extends Component {
  state = {
    response: "",
    name: "",
    email: "",
    message: "",
    responseToPost: ""
  ***REMOVED***
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  ***REMOVED***
  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state.post);
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  ***REMOVED***

  handleGmail = async e => {***REMOVED***
  render() {
    return (
      <div className="contactForm">
        <form onSubmit={this.handleSubmit}>
          <p>{this.state.responseToPost}</p>
          <h3>Get in touch</h3>
          <div className="form-group">
            <input
              type="text"
              pattern=".{1,}"
              title="At least one character"
              className="form-control"
              value={this.state.name}
              onChange={e =>
                this.setState({
                  name: e.target.value
                })
              }
              placeholder="Name"
              id="contact-name"
            />
            <label
              className="input-field-icon icon-user"
              htmlFor="login-name"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="characters@characters.domain"
              value={this.state.email}
              onChange={e =>
                this.setState({
                  email: e.target.value
                })
              }
              placeholder="Email"
              id="contact-email"
            />
            <label
              className="input-field-icon icon-email"
              htmlFor="login-email"
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              value={this.state.message}
              onChange={e =>
                this.setState({
                  message: e.target.value
                })
              }
              placeholder="Message"
              id="contact-message"
              rows="1"
            />
          </div>

          <button
            id="contact-send"
            type="submit"
            className="btn btn-primary btn-lg btn-block"
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Blabla;
