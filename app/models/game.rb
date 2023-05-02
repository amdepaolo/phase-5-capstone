class Game < ApplicationRecord
    has_many :players, dependent: :destroy
    has_many :users, through: :players 
    has_many :questions, dependent: :destroy
    belongs_to :host, :class_name => "User", :foreign_key => "host_id"

    def game_active?
        now = DateTime.now
        now < self.game_end
    end

    def days_to_end
        now = DateTime.now.to_date
        (self.game_end.to_date - now).to_i
    end

    def funniest_q
        current_funniest = nil
        most_votes_yet = 0
        self.questions.each do |q|
            if q.funny_vote_count > most_votes_yet
                current_funniest = q 
                most_votes_yet = q.funny_vote_count
            end
        end
        return current_funniest
    end

    def most_pondered_q
        current_most_pondered = nil
        most_votes_yet = 0
        self.questions.each do |q|
            if q.ponder_vote_count > most_votes_yet
                current_most_pondered = q 
                most_votes_yet = q.ponder_vote_count
            end
        end
        return current_most_pondered
    end

end
