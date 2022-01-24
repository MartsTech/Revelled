export default function hello(_req: any, res: any) {
  res.status(200).json({ name: "John Doe" });
}
