import Author from './Model';

export default function create(req, res) {
  const newAuthor = new Author({
    title: req.body.title,
    book: req.body.book,
  });

  newAuthor
    .save()
    .then(() => {
      res.status(200).json('Author created');
    })
    .catch(() => {
      res.status(400).json('Error author not created');
    })
    .finally(() => {});
}
