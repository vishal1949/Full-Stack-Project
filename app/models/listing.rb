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
end
