import User from './Model';

export default function userGetAll(req, res) {
  User.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json('Error get users');
    });
}
