class QuestionsController < ApplicationController

    def create
        question = Question.create!(game_id: params[:game_id], user_id: session[:user_id], question_params )
        render json: quesion, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    private
    def question_params
        params.permit(:left_choice, :right_choice)
    end
end
