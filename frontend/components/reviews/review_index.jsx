import React from 'react'


class ReviewIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.stars = this.stars.bind(this);
    }
    
    stars(rating){
        switch(rating){
            case 5:
                return (
                    <div className='hard-coded-stars'>
                        <span className="fa fa-star checked size "></span>
                        <span className="fa fa-star checked size "></span>
                        <span className="fa fa-star checked size "></span>
                        <span className="fa fa-star checked size "></span>
                        <span className="fa fa-star checked size "></span>
                    </div>
                )
            case 4:
                return (
                    <div className='hard-coded-stars'>
                        <span className="fa fa-star checked size "></span>
                        <span className="fa fa-star checked size "></span>
                        <span className="fa fa-star checked size "></span>
                        <span className="fa fa-star checked size "></span>
                        <span className="fa fa-star size "></span>
                    </div>
                )
            case 3:
                return (
                    <div className='hard-coded-stars'>
                        <span className="fa fa-star checked size "></span>
                        <span className="fa fa-star checked size "></span>
                        <span className="fa fa-star checked size "></span>
                        <span className="fa fa-star  size "></span>
                        <span className="fa fa-star  size "></span>
                    </div>
                )
            case 2:
                return (
                    <div className='hard-coded-stars'>
                        <span className="fa fa-star checked size "></span>
                        <span className="fa fa-star checked size "></span>
                        <span className="fa fa-star  size "></span>
                        <span className="fa fa-star  size "></span>
                        <span className="fa fa-star  size "></span>
                    </div>
                )
            case 1:
                return (
                    <div className='hard-coded-stars'>
                        <span className="fa fa-star checked size "></span>
                        <span className="fa fa-star size "></span>
                        <span className="fa fa-star size "></span>
                        <span className="fa fa-star size "></span>
                        <span className="fa fa-star size "></span>
                    </div>
                )
        }
    }

    render(){
        return(
            <div>

                <div className='doing-flex'>
                    <div className='user review-user'></div>
                    <div>
                        <div className='user-fname'>{this.props.user.first_name}</div>
                        <div>{this.stars(this.props.review.star_review)}</div>
                        
                    </div>
                </div>
                <div className='review-main-body'>{this.props.review.body}</div>
                <div className='gray-line'></div>
                
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
                <div className='gray-line'></div>
                <h2 className='check-review'>Check the reviews</h2>
                {this.props.reviews.map((review) => {
                    return <ReviewIndexItem key={review.id} review={review} user={currentUser}/>
                })}
            </div>
        )
    }
}

export default ReviewIndex