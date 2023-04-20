class GameSerializer < ActiveModel::Serializer
  attributes :id, :game_name, :game_end, :days_to_end, :joined
  belongs_to :host

  def joined
    player = self.object.players.find_by(user_id: instance_options[:user_id])
    return !!player
  end
end
