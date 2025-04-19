export const fakeData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Game ${i + 1}`,
  cover: 'https://placehold.co/300x180/png',
}));

export const fakeCommunityPosts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  user: `User${i + 1}`,
  avatar: 'https://placehold.co/50x50/png',
  content: `This is post #${i + 1} in the community section.`,
  image: i % 2 === 0 ? 'https://placehold.co/300x200/png' : undefined,
  timestamp: 'Just now',
}));

export const fakeChats = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  user: `Friend ${i + 1}`,
  avatar: 'https://placehold.co/50x50/png',
  lastMessage: 'Hey, are you playing tonight?',
  messages: [
    {
      id: 1,
      sender: 'me',
      content: 'Hey!',
      timestamp: '10:00 AM'
    },
    {
      id: 2,
      sender: 'other',
      content: 'What’s up?',
      timestamp: '10:01 AM'
    },
  ]
}));

export const fakeUser = {
  username: 'SteamGamer123',
  avatar: 'https://placehold.co/100x100/png',
  email: 'steamgamer123@example.com',
  gamesOwned: 35,
  favoriteGame: 'Half-Life 3 (one day...)',
};
