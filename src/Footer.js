import React from 'react';

class Footer extends React.Component {
  render() {
    if(this.props.data) {
      var github = this.props.data.github
      var gitlab = this.props.data.gitlab
    }

    return (
      <footer>
          <div><h5>Code networks</h5>
            <ul>
              <li><a href={github}>Github</a></li>
              <li><a href={gitlab}>Gitlab</a></li>
            </ul>
          </div>
      </footer>
    )
  }
}

export default Footer
