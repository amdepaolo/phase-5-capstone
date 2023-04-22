class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :game_id, :left_choice, :right_choice, :left_votes, :right_votes, :winner, :submitted_by, :total_votes
  
  def submitted_by
    self.object.user.name
  end
end
