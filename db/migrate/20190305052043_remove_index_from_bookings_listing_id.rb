class RemoveIndexFromBookingsListingId < ActiveRecord::Migration[5.2]
  def change
    remove_index :bookings, :listing_id
  end
end
