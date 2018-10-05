import React from "react";
import AggregateData from "./AggregateData";
import Navigation from "./Navigation";
import Notification from "./Notification";
import Sections from "./Sections";
import Buttons from "./Buttons";
import cx from 'classnames';



class Summary extends React.Component {
  constructor() {
    super();
    this.state = {
      myData: [
        { subject: "Blood", current: 100, previous: 140, fullMark: 150, image:"./src/images/blood.jpg"},
        { subject: "Heart", current: 98, previous: 130, fullMark: 150 ,image:"./src/images/heart.jpg"},
        { subject: "Liver", current: 86, previous: 130, fullMark: 150 ,image:"./src/images/liver.jpg"},
        { subject: "Renal", current: 130, previous: 100, fullMark: 150 ,image:"./src/images/kidney.jpg"},
        { subject: "Thyroid", current: 100, previous: 90, fullMark: 150 ,image:"./src/images/thyroid.jpg"},
        { subject: "Bone", current: 65, previous: 85, fullMark: 150 ,image:"./src/images/bone.jpg"},
        { subject: "Diabetic", current: 100, previous: 85, fullMark: 150 ,image:"./src/images/diabetic.jpg"},
        { subject: "Urine", current: 65, previous: 85, fullMark: 150 ,image:"./src/images/urine.jpg"}
      ],
      overallRankingPercentile:80,

    };
  };



  render() {

    return (
      <div className='personalHomePage'>
        <Navigation title='My Health Analysis' type='overall' ranking={this.state.overallRankingPercentile}/>
        <AggregateData myData={this.state.myData} />
        <Notification />
        <Sections myData={this.state.myData} receiver={this.props.receiver}/>
        <Buttons receiver={this.props.receiver}/>
      </div>
    );
  }
}

export default Summary;
