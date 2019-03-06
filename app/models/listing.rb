# == Schema Information
#
# Table name: listings
#
#  id            :bigint(8)        not null, primary key
#  owner_id      :integer          not null
#  title         :string           not null
#  address       :string           not null
#  city          :string           not null
#  state         :string           not null
#  zip           :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  num_rooms     :integer
#  num_bathrooms :integer
#  price         :integer
#  description   :text
#  private_room  :boolean
#  house         :boolean
#  washer        :boolean
#  dryer         :boolean
#  parking_spot  :boolean
#  tv            :boolean
#  wifi          :boolean
#  ac            :boolean
#  kitchen       :boolean
#  available     :boolean
#

class Listing < ApplicationRecord
    
    validates :address, uniqueness: true
    validates :owner_id, :title, :city, :state, :zip, presence: true
    # validates :num_rooms, :num_bathrooms, :price,
    #     :description, :private_room, :house, :washer, :dryer, 
    #     :parking_spot, :tv, :wifi, :ac, :kitchen, :available
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: 'User'

    
    has_many :bookings,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: 'Booking'

    has_many_attached :photo

end
