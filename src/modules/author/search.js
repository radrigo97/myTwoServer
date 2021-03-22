import Author from './Model';

export default function search(req, res) {
  Author.find()
    .populate({
      path: 'book',
      select: 'title',
    })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json('Error get author');
    });
}
