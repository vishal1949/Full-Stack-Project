import React from 'react';
import {connect} from 'react-redux';

const Review = ({ review, author }) => {
    const { rating, body } = review;
    return (
        <div>
            <ul>
                <li>Rating: {rating}</li>
                <li>{body} - by {author.username}</li>

            </ul>
        </div>
    );
};

const mapStateToProps = ({ entities: { users, reviews }  }) => {
    // debugger
    return {
        author: users[reviews.user_id]
    };
};

export default connect( mapStateToProps, null)(Review);
