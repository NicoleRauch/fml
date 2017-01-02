import { connect } from 'react-redux'
import InputFile from '../components/CreateMovieCollectionWithFileInput'

import * as Actions from '../actions';

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: (movieCollection) => {
			dispatch(Actions.createMovieCollectionByFile(movieCollection));
			ownProps.url.pushTo('/movieCollections');
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(InputFile)

