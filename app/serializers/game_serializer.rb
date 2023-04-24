class GameSerializer < ActiveModel::Serializer
  attributes :id, :game_name, :game_end, :days_to_end, :joined, :user_hosting
  belongs_to :host

  def joined
    player = self.object.players.find_by(user_id: instance_options[:user_id])
    return !!player
  end

  def user_hosting
    host_id = self.object.host.id
    host_id == instance_options[:user_id]
  end
end
