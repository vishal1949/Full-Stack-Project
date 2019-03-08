export const filterListings = (state) => {
    let result = {}
    let listings = state.entities.listings;
    let search = state.ui.search;
    let listingsArray = Object.values(listings)
    listingsArray.map( (listing) => {
        if(listing.city.includes(search)){
            result[listing.id] = listing
        }
    });
    return result;
}
 