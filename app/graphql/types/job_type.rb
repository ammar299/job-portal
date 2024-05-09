module Types
  class JobType < Types::BaseObject
    field :raw_id, ID, null: false
    field :title, String, null: false
    field :description, String, null: false
    field :status, String, null: false
  end
end
