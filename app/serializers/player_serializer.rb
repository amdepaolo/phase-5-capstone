class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :player_name, :host, :funniest_vote, :ponderable_vote

  def player_name 
    self.object.user.name
  end

end
