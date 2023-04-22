class User < ApplicationRecord
    has_secure_password
    has_many :players, dependent: :destroy
    has_many :games, through: :players
    has_many :questions, dependent: :destroy
    validates :email, presence: true
    validates :name, presence: true
end
