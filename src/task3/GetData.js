import { type } from "@testing-library/user-event/dist/type";
import axios, { spread } from "axios";
import React, { useEffect, useState } from "react";
import "../task1/SignIn";
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
      console.log(response);
      const data = response.data;
      console.log(data);
      setState([data[2], data[4], data[5], data[8], data[10], data[11]]);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    console.log(`getting data`);
    loading && getData();
  }, [loading]);

  return (
    <div>
      {state.map((item) => {
        return (
          <div key={item.id} className="flex gap-10">
            <div>{item.name}</div>
            <div>{item.username}</div>
            <div>{item.position}</div>
            <div>{item.branch}</div>
          </div>
        );
      })}
    </div>
  );
};

export default GetData;
