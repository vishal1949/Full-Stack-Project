class DropAmenities < ActiveRecord::Migration[5.2]
  def up
    drop_table :amenities
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
