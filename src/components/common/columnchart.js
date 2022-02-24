import React, { Component, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Columnchart = () => {
  const [series, setSeries] = useState([
    {
      name: "Bronze",
      data: [11],
    },
    {
      name: "Bronze Plus",
      data: [8],
    },
    {
      name: "Silver",
      data: [6],
    },
    {
      name: "Gold",
      data: [19],
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: 500,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 0,
      bottom: 0,
      top: 0,
      //   colors: ["#007FFF", "#2d96ff", "#2dd8ff"],
      colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63"],
    },
    xaxis: {
      axisBorder: { show: false },
      categories: ["Bronze", "Bronze Plus", "Silver", "Gold"],
    },
    yaxis: {
      title: {
        text: "Package usage",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => {
          return val;
        },
      },
    },
  });
  return (
    <ReactApexChart options={options} series={series} type="bar" height={284} />
  );
};

export default Columnchart;

// class Columnchart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [
//         {
//           name: "Bronze",
//           data: [11, 8, 15, 18, 19, 17],
//         },
//         {
//           name: "Bronze Plus",
//           data: [8, 7, 11, 11, 4, 8],
//         },
//         {
//           name: "Silver",
//           data: [8, 9, 8, 10, 12, 14],
//         },
//         {
//           name: "Gold",
//           data: [8, 9, 8, 10, 12, 14],
//         },
//       ],
//       options: {
//         chart: {
//           type: "bar",
//           height: 284,
//         },
//         dataLabels: {
//           enabled: false,
//         },
//         stroke: {
//           show: true,
//           width: 16,
//           bottom: 20,
//           top: 0,
//           colors: ["#007FFF", "#2d96ff", "#2dd8ff"],
//         },
//         xaxis: {
//           axisBorder: { show: false },
//           categories: ["Bronze", "Bronze Plus", "Silver", "Gold"],
//         },
//         yaxis: {
//           title: {
//             text: "Package usage",
//           },
//         },
//         fill: {
//           opacity: 1,
//         },
//         tooltip: {
//             y: {
//               formatter: (val) => {
//                 return val;
//               },
//             },
//         },
//       },
//     };
//   }
//   render() {
//     return (
//       <ReactApexChart
//         options={this.state.options}
//         series={this.state.series}
//         type="bar"
//         height={284}
//       />
//     );
//   }
// }

// export default Columnchart;
