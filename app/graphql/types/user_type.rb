module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :email, String, null: true
    field :avatar_url, String, null: true
    field :profile, Types::ProfileType, null: true
  end
end
