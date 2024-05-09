class FlexhireApiClient
  FlexhireQuery = Client.parse <<-'GRAPHQL'
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

  def self.fetch_data
    result = Client.query(FlexhireQuery)
    if result.data
      return result.data.current_user
    else
      return { error: "No data received from the server" }
    end
  end
end
