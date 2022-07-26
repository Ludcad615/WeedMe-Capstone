class UsersController < ApplicationController

    #I want the user to be be able to view different strain
    #I want them to be abl to add to weed to cart
    #3Remove from cart
    #write a review about favorite Strain
    #view other strain
    #User can create login before authorizing credential
    
    skip_before_action :authorize, only: :create

    def create 
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
       else
            render json: { error: "Invalid user" }, status: 422
       end
    end

    #Finds user by id saved in session hash
    #@current_user defined in the application controller

    def show 
        render json: @current_user
    end

    private

    def user_params 
        params.permit(:first_name, :last_name, :username, :email, :password, :password_confirmation)
    end

end
