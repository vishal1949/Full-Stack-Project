@listings.each do |listing|
  json.set! listing.id do
    json.partial! 'listing', listing: listing
    # json.photosUrl url_for(listing.photos)
    # setting photourl as id  
  end
end