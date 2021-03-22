import Author from './Model';

export default function deleteAll(req, res) {
  Author.deleteMany()
    .exec()
    .then((result) => {
      res.status(200).json('delete All');
    })
    .catch((error) => {
      res.status(400).json('Author Error delete all');
    });
}
