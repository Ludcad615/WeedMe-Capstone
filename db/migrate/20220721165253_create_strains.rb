class CreateStrains < ActiveRecord::Migration[6.1]
  def change
    create_table :strains do |t|
      t.string :strain_name
      t.string :image
      t.string :description
      t.string :flower_type

      t.timestamps
    end
  end
end
