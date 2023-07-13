class Comment < ApplicationRecord
    belongs_to :player 
    belongs_to :question
end