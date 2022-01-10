const mail = (req: any, res: any) => {
  const body = JSON.parse(req.body);
  console.log("🚀 ~ file: mail.ts ~ line 3 ~ body", body);
  res.status(200).json({ status: "OK" });
};

export default mail;
