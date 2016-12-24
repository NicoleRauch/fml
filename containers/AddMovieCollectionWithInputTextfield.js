import { connect } from 'react-redux'
import InputTextfield from '../components/CreateMovieCollectionWithTextareaForm'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: (movieCollection) => {
			dispatch({
				type: 'ADD_MOVIECOLLECTION_WITH_MOVIES_LINE-BY-LINE',
				movieCollection
			});
			ownProps.url.pushTo('/movieCollections');
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(InputTextfield)

