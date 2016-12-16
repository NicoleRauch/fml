import { connect } from 'react-redux'
import MovieCollectionList from '../components/MovieCollectionList'

const mapStateToProps = (state) => ({
	movieCollections: state.movieCollections
});

export default connect(
	mapStateToProps
)(MovieCollectionList)
