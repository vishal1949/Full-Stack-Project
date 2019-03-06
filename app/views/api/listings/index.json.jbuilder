@listings.each do |listing|
  json.set! listing.id do
    json.partial! 'listing', listing: listing
    json.photo do 
      json.array!(listing.photo) do |pic|
        json.picUrl url_for(pic)
        # debugger
      end
    end
    # json.photoUrl url_for(listing.photo)
    # setting photourl as id  
  end
end