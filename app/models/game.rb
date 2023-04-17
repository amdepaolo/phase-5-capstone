class Game < ApplicationRecord
    has_many :players
    has_many :users, through: :players

    def game_active?
        now = DateTime.now
        now < self.game_end
    end
end
