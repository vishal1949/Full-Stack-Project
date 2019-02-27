class ReviewsController < ApplicationController
    def create 
        @review = current_user.reviews.new(review_params)
        if @review.save 
            render :show
    end

    def update 
    end

    private

    def review_params
        params.require(:review).permit(:star_review, :body, :listing_id)
    end

end
