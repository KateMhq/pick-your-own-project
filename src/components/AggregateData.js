import React from 'react';
import {Radar, RadarChart, PolarGrid, Legend,PolarAngleAxis, PolarRadiusAxis} from 'recharts';

class AggregateData extends React.Component{
  constructor(){
    super();
    this.state={
  statistics:[  { subject: 'blood', A: 120, B: 110, fullMark: 150 },
                { subject: 'heart', A: 98, B: 130, fullMark: 150 },
                { subject: 'liver', A: 86, B: 130, fullMark: 150 },
                { subject: 'renal', A: 99, B: 100, fullMark: 150 },
                { subject: 'thyroid', A: 85, B: 90, fullMark: 150 },
                { subject: 'bone', A: 65, B: 85, fullMark: 150 },
                { subject: 'biabetice', A: 65, B: 85, fullMark: 150 },
                { subject: 'urine', A: 65, B: 85, fullMark: 150 }]

    }
  }

  render(){
    return(<RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={this.state.statistics}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>

    )
  }
}

export default AggregateData;
