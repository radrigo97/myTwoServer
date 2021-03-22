import Base from './Model';

export default function create(req, res) {
  const newUser = new Base({
    title: req.body.title,
  });

  newUser
    .save()
    .then(() => {
      res.status(200).json('User created');
    })
    .catch(() => {
      res.status(400).json('Error user not created');
    })
    .finally(() => {});
}
