import { NextApiRequest, NextApiResponse } from "next";
import emailjs from "emailjs-com";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const { name, email, message } = req.body;

        const response = await emailjs.send(
            process.env.EMAILJS_SERVICE_ID!,
            process.env.EMAILJS_TEMPLATE_ID!,
            { name, email, message },
            process.env.EMAILJS_USER_ID!
        );
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to send email." });
    }
}
