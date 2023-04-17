class User < ApplicationRecord
    has_secure_password
    has_many :players
    has_many :games, through: :players
    validates :email, presence: true
    validates :name, presence: true
end
