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