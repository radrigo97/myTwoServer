export default function info(req, res) {
  const a = 5;
  const b = 6;
  const c = a + b;
  res.json('a' + c);
}
