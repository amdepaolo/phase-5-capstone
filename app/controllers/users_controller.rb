class UsersController < ApplicationController

    def show
        user = User.find(session[:user_id])
        render json: user
    rescue ActiveRecord::RecordNotFound
        render json: {errors: ["no user logged in"]}, status: :unprocessable_entity
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    private

    def user_params
        params.permit(:email, :name, :password, :password_confirmation)
    end
end