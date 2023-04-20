class Game < ApplicationRecord
    has_many :players, dependent: :destroy
    has_many :users, through: :players 
    has_many :questions
    belongs_to :host, :class_name => "User", :foreign_key => "host_id"

    def game_active?
        now = DateTime.now
        now < self.game_end
    end

    def days_to_end
        now = DateTime.now.to_date
        (self.game_end.to_date - now).to_i
    end
end
