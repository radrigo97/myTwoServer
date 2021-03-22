import Author from './Model';

export default function deleteById(req, res) {
  const reqId = req.params.authorId;
  Author.findOneAndDelete({ _id: reqId })
    .exec()
    .then((result) => {
      res.status(200).json('delete author');
    })
    .catch((error) => {
      res.status(400).json('Author Error delete all');
    });
}
