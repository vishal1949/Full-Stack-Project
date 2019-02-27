class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :listing_id, null: false
      t.integer :user_id, null: false
      t.text :body, null: false
      t.integer :star_review, null: false
      t.timestamps
    end
  end
end
