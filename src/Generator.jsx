import React, { Component } from "react";
import Meme from "./Meme";

class Generator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      imgSrc: "https://i.imgflip.com/1bij.jpg",
      allmemeImgs: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ allmemeImgs: response.data.memes });
      });
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit() {
    let idx = Math.floor(Math.random() * this.state.allmemeImgs.length);
    this.setState({
      imgSrc: this.state.allmemeImgs[idx].url
    });
  }

  render() {
    return (
      <div className="Meme-area">
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="text"
              placeholder="Top Text"
              name="topText"
              value={this.state.topText}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              placeholder="Bottom Text"
              name="bottomText"
              value={this.state.bottomText}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group col-md-4">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleSubmit}
            >
              Generate!
            </button>
          </div>
        </div>
        <Meme data={this.state} />
      </div>
    );
  }
}

export default Generator;
