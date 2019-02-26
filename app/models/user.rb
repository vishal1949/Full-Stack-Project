# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :email, :session_token, presence: true, uniqueness: true 
    validates :first_name, :last_name, :password_digest, presence: true

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end
    
    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token #returning this
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end
