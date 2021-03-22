import User from './Model';

export default function userDeleteAll(req, res) {
  User.deleteMany()
    .exec()
    .then((result) => {
      res.status(200).json('delete All');
    })
    .catch((error) => {
      res.status(400).json('User Error delete all');
    });
}
