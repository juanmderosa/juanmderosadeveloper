import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import MailingService from "../services/email.services";

const mailingService = new MailingService();

export const server = {
  sendEmail: defineAction({
    accept: "form",
    input: z.object({
      nombre: z.string(),
      email: z.string().email(),
      telefono: z.string(),
      mensaje: z.string(),
    }),
    handler: async (input) => {
      try {
        const emailContent = {
          from: `"juanmderosa-developer.com" <${input.email}>`,
          to: import.meta.env.MAILING_USER,
          subject: "Nuevo mensaje desde juanmderosa-developer.com",
          html: `
            <h3>Detalles del mensaje:</h3>
            <p><strong>Nombre:</strong> ${input.nombre}</p>
            <p><strong>Email:</strong> ${input.email}</p>
            <p><strong>Teléfono:</strong> ${input.telefono}</p>
            <p><strong>Mensaje:</strong> ${input.mensaje}</p>
          `,
        };

        const result = await mailingService.sendMail(emailContent);

        if (result.accepted.length > 0) {
          return { success: true };
        } else {
          throw new Error("Error al enviar el correo");
        }
      } catch (error: any) {
        console.error("Error al enviar el correo:", error.message || error);
        return { success: false, error: error.message || "Error desconocido" };
      }
    },
  }),
};
