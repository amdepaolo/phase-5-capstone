class Question < ApplicationRecord
    validates :right_choice, presence: true
    validates :left_choice, presence: true
    validates :player_id, uniqueness: {scope: :game_id, message: "Already submitted for this game."}
    validate :player_in_game
    validate :game_active_validation
    belongs_to :game
    belongs_to :player
    has_many :votes, dependent: :destroy
    has_many :funniest_votes, :class_name => "Player", :foreign_key => "funniest_vote"
    has_many :ponderable_votes, :class_name => "Player", :foreign_key => "ponderable_vote"

    def player_in_game
        unless self.player.game_id == self.game_id
            errors.add(:game_id, "Player not in this game")
        end
    end

    def game_active_validation
        unless self.game.game_active?
            errors.add(:game_id, "Game not active")
        end
    end

    def left_comments
        self.comments.where(favoring: "left")
    end

    def right_comments
        self.comments.where(favoring: "right")
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

   def funny_vote_count
    self.funniest_votes.length
   end

   def ponder_vote_count
    self.ponderable_votes.length
   end

   def serialize_self
    options = {serializer: QuestionSerializer}
    serialized = ActiveModelSerializers::SerializableResource.new(self, options)
    serialized.as_json
   end
end
