class RemoveUniqueFromListings < ActiveRecord::Migration[5.2]
  def change
    remove_index :listings, :city
    remove_index :listings, :owner_id
  end
end
