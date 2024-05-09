module Types
  class ProfileType < Types::BaseObject
    field :id, ID, null: false
    field :slug, String, null: false
    field :total_experience, Integer, null: false
  end
end
