# == Schema Information
#
# Table name: amenities
#
#  id            :bigint(8)        not null, primary key
#  listing_id    :integer          not null
#  num_rooms     :integer          not null
#  num_bathrooms :integer          not null
#  price         :integer          not null
#  description   :text             not null
#  private_room  :boolean          not null
#  house         :boolean          not null
#  washer        :boolean          not null
#  dryer         :boolean          not null
#  parking_spot  :boolean          not null
#  tv            :boolean          not null
#  wifi          :boolean          not null
#  ac            :boolean          not null
#  kitchen       :boolean          not null
#  available     :boolean          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Amenity < ApplicationRecord
end
