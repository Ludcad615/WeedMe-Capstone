class ReviewsController < ApplicationController
           # Implementing the below line of code when looking at data in Postman
    skip_before_action :authorize
    
    def index 
        #get
        render json: Review.all
    end
    
    def show 
        #get    
        review = Review.find(params[:id])
        render json: review
    end 
    
    def create 
        #post
        review = Review.create!(review_params)
        render json: review, status: :created
    end
    
    def destroy 
        #delete
        review = Review.find(params[:id])
        review.destroy
        render json: {}
    end
    
    def update
        #patch
        review = Review.find(params[:id])
        review.update!(update_review_params)
        render json: review, status: :ok
    end
    

    private     
    
    def review_params 
        #creaste you need these three attributes
        params.permit(:user_id, :strain_id,:description)
    end
    
    def update_review_params 
        #is all your allowing them to change
        params.permit(:description)
    end
    
    
end
