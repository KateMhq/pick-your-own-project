import React from 'react';
import '../styles/components/AggregateData.scss';
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';

class AggregateData extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <RadarChart className='radarDiagram'
        cx={180}
        cy={160}
        outerRadius={100}
        width={360}
        height={360}
        data={this.props.myData}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="current"
          dataKey="current"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="previous"
          dataKey="previous"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    );
  }
}

export default AggregateData;
