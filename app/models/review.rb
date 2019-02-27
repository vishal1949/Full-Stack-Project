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

class Review < ApplicationRecord

    validates :listing_id, :user_id, :body, presence: true 
    validates :star_review, inclusion: { in: (1..5) }

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: 'Listing'

end
