class User < ApplicationRecord
    has_secure_password
    has_many :players, dependent: :destroy
    has_many :games, through: :players
    has_many :hosting, :class_name => "Game", :foreign_key => "host_id", dependent: :destroy
    validates :email, uniqueness: true
    validates :name, presence: true
end
