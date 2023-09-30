import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="w-screen">
        <div className="sm:h-20 sm:w-40 md:w-52 lg:w-full bg-blue-800"></div>
        <div className="sm:h-20 sm:w-40 md:w-52 lg:w-full bg-yellow-800"></div>
        <div className="sm:h-20 sm:w-40 md:w-52 lg:w-full bg-green-800"></div>
      </div>
    )
  }
}

export default App;
