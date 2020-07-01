import { connect } from 'react-redux';
import Comments from './Comments'

export function addComment(message) {
	return {
		type: "added",
		message
	}
}

export function reduceComments(state = [], action) {
	switch(action.type) {
		case "added":
			return [...state, action.message]
		default:
			return state
	}
}

const mapStateToProps = state => {
	return {
		messages: state
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddComment: message => {
			dispatch(addComment(message))
		}
	}
}

export const CommentsRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(Comments)