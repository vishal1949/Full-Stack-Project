# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_27_005209) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "amenities", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.integer "num_rooms", null: false
    t.integer "num_bathrooms", null: false
    t.integer "price", null: false
    t.text "description", null: false
    t.boolean "private_room", null: false
    t.boolean "house", null: false
    t.boolean "washer", null: false
    t.boolean "dryer", null: false
    t.boolean "parking_spot", null: false
    t.boolean "tv", null: false
    t.boolean "wifi", null: false
    t.boolean "ac", null: false
    t.boolean "kitchen", null: false
    t.boolean "available", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bookings", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.integer "renter_id", null: false
    t.date "trip_start", null: false
    t.date "trip_end", null: false
    t.integer "num_guests", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "listings", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "title", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.integer "zip", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city"], name: "index_listings_on_city", unique: true
    t.index ["owner_id"], name: "index_listings_on_owner_id", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.integer "user_id", null: false
    t.text "body", null: false
    t.integer "star_review", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
