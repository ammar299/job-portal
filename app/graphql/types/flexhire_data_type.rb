# app/graphql/types/flexhire_data_type.rb

module Types
  class FlexhireDataType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :email, String, null: true
    field :avatar_url, String, null: true
    field :profile, Types::ProfileType, null: true
  end
end
