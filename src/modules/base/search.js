import Base from './Model';

export default function search(req, res) {
  Base.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json('Error get users');
    });
}
