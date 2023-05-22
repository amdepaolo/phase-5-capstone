class QuestionsController < ApplicationController

    def create
        game = Game.find(params[:game_id])
        question = game.questions.create(question_params)
        ActionCable.server.broadcast("game_room_#{question.game_id}", {type: "question added", question: question.serialize_self})
        render json: question, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end



    def vote
        player = Game.find(params[:game_id]).players.find_by(user_id: session[:user_id])
        question = Question.find(params[:question_id])
        vote = question.votes.find_or_initialize_by(player_id: player.id)
        vote.choice = params[:choice]
        vote.save!
        ActionCable.server.broadcast("game_room_#{question.game_id}", {type: "question updated", question: question.serialize_self})
        render json: {vote: vote, question: question.serialize_self}, status: :accepted
    rescue ActiveRecord::RecordNotFound
        render json: {error: "Question not found"}, status: :not_found
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end



    private
    def question_params
        params.permit(:left_choice, :right_choice, :player_id)
    end

    def vote_params
        params.permit(:choice)
    end
end

