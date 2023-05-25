class GamesController < ApplicationController

    def index
        games = Game.where('game_end>?', DateTime.now)
        render json: games, user_id: session[:user_id]
    end

    def show
        game = Game.find(params[:id])
        render json: game, serializer: GameQuestionSerializer, user_id: session[:user_id]
    rescue ActiveRecord::RecordNotFound
        render json: {error: "Game not found"}, status: :not_found
    end

    def create 
        game_end = DateTime.now + 7
        game = Game.create!(host_id: session[:user_id], game_name: params[:game_name], game_end: game_end)
        player = Player.create(user_id: session[:user_id], game_id: game.id)
        render json: game, status: :created, user_id: session[:user_id]
    end

    def destroy
        game = Game.find(params[:id])
        if game.host_id == session[:user_id]
            game.destroy
            head :no_content
        else render json: {error: "user does not have permission to end this game"}, status: :unauthorized
        end
    end

end

