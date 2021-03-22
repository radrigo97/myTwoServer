import Book from './Model';

export default function searchById(req, res) {
  const reqById = req.params.bookId;

  Book.findById(reqById)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json('Book get by id');
    });
}
