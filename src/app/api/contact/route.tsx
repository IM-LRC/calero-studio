import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject = "Nouveau projet", message } = body;

    if (!name || !email || !message) {
      return Response.json(
        {
          error: "Champs obligatoires manquants",
        },
        {
          status: 400,
        },
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          error: "Email invalide",
        },
        {
          status: 400,
        },
      );
    }
    const { error } = await resend.emails.send({
      from: "CALERO Studio <hello@calerostudio.com>",
      to: "leocalvo.dev@gmail.com",
      subject: `Nouveau projet : ${subject}`,
      html: `
        <h2>Nouveau message CALERO</h2>

        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>

        <p>${message}</p>
      `,
    });

    if (error) {
      return Response.json(
        {
          error: "Erreur lors de l'envoi",
        },
        {
          status: 500,
        },
      );
    }

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json(
      {
        error: "Erreur serveur",
      },
      {
        status: 500,
      },
    );
  }
}
