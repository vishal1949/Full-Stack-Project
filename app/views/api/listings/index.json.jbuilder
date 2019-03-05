@listings.each do |listing|
  json.set! listing.id do
    json.partial! 'listing', listing: listing
    # json.extract! url_for(listing.photos)
  end
end