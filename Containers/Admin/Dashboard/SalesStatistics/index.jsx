import React from "react";
import { Bar } from "react-chartjs-2";

const SalesStatistics=(props)=> {
    const data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "Septemeber",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Products Bought",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: props.salesStatistics
        }
      ]
    };

    return (
      <div style={{ height: "300px", margin: "20px" }}>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }

export default SalesStatistics;
