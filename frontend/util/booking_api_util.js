export const createBooking = (booking) => {
    return(
        $.ajax({
            method: "post",
            url: 'api/listings/:listing_id/bookings',
            data: {booking}
        })
    )
}

export const fetchBookings = () => {
    return(
        $.ajax({
            method: 'get',
            url: 'api/users/:user_id/bookings'
        })
    )
}
