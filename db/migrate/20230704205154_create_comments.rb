class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.string :favoring
      t.integer :question_id
      t.integer :player_id

      t.timestamps
    end
  end
end
