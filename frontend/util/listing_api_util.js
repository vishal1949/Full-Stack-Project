export const createListing = (listing) => {
    return (
        $.ajax({
            method: "post",
            url: "api/listings",
            data: { listing }
        })
    )
}

export const fetchListing = (id) => {
    return (
        $.ajax({
            method: "get",
            url: `api/listings/${id}`
        })
    )
}

export const fetchListings = () => {
    return (
        $.ajax({
            method: "get",
            url: 'api/listings',
        })
    )
}

export const fetchReviews = (id) => {
    return(
        $.ajax({
            method: "get",
            url: `api/listings/${id}/reviews`
        })
    )
}

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
);