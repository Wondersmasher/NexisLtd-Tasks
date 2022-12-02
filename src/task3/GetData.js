import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const getDataURL = `https://test.nexisltd.com/test`;
const GetData = ({ access, loading }) => {
  const [state, setState] = useState([]);
  console.log(state);
  const getData = async () => {
    try {
      const response = await axios.get(getDataURL, {
        headers: {
          Accept: `application/json`,
          authorization: `Bearer ${access}`,
        },
      });
      //   console.log(response);
      const data = response.data;
      // console.log(data);
      setState([data[2], data[4], data[5], data[8], data[10], data[11]]);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    loading && getData();
  }, [loading]);

  return (
    state[0] && (
      <section>
        <nav className=" w-fit h-fit">
          <img
            src={logo}
            alt="logo"
            className="md:h-[80%] md:w-[80%] h-[60%] w-[60%] px-3 py-3"
          />
        </nav>
        <div className="mx-auto w-fit">
          <h2 className="capitalize  font-serif text-2xl  text-white bg-[#3B8BEA] px-[1rem] py-[0.5rem] mx-10 my-5 ">
            attendance information
          </h2>
        </div>
        <div className="grid grid-cols-3 mx-auto max-w-[940px]">
          <div className="mx-auto">
            <h3 className="text-[14px] font-serif mb-3 font-semibold ">Name</h3>
            {state.map((item) => {
              return (
                <div key={item.id} className="grid justify-start mb-2">
                  <div className="capitalize text-[12px]">{item.name}</div>
                  {/* <div>{item.username}</div>
                  <div>{item.position}</div>
                  <div>{item.branch}</div> */}
                </div>
              );
            })}
          </div>
          <div className="mx-auto">
            <h3 className="text-[14px] font-serif mb-3  font-semibold">
              Username
            </h3>

            {state.map((item) => {
              return (
                <div key={item.id} className="grid justify-start mb-2">
                  {/* <div>{item.name}</div> */}
                  <div className="capitalize text-[12px]">{item.username}</div>
                  {/* <div>{item.position}</div>
                  <div>{item.branch}</div> */}
                </div>
              );
            })}
          </div>
          <div className="mx-auto">
            <h3 className="text-[14px] font-serif mb-3  font-semibold">
              Position
            </h3>

            {state.map((item) => {
              return (
                <div key={item.id} className="grid justify-start mb-2">
                  {/* <div>{item.name}</div>
                  <div>{item.username}</div> */}
                  <div className="capitalize text-[12px]">{item.position}</div>
                  {/* <div>{item.branch}</div> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    )
  );
};

export default GetData;
