const { Prisma } = require('@prisma/client');
const tasks = [
  {
    title: 'Maquettes',
    description: 'Version 1 des maquettes',
    userName: 'Jonh Mainwaring',
    ended: false,
    date: '11 décembre 2023',
  },
  {
    title: 'Réunion',
    description: 'Réunion de lancement',
    userName: 'Mary Gibson',
    date: '3 février 2023',
    ended: false,
  },
  {
    title: "Réunion d'équipe",
    description: 'Réunion de lancement',
    userName: 'Juliane Casier',
    date: '2 octobre 2022',
    ended: false,
  },
  {
    title: 'Team builing',
    description: 'Campagne dans les bois',
    userName: 'Juliane Casier',
    date: '',
    ended: true,
  },
  {
    title: 'POC',
    description: '',
    userName: 'Juliane Casier',
    date: '',
    ended: true,
  },
];
const users = [
  {
    name: 'Jonh Mainwaring',
    email: 'jonh@mail.com',
    image:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--t_1jSOOB--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/58970/9f7afe42-af56-47ee-bda6-9a1cf0964e36.jpg',
  },
  {
    name: 'Mary Gibson',
    email: 'marie@mail.com',
    image:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--t_1jSOOB--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/58970/9f7afe42-af56-47ee-bda6-9a1cf0964e36.jpg',
  },
];

module.exports = {
  tasks,
  users,
};
