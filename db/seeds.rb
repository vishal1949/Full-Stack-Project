# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo = User.create!({email: "demo@login", password: "password", first_name: "demo", last_name: "login"})
user_one = User.create!({email: "user@one", password: "password", first_name: "user", last_name: "one"})
user_two = User.create!({email:"user@two", password: "password", first_name: "user", last_name: "two"})

#Listing data

Listing.destroy_all
spot_one = Listing.create!({ owner_id: user_one[:id], title: "Beautiful apartment", address: "56 Chumasero Dr", 
    city: "San Francisco", state: "California", zip: 94312, num_rooms: 2, num_bathrooms: 2, available: true, 
    price: 100, description: "its just amazing", private_room: true, house: false, washer: false, dryer: false, 
    parking_spot: false, tv: true, wifi: true, ac: false, kitchen: true})

spot_two = Listing.create({owner_id: user_two[:id], title: "Beautiful apartment with beautiful view", address: "80 Chumasero Dr", 
    city: "San Fran", state: "California", zip: 94312, num_rooms: 2, num_bathrooms: 2, available: true, 
    price: 100, description: "This one is the most amazing", private_room: true, house: false, washer: false, dryer: false, 
    parking_spot: false, tv: true, wifi: true, ac: false, kitchen: true})

spot_three = Listing.create({owner_id: user_two[:id], title: "Beautiful apartment, no view", address: "60 Chumasero Dr", 
    city: "SF", state: "California", zip: 94312, num_rooms: 2, num_bathrooms: 2, available: true, 
    price: 100, description: "its just amazing but no view", private_room: true, house: false, washer: false, dryer: false, 
    parking_spot: false, tv: false, wifi: true, ac: false, kitchen: true})