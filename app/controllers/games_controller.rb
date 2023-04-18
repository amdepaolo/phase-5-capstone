class GamesController < ApplicationController

    def index
        games = Game.where('game_end>?', DateTime.now)
        render json: games
    end

    def show
        game = Game.find(params[:id])
        render json: game
    rescue ActiveRecord::RecordNotFound
        render json: {error: "Game not found"}, status: :not_found
    end

    def create 
        game_end = DateTime.now.next_week
        game = Game.create!(host_id: session[:user_id], game_name: params[:game_name], game_end: game_end)
        player = Player.create(user_id: session[:user_id], game_id: game.id)
        render json: game, status: :created
    end

    private

end
