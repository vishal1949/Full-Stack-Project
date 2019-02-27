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

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
