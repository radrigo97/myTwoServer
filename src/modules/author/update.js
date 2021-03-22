import Author from './Model';

export default function update(req, res) {
  const reqById = req.params.authorId;

  Author.updateOne({ _id: reqById }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json('Author ERROR update by id');
    });
}
