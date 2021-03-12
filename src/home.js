export default function home(req, res) {
  res.status(200).json({ name: 'Alex', arr: [1, 2, 3], status: true });
}
