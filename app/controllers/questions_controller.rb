class QuestionsController < ApplicationController

    def create
        question = Question.create!(game_id: params[:game_id], user_id: session[:user_id], left_choice: params[:left_choice], right_choice: params[:right_choice])
        render json: question, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    def vote
        question = Question.find(params[:question_id])
        vote = question.votes.find_or_initialize_by(user_id: session[:user_id])
        vote.choice = params[:choice]
        vote.save
        render json: question, status: :accepted
    rescue ActiveRecord::RecordNotFound
        render json: {error: "Question not found"}, status: :not_found
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end



    private
    def question_params
        params.permit(:left_choice, :right_choice)
    end

    def vote_params
        params.permit(:choice)
    end
end
