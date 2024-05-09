# app/graphql/types/contract_connection_type.rb

module Types
  class ContractConnectionType < Types::BaseConnection
    field :total_count, Integer, null: false
    field :nodes, Types::ContractType, null: false
  end
end
