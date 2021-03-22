import Book from './Model';

export default function search(req, res) {
  Book.find()
    .populate({ path: 'author', select: 'title' })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json('Error get book');
    });
}
