import React from 'react';
import {
  ComposedChart,
  Area,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

import '../styles/components/BloodChart.scss';

class BloodChart extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <ComposedChart className='bloodChart' width={200} height={180} data={this.props.bloodData}>
        <XAxis dataKey="year" label={{ position: 'insideBottomRight', offset: 0 }}/>
        <YAxis className='y__position' label={{ value: "White blood cell", angle: -90, position: 'insideLeft' }}/>
        <Tooltip/>
        <Legend/>
        <CartesianGrid stroke='#f5f5f5'/>
        <Area type='monotone' dataKey='standard_top' fill='#8884d8' stroke='#8884d8'/>
        <Area  dataKey='standard_buttom' fill='#FBFBFB' stroke='yellow' fillOpacity='1'/>
        <Line type='monotone' dataKey='your_results' stroke='#ff7300'/>
      </ComposedChart>
    )
  }
};

export default BloodChart;
