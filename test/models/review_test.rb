# == Schema Information
#
# Table name: reviews
#
#  id          :bigint(8)        not null, primary key
#  listing_id  :integer          not null
#  user_id     :integer          not null
#  body        :text             not null
#  star_review :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
