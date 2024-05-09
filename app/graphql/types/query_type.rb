# frozen_string_literal: true
require 'types/flexhire_data_type' # Require the type if it's not autoloaded

module Types
  class QueryType < Types::BaseObject

    field :node, Types::NodeType, null: true, description: "Fetches an object given its ID." do
      argument :id, ID, required: true, description: "ID of the object."
    end

    def node(id:)
      context.schema.object_from_id(id, context)
    end

    field :nodes, [Types::NodeType, null: true], null: true, description: "Fetches a list of objects given a list of IDs." do
      argument :ids, [ID], required: true, description: "IDs of the objects."
    end

    def nodes(ids:)
      ids.map { |id| context.schema.object_from_id(id, context) }
    end

    field :currentUser, [Types::UserType], null: false, description: "Returns a list of users"  do
      argument :id, ID, required: false, description: "ID of the user"
    end

    field :flexhire_data, FlexhireDataType, null: true do
      description "Get data from Flexhire"
    end

    def flexhire_data
      FlexhireApiClient.fetch_data
    end

  end
end
