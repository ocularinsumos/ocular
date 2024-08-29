require('dotenv').config();
import nodemailer from 'nodemailer';

const { SENDER, PASSWORD, TO } = process.env;

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            console.log('req:', req.body);

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                auth: {
                    user: SENDER,
                    pass: PASSWORD,
                },
                secure: true,
            });

            const mailData = {
                from: SENDER,
                to: TO,
                subject: req.body.Newsletter?`Mensaje desde website 'Ocular' motivo: ${req.body.Newsletter}`:`Mensaje desde website 'Ocular' motivo: ${req.body.input4}`,
                html: !req.body.Newsletter?`
                    <p>La Persona ha hecho contacto desde el sitio web:</p>
                    <p>Nombre: ${req.body.input1}</p>
                    <p>Email: ${req.body.input2}</p>
                    <p>Telefono: ${req.body.input5}</p>
                    <p>Motivo: ${req.body.input4}</p>
                    <p>Mensaje: ${req.body.input3}</p>
                `:`
                    <p>La Persona ha hecho contacto desde el sitio web:</p>
                    <p>Quiere que la agreguen a la Base de datos para notificaciones:</p>
                    <p>email: ${req.body.email}</p>`
            };

            const info = await transporter.sendMail(mailData);
            console.log('Correo enviado: %s', info.messageId);

            res.status(200).json({ message: 'Correo enviado exitosamente' });
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).json({ error: 'Error al enviar el correo' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
