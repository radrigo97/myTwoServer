import Book from './Model';

export default function deleteAll(req, res) {
  Book.deleteMany()
    .exec()
    .then((result) => {
      res.status(200).json('delete All');
    })
    .catch((error) => {
      res.status(400).json('Book Error delete all');
    });
}
