import React from 'react';

class Education extends React.Component {
  render() {
    if(this.props.data) {
      var education = this.props.data.map((e) => {
        return (
          <div key={e.years}>
            <div><b>School</b>: {e.school}</div>
            <div><b>Degree</b>: {e.degree}</div>
            <div><b>Years</b>: {e.years}</div>
            <hr/>
        </div>
        )
      })
    }

    return (
      <React.Fragment>
        <div><h2>Education</h2></div>
        {education}
      </React.Fragment>
    )
  }
}

export default Education;
