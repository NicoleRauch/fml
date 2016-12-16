import { connect } from 'react-redux'
import InputTextfield from '../components/CreateListWithTextareaForm'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: (movieCollection) => {
			dispatch({
				type: 'ADD_MOVIECOLLECTION_WITH_MOVIES_LINE-BY-LINE',
				movieCollection
			});
			dispatch({
				type: 'ADD_MOVIES_LINE-BY-LINE',
				value: {
					movies: movieCollection.movies
				}
			});
			ownProps.url.pushTo('/rate');
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(InputTextfield)

