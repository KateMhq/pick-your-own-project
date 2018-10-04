import React from "react";
import Section from "./Section";
import '../styles/components/Sections.scss';

class Sections extends React.Component {
  constructor() {
    super();
  }

  

  render() {
    const dataArr = this.props.myData;
    return (
      <div className='sections'>
        {dataArr.map(section => {
          return <Section
                  subject={section.subject}
                  image={section.image}
                  receiver={this.props.receiver}
                />;
        })}
      </div>
    );
  }
}

export default Sections;
