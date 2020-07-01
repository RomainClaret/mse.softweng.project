import React from 'react';

class Experience extends React.Component {
  render() {
    if(this.props.data) {
      var publications = this.props.data.map((p) => {
        return (
          <div key={p.years}>
            <div className="row"><b>Institut</b>: {p.institut}</div>
            <div className="row"><b>Title</b>: {p.title}</div>
            <div className="row"><b>Years</b>: {p.years}</div>
            <div className="row"><b>Papers</b>: {p.papers}</div>
            <hr/>
          </div>
        )
      })
    }

    return (
      <React.Fragment>
        <div><h2>Experience</h2></div>
        {publications}
      </React.Fragment>
    )
  }
}

export default Experience
