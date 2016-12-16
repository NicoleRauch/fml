import { connect } from 'react-redux'
import InputTextfield from '../components/CreateListWithTextareaForm'

const mapStateToProps = (state) => { return {}; };
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: (value) => {
			dispatch({
				type: 'ADD_MOVIES_LINE-BY-LINE',
				value
			});
			ownProps.url.pushTo('/');
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InputTextfield)

