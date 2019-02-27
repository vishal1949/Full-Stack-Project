# == Schema Information
#
# Table name: bookings
#
#  id         :bigint(8)        not null, primary key
#  listing_id :integer          not null
#  renter_id  :integer          not null
#  trip_start :date             not null
#  trip_end   :date             not null
#  num_guests :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
    validates :listing_id, :renter_id, :trip_end, :trip_start, :num_guests, presence: true 
    belongs_to :renter,
        primary_key: :id,
        foreign_key: :renter_id,
        class_name: 'User'

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: 'Listing'

end
