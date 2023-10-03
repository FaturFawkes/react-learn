import React, { Component } from "react";

interface Item {
  id: number;
  title: string;
  image: string;
  description: string;
}

export class Card extends Component<Item> {
  render() {
    const { id, title, image, description } = this.props;
    return (
      <div className="flex flex-row m-5  space-x-10">
        <div className="card w-60 bg-base-100 shadow-xl hover:scale-90 transition-all">
          <figure>
            <img
              src={image}
              alt={title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
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
