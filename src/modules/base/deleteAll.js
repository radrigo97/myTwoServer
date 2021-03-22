import Base from './Model';

export default function deleteAll(req, res) {
  Base.deleteMany()
    .exec()
    .then((result) => {
      res.status(200).json('delete All');
    })
    .catch((error) => {
      res.status(400).json('User Error delete all');
    });
}
