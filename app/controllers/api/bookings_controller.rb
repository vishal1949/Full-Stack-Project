class BookingsController < ApplicationController
    def create
        @booking = Booking.new(booking_params)
        @booking.renter_id = current_user.id 
        if @booking.save
            flash.now[:notice] = "Booking has been made!"
        else
            render json @booking.errors.full_messages, status: 422
    end

    def index 
        @bookings = Booking.includes(:listing).where(renter_id: current_user.id).order(trip_start)
    end


    def destroy 
        @booking = current_user.bookings.find_by((id: params[:id]))
    end

    private
    
    def booking_params
        params.require(:booking).permit(:listing_id, :renter_id, :trip_start, :trip_end)
    end

end
