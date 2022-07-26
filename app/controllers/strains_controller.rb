class StrainsController < ApplicationController
    
    #Implementing the below line of code when looking at data in Postman
        
    skip_before_action :authorize
    
    def index 
        #get
        render json: Strain.all
    end
    
    def show 
        #get
        strain = Strain.find(params[:id])
        render json: strain 
    end 
    
    def create 
        #post
        strain = Strain.create!(strain_params)
        render json: strain, status: :created
    end
    
    
    private 
    
    def strain_params 
        params.permit(:strain_name, :image, :description, :flower_type)
    end
    
end
