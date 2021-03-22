import Book from './Model';

export default function update(req, res) {
  const reqById = req.params.bookId;

  Book.updateOne({ _id: reqById }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json('Book ERROR update by id');
    });
}
