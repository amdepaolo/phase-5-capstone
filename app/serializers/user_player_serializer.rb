class UserPlayerSerializer < ActiveModel::Serializer
  attributes :id, :user_id,  :host, :funniest_vote, :ponderable_vote, :votes
end
