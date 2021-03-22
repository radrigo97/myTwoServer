import User from './Model';

export default function userDeleteById(req, res) {
  const reqId = req.params.userId;
  User.findOneAndDelete({ _id: reqId })
    .exec()
    .then((result) => {
      res.status(200).json('delete user');
    })
    .catch((error) => {
      res.status(400).json('User Error delete all');
    });
}
