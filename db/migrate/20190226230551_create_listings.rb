class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false
      t.string :address, null: false
      t.string :city, null: false 
      t.string :state, null: false 
      t.integer :zip, null: false 
      t.timestamps
    end
    add_index :listings, :owner_id, unique: true
    add_index :listings, :city, unique: true 
  end
end
