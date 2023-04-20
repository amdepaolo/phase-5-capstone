class GameSerializer < ActiveModel::Serializer
  attributes :id, :game_name, :game_end, :days_to_end
  belongs_to :host
  has_many :questions
end
