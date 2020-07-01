import React from 'react';
import { Link } from "react-router-dom"

class Header extends React.Component {
  render() {
    if(this.props.data) {
        var title = this.props.data.title
    }

    return (
      <div><h5>{title}</h5>
        <ul> 
          <li><Link to="/">About me</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/publications">Publication</Link></li>
          <li><Link to="/comments">Comments</Link></li>
        </ul>
        <hr/>
      </div>
    )
  }
}

export default Header
