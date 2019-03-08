export const createBooking = (booking) => {
    return(
        $.ajax({
            method: "post",
            url: `api/listings/${booking.listingId}/bookings`,
            data: {booking}
        })
    )
}

export const fetchBookings = () => {
    return(
        $.ajax({
            method: 'get',
            url: 'api/bookings'
        })
    )
}
