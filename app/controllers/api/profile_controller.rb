class Api::ProfileController < ApplicationController
  QUERY = Client.parse <<-'GRAPHQL'
    {
      currentUser {
        id
        name
        email
        avatarUrl
        profile {
          id
          slug
          totalExperience
        }
        contracts(first: 100) {
          totalCount
          nodes {
            job {
              rawId
              title
              description
              status
            }
          }
        }
      }

    }
  GRAPHQL

  def show
    result = Client.query(QUERY)
    if result.data
      @user = result.data.current_user
      render json: @user
    else
      render json: { error: "No data received from the server" }, status: :unprocessable_entity
    end
  end
end
