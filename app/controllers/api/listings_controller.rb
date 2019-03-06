class Api::ListingsController < ApplicationController
    def create
        @listing = Listing.create!(listing_params)
        if @listing.save
            render "api/listings/show"
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def show 
        @listing = Listing.find(params[:id])
    end

    def index 
        @listings = Listing.all 
        # debugger
    end


    private 
    def listing_params 
        params.require(:listing).permit(:owner_id, :title, :address, :city, :state, :zip, :num_rooms, :num_bathrooms, :available, :price, :description, :private_room, :house, :washer, :dryer, :parking_spot, :tv, :wifi, :ac, :kitchen)
    end
end
