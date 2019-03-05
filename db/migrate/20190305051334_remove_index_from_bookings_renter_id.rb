class RemoveIndexFromBookingsRenterId < ActiveRecord::Migration[5.2]
  def change
    remove_index :bookings, :renter_id
  end
end
