class Game < ApplicationRecord
    has_many :players
    has_many :users, through: :players 

    def game_active?
        now = DateTime.now
        now < self.game_end
    end

    def days_to_end
        now = DateTime.now.to_date
        (self.game_end.to_date - now).to_ig
    end
end
