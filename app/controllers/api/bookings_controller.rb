class Api::BookingsController < ApplicationController
    def create
        @booking = Booking.new(booking_params)
        @booking.renter_id = current_user.id 
        if @booking.save!
            render 'api/bookings/show'
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def index 
        @bookings = Booking.includes(:listing).where(renter_id: current_user.id).order(:trip_start)
        render json: @bookings
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
