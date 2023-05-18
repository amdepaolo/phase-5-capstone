class Player < ApplicationRecord
    belongs_to :game
    belongs_to :user
    has_one :question, dependent: :destroy
    validates :user_id, uniqueness: {scope: :game_id, message: "already a player in that game"}
    validate :game_active_validation
    has_many :votes, dependent: :destroy

    def host
        self.user_id === self.game.host_id
    end

    def game_active_validation
        unless self.game.game_active?
            errors.add(:game_id, "Game not active")
        end
    end
end
