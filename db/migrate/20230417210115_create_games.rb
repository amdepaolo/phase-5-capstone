class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :game_name
      t.integer :host_id
      t.datetime :game_end

      t.timestamps
    end
  end
end
