class GameQuestionSerializer < ActiveModel::Serializer
  attributes :id, :game_name, :game_end, :days_to_end, :funniest_q, :most_pondered_q, :user_player, :user_hosting
  belongs_to :host
  has_many :questions
  has_many :players
  
  def user_player
    player = self.object.players.find_by(user_id: instance_options[:user_id] )
  end

  def user_hosting
    host_id = self.object.host.id
    host_id == instance_options[:user_id]
  end
end
