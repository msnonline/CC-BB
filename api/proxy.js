export default async function handler(req, res) {
  const response = await fetch("http://ip-api.com/json/");
  const data = await response.json();

  res.status(200).json(data);
}
