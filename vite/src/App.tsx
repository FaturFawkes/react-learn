import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CustomerService from "./components/CustomerService";
import Card from "./components/Card";
import Fashion from "./dummy/shoes.json";
import Modal from "./components/Modal";

type CounterState = {
  count: number;
  color?: string;
  isOpen: boolean;
  isModal: boolean;
};

type CounterProps = {
  initialVal: number;
  initialColor: string;
  initialIsOpen: boolean;
};

class App extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.initialVal || 0,
      color: props.initialColor,
      isOpen: props.initialIsOpen,
      isModal: false,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  showModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { count, color, isOpen, isModal } = this.state;
    return (
      <div className="w-full">
        <Navbar />
        <div className="my-10">
          <button
            className="w-20 h-10 bg-blue-500 text-white"
            onClick={() => this.setState({ isModal: !isModal })}
          >
            Trigger Modal
          </button>
          <Modal handleModal={isModal} id="modal">
            <h1 className="text-black">Modal Open</h1>
          </Modal>
        </div>
        <div>
          <button
            className="w-40 h-10 bg-amber-500 text-white font-semibold"
            onClick={this.showModal}
          >
            Open Modal
          </button>
        </div>
        {isOpen ? (
          <div className="w-60 h-40 bg-white rounded-md shadow-xl"></div>
        ) : (
          <></>
        )}
        <div>
          <h3 className="w-40 h-20 bg-green-500 text-white mt-10">
            Result: {count}
          </h3>
        </div>
        <div className="flex flex-row">
          <button onClick={this.increment} className="bg-blue-500 text-white">
            Increment
          </button>
          <button onClick={this.decrement} className="bg-blue-500 text-white">
            Decrement
          </button>
        </div>
        <div>
          <h1 className={`${color}`}>
            {color ? "Color has changed" : "Initial Color"}
          </h1>
          <button
            onClick={() => this.setState({ color: "bg-green-500" })}
            className="bg-blue-500 text-white"
          >
            Change Color
          </button>
        </div>
        <div className="flex flex-row">
          {Fashion.map((item) => {
            return (
              <Card
                id={item.id}
                title={item.title}
                description={item.desc}
                image={item.image}
              />
            );
          })}
        </div>
        <div className="mt-20">
          <div className="sm:h-20 sm:w-40 md:w-52 lg:w-full bg-blue-800"></div>
          <div className="sm:h-20 sm:w-40 md:w-52 lg:w-full bg-yellow-800"></div>
          <div className="sm:h-20 sm:w-40 md:w-52 lg:w-full bg-green-800"></div>
          <div>
            <div className="sm:text-lg md:text-green-500 md:text-md sm:text-orange-500 text-xl lg:text-nice-sky-blue">
              <h1>Lorem Ipsum 1</h1>
            </div>
          </div>
          <button className="mt-5 text-center text-xs w-20 h-10 focus:outline-none focus:ring focus:ring-violet-300 bg-blue-700 hover:bg-blue-400 hover:scale-150 transition-all">
            Button
          </button>
          <div className="sticky z-10 bottom-10 flex justify-end mx-10">
            <CustomerService />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
