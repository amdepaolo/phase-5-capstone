class RemoveHostFromPlayers < ActiveRecord::Migration[7.0]
  def up
    remove_column :players, :host
  end

  def down
    add_column :players, :host, :boolean
  end
end
