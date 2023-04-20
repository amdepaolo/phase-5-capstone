class Question < ApplicationRecord
    validates :right_choice, presence: true
    validates :left_choice, presence: true
    validates :user_id, uniqueness: {scope: :game_id, message: "Already submitted for this game."}
    validate :player_in_game
    belongs_to :game
    belongs_to :user
    has_many :votes, dependent: :destroy

    def player_in_game
        game = self.game
        if !game.players.find_by(user_id: self.user_id)
            errors.add(:game_id, "Player not in this game")
        end
    end



    def left_votes
        self.votes.where(choice: "left").length
    end

    def right_votes
        self.votes.where(choice: "right").length
    end

    def total_votes
        self.votes.length
    end

    def winner
        if self.left_votes > self.right_votes
            return "left"
        elsif self.left_votes < self.right_votes
            return "right"
        elsif self.left_votes == self.right_votes
            return "tie"
        end
    end

    # def win_percentage
    #     if self.winner == 'left'
    #         return (self.left_votes / self.votes.length) * 100
    #     else
    #         return (self.right_votes / self.votes.length) * 100
    #     end
    # end
end
