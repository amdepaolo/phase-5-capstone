class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :left_choice
      t.string :right_choice
      t.integer :game_id
      t.integer :user_id

      t.timestamps
    end
  end
end
