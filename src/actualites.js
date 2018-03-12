export const reactionsEnum = {
  'likes': 'fa-thumbs-up',
  'hearts': 'fa-heart',
  'sad': 'fa-frown',
};

export const actualites = [
  {
    id: '47ld',
    message: 'Hey, qui a regardé le match hier :) ?',
    datePublication: Date.now() - 100,
    auteur: {
      nom: 'Kristen',
      avatar: '../img/kristen.jpg',
    },
    reactions: {
      likes: 4,
      hearts: 5,
      sad: 0,
    },
    commentaires: [
      {
        message: 'Non, j\'ai joué aux jeux vidéo!',
        datePublication: Date.now() - 30000,
        auteur: {
          nom: 'Aloy',
          avatar: '../img/Aloy.jpg',
        },
        actualiteId: '47ld',
      },
      {
        message: 'Pas moi :(',
        datePublication: Date.now() - 10000,
        auteur: {
          nom: 'Jane',
          avatar: '../img/janedoe.jpg',
        },
        actualiteId: '47ld',
      },
    ],
  },
  {
    id: 'i9pz',
    message: 'Vous jouez que en multi :( ?',
    datePublication: Date.now() - 100000,
    auteur: {
      nom: 'Aloy',
      avatar: '../img/Aloy.jpg',
    },
    reactions: {
      likes: 1,
      hearts: 0,
      sad: 3,
    },
    commentaires: [],
  },
];
