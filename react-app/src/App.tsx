import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="w-screen">
        <div className="sm:h-20 sm:w-40 md:w-52 lg:w-full bg-blue-800"></div>
        <div className="sm:h-20 sm:w-40 md:w-52 lg:w-full bg-yellow-800"></div>
        <div className="sm:h-20 sm:w-40 md:w-52 lg:w-full bg-green-800"></div>
        <div>
          <div className="sm:text-lg md:text-green-500 md:text-md sm:text-orange-500 text-xl lg:text-nice-sky-blue">
            <h1>Lorem Ipsum 1</h1>
          </div>
          {/* <div className="sm:text-lg sm:text-green-500 text-xl text-yellow-500">
            <h1>Lorem Ipsum 2</h1>
          </div>
          <div className="sm:text-lg sm:text-purple-500 text-xl text-blue-500">
            <h1>Lorem Ipsum 3</h1>
          </div> */}
        </div>
        {/* DaisyUI */}
        <div className="card w-96 bg-base-100 bg-white shadow-xl ">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-gray-900">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <button className="mt-5 text-center text-xs w-20 h-10 focus:outline-none focus:ring focus:ring-violet-300 bg-blue-700 hover:bg-blue-400 hover:scale-150 transition-all">
          Button
        </button>
      </div>
    );
  }
}

export default App;
