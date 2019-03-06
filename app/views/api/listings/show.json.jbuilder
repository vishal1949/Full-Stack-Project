json.partial! "api/listings/listing", listing: @listing
json.photo do 
      json.array!(@listing.photo) do |pic|
        json.picUrl url_for(pic)
        # debugger
      end
end
