class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :game_id, :player_id, :left_choice, :right_choice, :left_comments, :right_comments, :left_votes, :right_votes, :winner, :submitted_by, :total_votes
  
  def submitted_by
    self.object.player.user.name
  end

end
