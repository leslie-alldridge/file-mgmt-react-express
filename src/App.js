import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    selectedFile: null
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);

    axios.post("gs://lol1-aac67.appspot.com", fd).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default App;
