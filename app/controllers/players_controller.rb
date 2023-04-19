class PlayersController < ApplicationController

    def create
        player = Player.create!(game_id: params[:game_id], user_id: session[:user_id])
        render json: player, status: :created
    end
end
