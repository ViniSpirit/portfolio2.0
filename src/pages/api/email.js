const sgMail = require("@sendgrid/mail");

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.send("api is running...");
    case "POST":
      const { name, from, title, content } = req.body;
      try {
        if (name && from && title && content) {
          sgMail.setApiKey(process.env.SG_KEY);
          const msg = {
            to: "marcosvims@gmail.com", // Change to your recipient
            from: "vinidevms@gmail.com", // Change to your verified sender
            subject: title,
            text: "and easy to do anywhere, even with Node.js",
            html: `<h3>Nome: ${name}</h3><br/><h3>Email: ${from}</h3><br/><p>${content}<p>`,
          };

          const response = await sgMail.send(msg);

          console.log(response);

          res.status(200).send("enviado");
        } else {
          res.json({ error: "preencha todos os campos" });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
        console.error(error.message);
      }
  }
}
