import React from "react";
import Plot from "react-plotly.js";

class ScatterPlot extends React.Component {
  onPlotClick = (data) => {
    alert(
      `You clicked on a data point with coordinates (${data.points[0].x}, ${data.points[0].y})`
    );
  };

  render() {
    const data = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      mode: "markers",
      type: "scatter",
    };

    const layout = {
      title: "Interactive Scatter Plot",
      xaxis: { title: "X Axis" },
      yaxis: { title: "Y Axis" },
      hovermode: "closest",
    };

    return <Plot data={[data]} layout={layout} onClick={this.onPlotClick} />;
  }
}

export default ScatterPlot;
