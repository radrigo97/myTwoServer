let name = [];
export default function info(req, res) {
  name.push(req.body.name);
  res.status(200).json(name);
}
