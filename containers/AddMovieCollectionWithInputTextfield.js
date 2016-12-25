import { connect } from 'react-redux'
import InputTextfield from '../components/CreateMovieCollectionWithTextareaForm'
import { addMovieCollectionWithMoviesLineByLine } from '../actions/'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: (movieCollection) => {
			dispatch(addMovieCollectionWithMoviesLineByLine(movieCollection));
			ownProps.url.pushTo('/movieCollections');
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(InputTextfield)

