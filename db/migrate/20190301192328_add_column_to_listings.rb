class AddColumnToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :num_rooms, :integer
    add_column :listings, :num_bathrooms, :integer
    add_column :listings, :price, :integer
    add_column :listings, :description, :text
    add_column :listings, :private_room, :boolean
    add_column :listings, :house, :boolean
    add_column :listings, :washer, :boolean
    add_column :listings, :dryer, :boolean
    add_column :listings, :parking_spot, :boolean
    add_column :listings, :tv, :boolean
    add_column :listings, :wifi, :boolean
    add_column :listings, :ac, :boolean
    add_column :listings, :kitchen, :boolean
    add_column :listings, :available, :boolean
  end
end
