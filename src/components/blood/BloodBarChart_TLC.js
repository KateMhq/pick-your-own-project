import React from 'react';
import {
  BarChart,
  Area,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import '../../styles/components/blood/BloodBarChart_TLC.scss';


// import '../../styles/components/blood/BloodChart_WBC.scss';

class BloodBarChart_TLC extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <BarChart className='bloodChart' width={160} height={80} data={this.props.tLC} layout='vertical'  >
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis  className='x__position' type='number'/>
       <YAxis className='y__position' name='TLC' type='category'/>
       <Tooltip  />
       <Legend className='displayLegend'/>

       <Bar dataKey="standard_buttom" stackId="a" fill="green" />
       <Bar dataKey="yourTLC" stackId="a" fill="red" />
       <Bar dataKey="standard_top" stackId="a" fill="green" />

      </BarChart>
    )
  }
};

export default BloodBarChart_TLC;
