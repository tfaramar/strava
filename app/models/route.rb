class Route < ApplicationRecord
    validates :title, :user_id, :sport, :coordinates, presence: true
    validates :sport, inclusion: { in: [1, 2, 3] }

    belongs_to :user

    # potentially include function to parse string here
end
