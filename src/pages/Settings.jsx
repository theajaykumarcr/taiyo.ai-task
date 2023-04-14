import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  IoBagHandle,
  IoPieChart,
  IoBriefcaseSharp,
  IoPeople,
} from "react-icons/io5";
import LineCharts from "./crud/LineCharts";

const Settings = () => {
  const [data, setData] = useState({});
  const [data1, setData1] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://disease.sh/v3/covid-19/all");
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex gap-3">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBriefcaseSharp className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Cases
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {data.cases}
              </strong>

              <span className="text-sm text-green-500 pl-2">+343</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
            <IoPieChart className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Deaths
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {data.deaths}
              </strong>
              <span className="text-sm text-green-500 pl-2">-343</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
            <IoPeople className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Recovered
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {data.recovered}
              </strong>
              <span className="text-sm text-red-500 pl-2">-30</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
            <IoPeople className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Active Cases
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                {data.active}
              </strong>
              <span className="text-sm text-red-500 pl-2">-43</span>
            </div>
          </div>
        </BoxWrapper>
      </div>
      <LineCharts />
    </>
  );
};
function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}

export default Settings;
