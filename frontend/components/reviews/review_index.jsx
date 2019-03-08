import React from 'react'


class ReviewIndexItem extends React.Component{
    constructor(props){
        super(props)
        // debugger
    }
    
    render(){
        return(
            <div>
                <div>{this.props.user.first_name}</div>
                <div>{this.props.review.body}</div>
                <div>{this.props.review.star_review}</div>
            </div>
        )
    }
    
}




class ReviewIndex extends React.Component{
    constructor(props){
        super(props)
        // debugger
    }

    componentDidMount(){
        this.props.fetchReviews();
    }

    render(){
        // debugger
        return(
            <div>
                <h3>Check the reviews</h3>
                {this.props.reviews.map((review) => {
                    return <ReviewIndexItem key={review.id} review={review} user={currentUser}/>
                })}
            </div>
        )
    }
}

export default ReviewIndex