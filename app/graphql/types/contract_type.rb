# app/graphql/types/contract_type.rb

module Types
  class ContractType < Types::BaseObject
    field :job, Types::JobType, null: false
  end
end
