import React from 'react';
import CommentItem from './CommentItem'
import track from 'react-tracking'

export class Comment {
  constructor(name, text) {
    this.date = new Date().toLocaleDateString()
    this.name = name
    this.text = text
  }
}

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onSubmit = this.onSubmit.bind(this)
    this.onNameChange = this.onNameChange.bind(this)
    this.onCommentChange = this.onCommentChange.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()

    if(!this.state.name || this.state.name === "" || !this.state.text || this.state.text === "") {
      this.setState({error: "Error: one field is empty"})
      return
    }

    this.props.onAddComment(new Comment(this.state.name, this.state.text))
    this.setState({name: "", text: "", error: ""})
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onCommentChange(event) {
    this.setState({text: event.target.value})
  }

  render() {
    if(this.props.messages) {
      var messages = this.props.messages.map(m => {
        return (<CommentItem key={m.date.toString()} data={m} />)
      })
    }

    return (
      <div id="testimonial">
        <div><h2>Comments</h2></div>
        <div><form onSubmit={this.onSubmit}>
          <div><label for="nameField">Your name</label>
            <div><input type="text" id="nameField" onChange={this.onNameChange} value={this.state.name}/></div>
          </div>
          <div><label for="textField">Your testimonial</label>
            <div><textarea id="textField" onChange={this.onCommentChange} value={this.state.text}/>
          </div>
          </div><button type="submit" id="submit">Leave your comment</button>
        </form></div>
        <hr />
        
        {messages && messages.length > 0 ? messages : (
          <React.Fragment>
            <div><p><i>No comments</i></p></div>
            <hr/>
          </React.Fragment>
        )}

        {this.state.error && this.state.error !== "" && (alert(this.state.error))}
      </div>
    )
  }
}


export default Comments
