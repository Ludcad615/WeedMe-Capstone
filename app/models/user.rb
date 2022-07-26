class User < ApplicationRecord
    has_secure_password
    
    has_many :reviews
    has_many :strains, through: :reviews

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true
    validates :password_confirmation, presence: true

end
