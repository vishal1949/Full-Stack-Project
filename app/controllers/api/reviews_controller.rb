class Api::ReviewsController < ApplicationController
    def create 
        @review = current_user.reviews.new(review_params)
        if @review.save
            render :show
        else
            render json: @review, status: :unprocessable_entity
        end
    end

    private

    def review_params
        params.require(:review).permit(:star_review, :body, :listing_id)
    end

end
