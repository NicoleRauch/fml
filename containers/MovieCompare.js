import { connect } from 'react-redux'
import MovieCompare from '../components/MovieCompare'

const mapStateToProps = (state, ownProps) => {
	// selectors will most likely need ownProps.collectionId
	return {
		movieFromList: {title: "Matrix"},
		movieFromCollection: {title: "Herr der Ringe"}
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (ev) => {
			console.log(ev.target.name);
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieCompare)

