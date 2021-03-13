let count = 0;
export default function info(req, res) {
  res.status(200).json('Hello' + count++);
}
