class AddIndexToBookings < ActiveRecord::Migration[5.2]
  def change
    add_index :bookings, :listing_id, unique: true
    add_index :bookings, :renter_id, unique: true
  end
end
