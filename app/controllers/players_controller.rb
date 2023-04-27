class PlayersController < ApplicationController

    def create
        player = Player.create!(game_id: params[:game_id], user_id: session[:user_id])
        render json: player, status: :created
    end

    def update
        game = Game.find(params[:game_id])
        player = game.players.find(params[:id])
        player.update!(player_params)
        render json: player, status: :accepted
    end

    def destroy
        game = Game.find(params[:game_id])
        player = game.players.find(params[:id])
        player.destroy
        head :no_content
    end

    private
    def player_params
        params.permite(:funniest_vote, :ponderable_vote)
    end


end
