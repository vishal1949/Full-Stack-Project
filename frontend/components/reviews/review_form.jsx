import React from 'react';
import { withRouter } from 'react-router-dom';



class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            star_review: 5,
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToListingShow = this.navigateToListingShow.bind(this);
    }

    navigateToListingShow() {
        const url = `/listings/${this.props.match.params.listingId}`
        this.props.history.push(url);
    }

    handleSubmit(e) {
        e.preventDefault();
        const listingId = parseInt(this.props.match.params.listingId);
        const review = Object.assign({}, this.state, {
            listing_id: listingId,
            user_id: this.props.currentUserId

        });
        // debugger
        this.props.createReview(review);
        this.setState({body: ' '})
        this.navigateToListingShow();
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    render() {
        return (
            <div className="review-form">
                <form onSubmit={this.handleSubmit}>
                <h3 className='ratings'>Rating</h3>
                <div className='rating-and-start'>
                    <fieldset className="rating" >
                        <input type="radio" id="star5" name="star_review" onChange={this.update("star_review")} value="5" /><label className="full" htmlFor="star5"></label>
                        <input type="radio" id="star4" name="star_review" onChange={this.update("star_review")} value="4" /><label className="full" htmlFor="star4"></label>
                        <input type="radio" id="star3" name="star_review" onChange={this.update("star_review")} value="3" /><label className="full" htmlFor="star3"></label>
                        <input type="radio" id="star2" name="star_review" onChange={this.update("star_review")} value="2" /><label className="full" htmlFor="star2"></label>
                        <input type="radio" id="star1" name="star_review" onChange={this.update("star_review")} value="1" /><label className="full" htmlFor="star1"></label>
                    </fieldset>
                </div>    
                    {/* <input type="number" value={this.state.rating} onChange={this.update("rating")}/> */}
                <div className='review-body'>Review</div>
                    <textarea className='body-review' cols="30" rows="10" value={this.state.body} onChange={this.update("body")}/>
                    <input className='subm' type="submit" />
                <input className='subm' type='button' value='Cancel'onClick={this.navigateToListingShow}></input>
                </form>
            </div>
        );
    }
}

export default withRouter(ReviewForm);
