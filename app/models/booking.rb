
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
    validate :overlap_prevention

    belongs_to :renter,
        primary_key: :id,
        foreign_key: :renter_id,
        class_name: 'User'

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: 'Listing'


    def booking_check
        Booking.where.not(id: self.id).where(listing_id: self.listing_id)
            .where.not('trip_start >= :trip_end OR trip_end <= :trip_start',
                trip_start: trip_start, trip_end: trip_end)
    end

    def overlap_prevention
        unless booking_check.empty?
            errors[:base] << 'This listing is booked during that time frame!'
    end
  end
    

end
