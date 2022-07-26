class StrainSerializer < ActiveModel::Serializer
  attributes :id, :strain_name, :image, :description, :flower_type
end
