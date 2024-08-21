import styles from "../../components/Insight/insight.module.scss"
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = ({color}) => {
  const options = {
    title: false,
    xAxis: {
      gridLineWidth: 0, 
    },
    yAxis: {
      title: false
    },
    series: [{
      name: "Line Chart",
      color: color ,
      data: [1, 3, 2, 4, 6, 5, 7,4]
    }]
  };

  return (
    <div className={styles["chart-container"]}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default LineChart;
