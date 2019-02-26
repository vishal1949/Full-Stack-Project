class CreateAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :amenities do |t|
      t.integer :listing_id, null: false
      t.integer :num_rooms, null: false 
      t.integer :num_bathrooms, null: false 
      t.integer :price, null: false
      t.text :description, null: false 
      t.boolean :private_room, null: false
      t.boolean :house, null: false
      t.boolean :washer, null: false
      t.boolean :dryer, null: false
      t.boolean :parking_spot, null: false
      t.boolean :tv, null: false
      t.boolean :wifi, null: false
      t.boolean :ac, null: false
      t.boolean :kitchen, null: false
      t.boolean :available, null: false
      t.timestamps
    end
  end
end
