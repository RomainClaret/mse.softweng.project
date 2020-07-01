import React from 'react';

class Comment extends React.Component {
  render() {
		if(this.props.data) {
			var date = this.props.data.date
			var name = this.props.data.name
			var text = this.props.data.text
		}

	return (
			<React.Fragment>
				<div>
					<div>Comment of<b> {name}</b>, posted the <b>{date.toString()}</b></div>
					<div><p>{text}</p></div>
				</div>
				<hr/>
			</React.Fragment>
    )
  }
}

export default Comment
