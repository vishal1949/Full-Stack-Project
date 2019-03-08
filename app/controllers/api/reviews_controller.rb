class Api::ReviewsController < ApplicationController
    def create 
        @review = current_user.reviews.new(review_params)
        if @review.save
            render :show
        else
            render json: ['Was not able to save']
        end
    end

    def index 
        @reviews = Review.all
    end

    private

    def review_params
        params.require(:review).permit(:star_review, :body, :listing_id)
    end

end
