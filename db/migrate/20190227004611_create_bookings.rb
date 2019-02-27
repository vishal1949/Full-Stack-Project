class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false
      t.integer :renter_id, null: false 
      t.date :trip_start, null: false 
      t.date :trip_end, null: false 
      t.integer :num_guests, null: false
      t.timestamps
    end
  end
end
