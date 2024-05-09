require 'graphql/client'
require 'graphql/client/http'

HTTP = GraphQL::Client::HTTP.new('https://flexhire.com/api/v2') do
  def headers(context)
    # Optionally set any HTTP headers
    { "FLEXHIRE-API-KEY": "tavs7syouvqoua2w" }
  end
end

Schema = GraphQL::Client.load_schema(HTTP)
Client = GraphQL::Client.new(schema: Schema, execute: HTTP)
