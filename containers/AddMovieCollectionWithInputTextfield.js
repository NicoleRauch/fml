import { connect } from 'react-redux';
import InputTextfield from '../components/CreateMovieCollectionWithTextareaForm';
import * as Actions from '../actions/';

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: (movieCollection) => {
			dispatch(Actions.addMovieCollectionWithMoviesLineByLine(movieCollection));
			ownProps.url.pushTo('/movieCollections');
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(InputTextfield)

