import Book from './Model';

export default function deleteById(req, res) {
  const reqId = req.params.bookId;
  Book.findOneAndDelete({ _id: reqId })
    .exec()
    .then((result) => {
      res.status(200).json('delete book');
    })
    .catch((error) => {
      res.status(400).json('Book Error delete all');
    });
}
