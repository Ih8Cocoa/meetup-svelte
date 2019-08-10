import { writable } from 'svelte/store';

// private store data, don't bother
const _meetups = writable([
	{
		id: "m1",
		title: "Coding Bootcamp",
		subtitle: "Learn in 2 hours",
		description: "Sponsored by United Nations",
		imageUrl:
			"https://i2.wp.com/www.animemaru.com/wp-content/uploads/2018/02/catgirls_nation_research.jpg?resize=640%2C360&ssl=1",
		address: "8 Nirvana Street",
		contactEmail: "code@test.com"
	},
	{
		id: "m2",
		title: "Swimming Catgirls",
		subtitle: "Let's fricking go",
		description: "Swimming lessons with other fellow catgirls",
		imageUrl:
			"https://www.wallpaperup.com/uploads/wallpapers/2014/07/01/383259/0e6ce91ca8a334ea9636315ac2c94995-700.jpg",
		address: "UN Swimming Pool, Room 2",
		contactEmail: "swim@test.com"
	}
])

// exposing a bunch of public methods
const meetups = {
	subscribe: _meetups.subscribe,
	newMeetup: ({ title, subtitle, contactEmail, address, description, imageUrl }) => {
		const meetupData = {
			title,
			subtitle,
			contactEmail,
			address,
			description,
			imageUrl,
			id: Math.random().toString(),
			isFavorite: false
		}
		_meetups.update(items => [meetupData, ...items]);
	},
	toggleFavorite: (id) => {
		_meetups.update(items => {
			const meetup = items.find(m => m.id === id);
			if (meetup) {
				meetup.isFavorite = !meetup.isFavorite
			}
			return items;
		})
	},
	editMeetup: (id, { title, subtitle, contactEmail, address, description, imageUrl }) => {
		_meetups.update(items => {
			const meetupIndex = items.findIndex(m => m.id === id);
			if (meetupIndex !== -1) {
				const editedMeetup = { id, title, subtitle, contactEmail, address, description, imageUrl };
				items[meetupIndex] = editedMeetup;
			}
			return items;
		})
	},
	removeMeetup: (id) => {
		_meetups.update(items => items.filter(m => m.id !== id));
	}
}

export default meetups;