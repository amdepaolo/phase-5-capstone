class CommentsController < ApplicationController

    def create
        question = Question.find(params[:question_id])
        comment = question.comments.create(player_id: params[:player_id], content: params[:content], favoring: params[:favoring])
        render json: comment, status: :created
    end
end
