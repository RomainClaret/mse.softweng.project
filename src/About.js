import React from 'react';

class About extends React.Component {
  render() {
    if(this.props.data) {
      var picture = this.props.data.profile_pic
      var title = this.props.data.title
      var part_1 = this.props.data.part_1
      var part_2 = this.props.data.part_2
    }

    return (
      <div>
        <div><h2>{title}</h2></div>
          <div><img src={picture} className="profile_pic" /></div>
          <div>
            <p>{part_1}</p>
            <p>{part_2}</p>
          </div>
        <hr/>
      </div>
    )
  }
}

export default About
