class Api::BookingsController < ApplicationController
    def create
        @booking = Booking.new(booking_params)
        @booking.renter_id = current_user.id 
        if @booking.save
            render 'api/bookings/show'
        else
            render json: ["Booking in that time frame already exists!"], status: 401
        end
    end

    def index 
        @bookings = Booking.includes(:listing).where(renter_id: current_user.id).order(:trip_start)
        render 'api/bookings/index'
    end


    def destroy 
        @booking = Booking.destroy(params[:id])
        render json: @booking.id

    end

    private
    
    def booking_params
        params.require(:booking).permit(:listing_id, :trip_start, :trip_end, :num_guests)
    end

end
