import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

export default async function transferMoney(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ message: "Please login..." });
  }

  if (req.method === "POST") {
    saveTransferToDatabase(req.body);
    res.status(201).json({ done: true });
  } else {
    res.status(405).json({ message: "You need to use POST, sorry!!!" });
  }
}

function saveTransferToDatabase(transfer) {
  // lets imagine we are saving to a database =D
  console.log(`-- $${transfer.amount} on its way to ${transfer.account} --`);
}
