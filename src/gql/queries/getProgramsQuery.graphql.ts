import {gql} from '@apollo/client';

export const programsQuery = gql`
  query Programs($day: String!, $channelId: [String!], $type: [String!]) {
    programs(day: $day, channel_id: $channelId, type: $type) {
      title
      day
      channel_id
      type
      description
      category
      country
      photo
      year
      from
      to
      _id
    }
    types
    channels {
      id
      title
    }
  }
`;
