import { gql } from 'graphql-request';

export const queryEvents = gql`
	query Events($todaysDate: DateTime!) {
		events(orderBy: datetime_event_ASC, where: { datetime_event_gt: $todaysDate }) {
			slug
			title
			id
			datetime_event
			eventUrl
			speakers {
				name
				handle
				handleUrl
				slug
				picture {
					id
					url
					small: url(transformation: { image: { resize: { width: 200, height: 200, fit: clip } } })
				}
			}
		}
	}
`;

export const queryEvent = gql`
	query Event($slug: String!) {
		events(where: { slug: $slug }) {
			slug
			title
			id
			datetime_event
			eventUrl
			speakers {
				name
				handle
				handleUrl
				slug
				picture {
					id
					url
				}
			}
		}
	}
`;

export const querySpeakers = gql`
	query Speakers {
		speakers {
			name
			slug
			biography
			picture {
				id
				url
			}
		}
	}
`;

export const querySpeaker = gql`
	query Speaker($slug: String!) {
		speakers(where: { slug: $slug }) {
			name
			slug
			biography
			picture {
				id
				url
			}
		}
	}
`;

export const queryTalks = gql`
	query Talks {
		events(orderBy: datetime_event_ASC) {
			slug
			title
			id
			datetime_event
			talkUrl
			speakers {
				name
				handle
				handleUrl
				picture {
					id
					url
				}
			}
		}
	}
`;
