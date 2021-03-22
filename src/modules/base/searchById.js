import Base from './Model';

export default function searchById(req, res) {
  const reqById = req.params.baseId;

  Base.findById(reqById)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json('User get by id');
    });
}
