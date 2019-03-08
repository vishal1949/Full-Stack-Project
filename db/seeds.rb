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
user_three = User.create!({email:"user@three", password: "password", first_name: "user", last_name: "three"})
user_four = User.create!({email:"user@four", password: "password", first_name: "user", last_name: "four"})
user_five = User.create!({email:"spongebob@squarepants", password: "password", first_name: "spongebob", last_name: "squarepants"})


#Listing data

Listing.destroy_all
spot_one = Listing.create!({ owner_id: user_one[:id], title: "Beautiful apartment", address: "56 Chumasero Dr", 
    city: "San Francisco", state: "California", zip: 94312, num_rooms: 2, num_bathrooms: 2, available: true, 
    price: 100, description: "From the outside this house looks very elegant. It has been built with tan bricks and has yellow pine wooden decorations. Large, triangular windows allow enough light to enter the home and have been added to the house in a mostly asymmetric way.", 
    private_room: true, house: false, washer: false, dryer: false, 
    parking_spot: false, tv: true, wifi: true, ac: false, kitchen: true})
spot_two = Listing.create({owner_id: user_two[:id], title: "Beautiful apartment with beautiful view", address: "80 Chumasero Dr", 
    city: "San Francisco", state: "California", zip: 94312, num_rooms: 2, num_bathrooms: 2, available: true, 
    price: 150, description: "The house is equipped with a modern kitchen and two modern bathrooms, it also has a comfortable living room, four bedrooms, a small dining area, a lounge area and a cozy garage.", 
    private_room: true, house: false, washer: false, dryer: false, 
    parking_spot: false, tv: true, wifi: true, ac: false, kitchen: true})
spot_three = Listing.create({owner_id: user_two[:id], title: "Beautiful apartment, no view", address: "60 Chumasero Dr", 
    city: "SF", state: "California", zip: 94312, num_rooms: 2, num_bathrooms: 2, available: true, 
    price: 170, description: "The building is shaped like a squared S. The two extensions extend into glass overhanging panels circling around half the house.
        The second floor is bigger than the first, which creates a stylish overhang around the entire house. This floor has a very different style than the floor below.", 
    private_room: true, house: false, washer: false, dryer: false, 
    parking_spot: false, tv: false, wifi: true, ac: false, kitchen: true})
spot_four = Listing.create({owner_id: user_three[:id], title: "Amazing place", address: "3116 Wolf Pen Road", 
    city: "SF", state: "California", zip: 94312, num_rooms: 2, num_bathrooms: 2, available: true, 
    price: 120, description: "From the outside this house looks lavish. It has been built with poplar wood and has mahogany wooden decorations. Small, rectangular windows add to the overall style of the house and have been added to the house in a mostly symmetric way.", private_room: true, house: true, washer: false, dryer: false, 
    parking_spot: false, tv: false, wifi: true, ac: false, kitchen: true})
spot_five = Listing.create({owner_id: user_four[:id], title: "Beautiful Room", address: "3824 21st St", 
    city: "San Francisco", state: "California", zip: 94114, num_rooms: 3, num_bathrooms: 2, available: true, 
    price: 170, description: "The building is shaped like an L. The extension extends into a garden path circling around half the house.
        The second floor is smaller than the first, which allowed for a roof garden on two sides of the house. This floor has a very different style than the floor below.", 
    private_room: true, house: false, washer: false, dryer: false, 
    parking_spot: true, tv: true, wifi: true, ac: false, kitchen: true})
spot_six = Listing.create({owner_id: user_two[:id], title: "Beautiful apartment, no view", address: "3576 17th St", 
    city: "SF", state: "California", zip: 94110, num_rooms: 4, num_bathrooms: 3, available: true, 
    price: 110, description: "From the outside this house looks gorgeous. It has been built with white stones and has white cedar wooden decorations. Tall, squared windows allow enough light to enter the home and have been added to the house in a fairly asymmetrical pattern.", 
    private_room: true, house: false, washer: false, dryer: false, 
    parking_spot: false, tv: false, wifi: true, ac: false, kitchen: true})
spot_seven = Listing.create({owner_id: user_one[:id], title: "Beautiful place to stay", address: "504 Lyon St", 
    city: "SF", state: "California", zip: 94117, num_rooms: 6, num_bathrooms: 2, available: true, 
    price: 120, description: "its just amazing but no view", private_room: false, house: true, washer: false, dryer: false, 
    parking_spot: true, tv: true, wifi: true, ac: false, kitchen: true})
