class GameQuestionSerializer < ActiveModel::Serializer
  attributes :id, :game_name, :game_end, :days_to_end
  belongs_to :host
  has_many :questions
  
  def user_player
    self.object.players.find_by(user_id: instance_options[:user_id] )
  end
end
