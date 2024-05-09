import { graphql } from 'babel-plugin-relay/macro';

const UserQuery = graphql`
  query UserQuery {
    flexhireData {
      id
      name
      email
      avatarUrl
      profile {
        id
        slug
        totalExperience
      }
    }
  }
`;

export default UserQuery;
