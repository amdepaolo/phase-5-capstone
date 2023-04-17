class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.integer :game_id
      t.integer :user_id
      t.boolean :host

      t.timestamps
    end
  end
end
