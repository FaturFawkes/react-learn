import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CustomerService from "./components/CustomerService";
import Card from "./components/Card";

class App extends Component {
  render() {
    const dummy = [
      {
        image:
          "https://m.media-amazon.com/images/I/71-mN+-rjwL._AC_UY1100_.jpg",
        title: "T-Shirt",
        desc: "Lorem ipsum dolor sit amet",
      },
      {
        image:
          "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f655b4fb-35e9-4a63-acf8-c02dfd78cfda/zoom-fly-5-road-running-shoes-lkx7Zp.png",
        title: "Shoes",
        desc: "Lorem ipsum dolor sit amet",
      },
      {
        image:
          "https://cdn.eraspace.com/media/catalog/product/a/p/apple_watch_se_gen_2_40mm_gps_silver_aluminium_case_with_white_sport_band_1.jpg",
        title: "Watch",
        desc: "Lorem ipsum dolor sit amet",
      },
    ];

    return (
      <div className="w-full">
        <Navbar />
        <div className="m-20">
          <div className="flex flex-row">
            {dummy.map((item: any) => {
              return (
                <div className="flex flex-row m-10 space-x-10">
                  <div className="card  w-96 flex-1 bg-base-100 shadow-xl hover:scale-90 transition-all">
                    <figure>
                      <img src={item.image} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.title}!</h2>
                      <p>{item.desc}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div>
          <Card />
        </div> */}
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
