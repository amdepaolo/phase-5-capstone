class PlayersController < ApplicationController

    def create
        player = Player.create!(game_id: params[:game_id], user_id: session[:user_id])
        render json: player, status: :created
    end

    def update
        game = Game.find(params[:game_id])
        player = game.players.find(params[:id])
        player.update!(player_params)
        ActionCable.server.broadcast("game_room_#{game.id}", {type: "game updated", funniest_q: game.funniest_q, most_pondered_q: game.most_pondered_q})
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
        params.permit(:funniest_vote, :ponderable_vote)
    end


end
