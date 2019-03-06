@bookings.each do |booking|
    json.set! booking.id do
        json.extract! booking, :id, :listing_id, :renter_id, :trip_start, :trip_end, :num_guests
    end
end
