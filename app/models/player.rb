class Player < ApplicationRecord
    belongs_to :game
    belongs_to :user
    has_one :question, dependent: :destroy
    validates :user_id, uniqueness: {scope: :game_id, message: "already a player in that game"}
end
