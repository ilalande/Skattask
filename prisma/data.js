const { Prisma } = require('@prisma/client');

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
  users,
};
