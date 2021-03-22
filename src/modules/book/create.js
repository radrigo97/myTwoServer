import Book from './Model';
import mongoose from 'mongoose';
import Author from '../author/Model';

export default async function create(req, res) {
  const idBook = new mongoose.Types.ObjectId();
  const newBook = new Book({
    idBook,
    title: req.body.title,
    author: req.body.author,
  });

  //update
  const promisesUpdateAuthor = newBook.author.map((author) =>
    Author.findByIdAndUpdate({ _id: author }, { $addToSet: { books: idBook } })
      .exec()
      .then((doc) => {
        // newAuthors.push(author);
        doc.book = [...doc.book, idBook];
        doc.save().catch((e) => {
          throw new Error(e);
        });
      })
      .catch((err) => {
        console.log('Author updated error!' + err);
      }),
  );
  const promiseResults1 = await Promise.all(promisesUpdateAuthor);
  console.log(promiseResults1);

  //create Author
  newBook
    .save()
    .then(() => {
      res.status(200).json('Book created');
    })
    .catch(() => {
      res.status(400).json('Error book not created');
    })
    .finally(() => {});
}
