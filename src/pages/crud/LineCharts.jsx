// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const LineCharts = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     console.log(token);
//   }, []);
//   return (
//     <div>
//       <h1>LineCharts</h1>
//     </div>
//   );
// };

// export default LineCharts;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Line } from "react-chartjs-2";

// const LineCharts = () => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get(
//         "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
//       );
//       const cases = result.data.cases;
//       const labels = Object.keys(cases);
//       const values = Object.values(cases);
//       setData({
//         labels: labels,
//         datasets: [
//           {
//             label: "Cases",
//             data: values,
//             fill: false,
//             borderColor: "rgb(75, 192, 192)",
//             tension: 0.1,
//           },
//         ],
//       });
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Line data={data} />
//     </div>
//   );
// };

// export default LineCharts;
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, LineElement, PointElement);

const LineCharts = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  const chartData = {
    labels: Object.keys(data.cases || {}),
    datasets: [
      {
        label: "Cases",
        data: Object.values(data.cases || {}),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-md mt-1 shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Covid-19 Historical Data</h1>
      {Object.keys(data).length > 0 && <Line data={chartData} />}
    </div>
  );
};

export default LineCharts;
