class Vote < ApplicationRecord
    validates :choice, inclusion: { in: %w(left right),
    message: "%{value} is not a valid vote" }
    belongs_to :question 
    belongs_to :player
    
end
