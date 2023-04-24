class AddFunniestAndPonderableToPlayers < ActiveRecord::Migration[7.0]
  def change
    change_table :players do |t|
      t.integer :funniest_vote
      t.integer :ponderable_vote
    end    
  end
end
