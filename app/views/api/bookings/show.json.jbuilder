# debugger

json.set! @booking.id do
    json.extract! @booking, :id, :listing_id, :renter_id, :num_guests, :trip_end, :trip_start;
    # json.photoUrl @booking.listing.photo 
    # look at your listing json jbuilder
end