spot_eight = Listing.create({owner_id: user_four[:id], title: "Cheap and affordable", address: "21 florence st", 
    city: "SF", state: "California", zip: 94312, num_rooms: 1, num_bathrooms: 1, available: true, 
    price: 60, description: "The roof is flat and is covered with wheat straw. One small chimney sits at the side of the house. A few large windows let in just enough light to the rooms below the roof.
        The house itself is surrounded by a gorgeous garden, including hanging grape vines, a pagoda, a pond and many different flowers.",  
    private_room: true, house: false, washer: false, dryer: false, 
    parking_spot: true, tv: true, wifi: true, ac: false, kitchen: true})
spot_nine = Listing.create({owner_id: user_four[:id], title: "Cheap and affordable", address: "2060 Parrish Avenue", 
    city: "New York", state: "New York", zip: 94312, num_rooms: 3, num_bathrooms: 2, available: true, 
    price: 200, description: "This enormous house has a quaint atmosphere and is in average condition.  The interior is done in colors that remind you of a cloudy sky.  The yard is small and resembles a meadow.",  
    private_room: true, house: false, washer: false, dryer: false, 
    parking_spot: true, tv: true, wifi: true, ac: false, kitchen: true})
spot_ten = Listing.create({owner_id: user_four[:id], title: "Cheap and affordable", address: "2893 Finwood Road", 
    city: "New York", state: "New York", zip: 94312, num_rooms: 3, num_bathrooms: 3, available: true, 
    price: 170, description: "This large house has a futuristic look and is in good condition.  The interior is done in pastel colors.  The yard is large and resembles a meadow.",  
    private_room: true, house: false, washer: false, dryer: false, 
    parking_spot: true, tv: true, wifi: true, ac: false, kitchen: true})
spot_eleven = Listing.create({owner_id: user_four[:id], title: "Cheap and affordable", address: "1280 Caldwell Road", 
    city: "New York", state: "New York", zip: 94312, num_rooms: 2, num_bathrooms: 3, available: true, 
    price: 90, description: "This large house has a fairytale-like look to it and is in excellent condition.  The interior is done in colors that remind you of a mocha coffee.  The yard is small and looks very formal.  Also, it was once featured in a magazine showcasing unusually-decorated homes.",  
    private_room: true, house: false, washer: false, dryer: false, 
    parking_spot: true, tv: true, wifi: true, ac: false, kitchen: true})
spot_twelve = Listing.create({owner_id: user_four[:id], title: "Cheap and affordable", address: "4679 Delaware Avenue", 
    city: "New York", state: "New York", zip: 94312, num_rooms: 5, num_bathrooms: 5, available: true, 
    price: 129, description: "This tiny house has a retro look to it and is in excellent condition.  The interior is done in muted colors.  The yard is small and is neatly-trimmed.  Also, it was built over the remains of a house that was destroyed in an earthquake.",  
    private_room: true, house: true, washer: false, dryer: false, 
    parking_spot: true, tv: true, wifi: true, ac: false, kitchen: true})
spot_thirteen = Listing.create({owner_id: user_five[:id], title: "Come visit Gary the snail", address: "21 Bikini Bottom", 
    city: "Bikini Bottom", state: "bottom of the sea", zip: 11098, num_rooms: 1, num_bathrooms: 1, available: true, 
    price: 10, description: "My house is located at the bottom of the sea in a place called Bikini Bottom. My house is up for grabs and Gary is included. I have great neighbors like my best friend Patrick and my other neighbor Squidward",  
    private_room: true, house: true, washer: true, dryer: true, 
    parking_spot: true, tv: true, wifi: true, ac: false, kitchen: true})



    

# Photos

Listing.all.each_with_index do |listing, i|
    listing.photo.attach(io: File.open("/Users/vishalsandhu/Desktop/full-stack-img/bedrooms/bedroom#{i+1}.jpg"), filename: "bedroom#{i+1}.jpg")
    listing.photo.attach(io: File.open("/Users/vishalsandhu/Desktop/full-stack-img/houses/house#{i+1}.jpg"), filename: "house#{i+1}.jpg")
    listing.photo.attach(io: File.open("/Users/vishalsandhu/Desktop/full-stack-img/kitchens/kitchen#{i+1}.jpg"), filename: "kitchen#{i+1}.jpg")
    listing.photo.attach(io: File.open("/Users/vishalsandhu/Desktop/full-stack-img/bathrooms/bathroom#{i+1}.jpg"), filename: "bathroom#{i+1}.jpg")
    listing.photo.attach(io: File.open("/Users/vishalsandhu/Desktop/full-stack-img/lofts/loft#{i+1}.jpg"), filename: "loft#{i+1}.jpg")
end