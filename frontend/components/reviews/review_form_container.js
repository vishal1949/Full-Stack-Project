import {connect} from 'react-redux';

import {createReview} from '../../actions/listing_actions';
import ReviewForm from './review_form';

const mapStateToProps = state => {
    let currentUserId = state.session.id;
    let currentUser = state.entities.users;
    return({
        currentUser,
        currentUserId
    })
}

const mapDispatchToProps = dispatch => ({
    createReview: review => dispatch(createReview(review))
});

export default connect( mapStateToProps, mapDispatchToProps)(ReviewForm);
