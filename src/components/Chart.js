import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    Language: "Python",
    A: 100,
  },
  {
    Language: "React",
    A: 70,
  },
  {
    Language: "HTML",
    A: 100,
  },
  {
    Language: "Javascript",
    A: 70,
  },
  {
    Language: "SQL",
    A: 90,
  },
];

export default function Chart() {
  return (
    <div className="App">
      <center>
        <p></p>
        <h2>My skills</h2>
        <RadarChart
          cx={300}
          cy={250}
          outerRadius={150}
          width={500}
          height={500}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="Language" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#DE354C"
            fillOpacity={0.6}
          />
        </RadarChart>
      </center>
    </div>
  );
}
