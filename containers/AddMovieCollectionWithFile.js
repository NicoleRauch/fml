import { connect } from 'react-redux'
import InputFile from '../components/CreateMovieCollectionWithFileInput'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: (movieCollection) => {
			ownProps.url.pushTo('/movieCollections');
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(InputFile)

