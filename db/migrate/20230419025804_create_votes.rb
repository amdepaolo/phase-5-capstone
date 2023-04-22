class CreateVotes < ActiveRecord::Migration[7.0]
  def change
    create_table :votes do |t|
      t.integer :question_id
      t.integer :user_id
      t.string :choice

      t.timestamps
    end
  end
end
