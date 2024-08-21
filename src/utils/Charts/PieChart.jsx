import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import variablePie from "highcharts/modules/variable-pie";

variablePie(Highcharts);

const options = {
  chart: {
    type: "variablepie",
  },
  title: false,
  tooltip: {
    headerFormat: "",
    pointFormat: "<b>{point.name}</b>",
    backgroundColor: "white",
    borderWidth: 1,
  },
  plotOptions: {
    variablepie: {
      dataLabels: {
        enabled: false,
      },
      marker: {
        enabled: false,
      },
    },
  },
  series: [
    {
      minPointSize: 10,
      innerSize: "35%",
      zMin: 0,
      borderRadius: 5,
      data: [
        {
          name: "",
          y: 455910,
          z: 250,
        },
        {
          name: "Direct Off",
          y: 437114,
          z: 80,
        },
        {
          name: "Direct Off",
          y: 452845,
          z: 120,
        },
        {
          name: "Share",
          y: 437114,
          z: 170,
        },
      ],
      colors: ["#16dbcc", "#b1b1b1", "#efa4f5", "#4c78ff"],
    },
  ],
};

export const PieChart = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const option = {
  chart: {
    type: "variablepie",
  },
  title: false,
  tooltip: {
    headerFormat: "",
    pointFormat: "<b>{point.name}</b>",
    backgroundColor: "white",
    borderWidth: 1,
  },
  plotOptions: {
    variablepie: {
      dataLabels: {
        enabled: false,
      },
      marker: {
        enabled: false,
      },
    },
  },
  series: [
    {
      minPointSize: 10,
      innerSize: "35%",
      zMin: 0,
      borderRadius: 5,
      data: [
        {
          name: "",
          y: 455910,
          z: 250,
        },
        {
          name: "Direct Off",
          y: 437114,
          z: 80,
        },
        {
          name: "Direct Off",
          y: 452845,
          z: 120,
        },
        {
          name: "Share",
          y: 437114,
          z: 170,
        },
      ],
      colors: [
        "#fa00ff", /// em
        "#b1b1b1", // dir of
        "#001171", // dir on
        "#1814f3", //share
      ],
    },
  ],
};
export const PieChartSec = () => {
  return <HighchartsReact highcharts={Highcharts} options={option} />;
};
