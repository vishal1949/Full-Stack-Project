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

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
