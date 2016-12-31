import { connect } from 'react-redux'
import MovieList from '../components/MovieList'

const mapStateToProps = (state) => ({
	movies: state.rate.movieList
});
const mapDispatchToProps = ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieList)
