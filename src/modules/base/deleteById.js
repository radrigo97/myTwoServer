import Base from './Model';

export default function deleteById(req, res) {
  const reqId = req.params.baseId;
  Base.findOneAndDelete({ _id: reqId })
    .exec()
    .then((result) => {
      res.status(200).json('delete user');
    })
    .catch((error) => {
      res.status(400).json('User Error delete all');
    });
}
