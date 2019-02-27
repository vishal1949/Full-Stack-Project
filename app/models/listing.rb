# == Schema Information
#
# Table name: listings
#
#  id         :bigint(8)        not null, primary key
#  owner_id   :integer          not null
#  title      :string           not null
#  address    :string           not null
#  city       :string           not null
#  state      :string           not null
#  zip        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Listing < ApplicationRecord
    
    validates :owner_id, :address, uniqueness: true, presence: true 
    validates :title, :city, :state, :zip, presence: true
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: 'User'

    has_one :amenity,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: 'Amenity'
    
    has_many :bookings,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: 'Booking'

end
