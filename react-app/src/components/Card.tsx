import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div className="flex flex-row m-10 space-x-10">
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-90 transition-all">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
