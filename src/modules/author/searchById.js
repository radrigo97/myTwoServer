import Author from './Model';

export default function searchById(req, res) {
  const reqById = req.params.authorId;

  Author.findById(reqById)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json('Author get by id');
    });
}
