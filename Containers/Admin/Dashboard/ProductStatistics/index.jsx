import React from "react";
import { Pie } from "react-chartjs-2";

  const ProductStatistics=(props)=> {
    const data = {
      labels: [
        "Beds",
        "Tables",
        "Chairs",
        "Sofa",
        "Dressing Table",
        "No Products"
      ],
      datasets: [
        {
          data: props.productStatistics,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#AA3939",
            "#853333",
            "#D4D4D4"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#AA3939",
            "#853333",
            "#D4D4D4"
          ]
        }
      ]
    };

    return (
      <div style={{ height: "400px", margin: "10px 20px 20px 20px" }}>
        <Pie data={data} options={{ maintainAspectRatio: false }} />
      </div>
    );
  }

export default ProductStatistics;
