require('dotenv').config();
import nodemailer from 'nodemailer';
import formidable from 'formidable';

const { SENDER, PASSWORD, TO } = process.env;

export const config = {
    api: {
        bodyParser: false,
    },
};

function readJsonBody(req) {
    return new Promise((resolve, reject) => {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        });
        req.on('end', () => {
            try {
                const json = data ? JSON.parse(data) : {};
                resolve(json);
            } catch (err) {
                reject(err);
            }
        });
        req.on('error', reject);
    });
}

function parseForm(req) {
    const form = formidable({ multiples: false, keepExtensions: true });
    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err);
            resolve({ fields, files });
        });
    });
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const contentType = req.headers['content-type'] || '';

            let data = {};
            let attachments = [];

            if (contentType.includes('multipart/form-data')) {
                const { fields, files } = await parseForm(req);
                // Helper to get single value from possible array
                const val = (v) => Array.isArray(v) ? v[0] : v;
                data = {
                    input1: val(fields.input1) || '',
                    input2: val(fields.input2) || '',
                    input3: val(fields.input3) || '',
                    input4: val(fields.input4) || '',
                    input5: val(fields.input5) || '',
                };

                const receta = files.receta;
                if (receta) {
                    const file = Array.isArray(receta) ? receta[0] : receta;
                    if (file && file.filepath) {
                        attachments.push({
                            filename: file.originalFilename || 'receta.jpg',
                            path: file.filepath,
                            contentType: file.mimetype || 'image/*',
                        });
                    }
                }
            } else {
                // Fallback for JSON bodies (e.g., Newsletter)
                const json = await readJsonBody(req);
                data = json || {};
            }

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                auth: {
                    user: SENDER,
                    pass: PASSWORD,
                },
                secure: true,
            });

                        // Site brand colors (mirroring Tailwind config)
                        const brand = {
                                primary: '#007BC7',
                                primaryHover: '#005A9E',
                                textPrimary: '#1A2F98',
                                textDark: '#111827',
                                textSecondary: '#43515E',
                                bg: '#F1F4F7',
                                white: '#FFFFFF',
                                border: '#E2E2E2',
                        };

                        const escapeHtml = (str = '') => String(str)
                                .replace(/&/g, '&amp;')
                                .replace(/</g, '&lt;')
                                .replace(/>/g, '&gt;')
                                .replace(/"/g, '&quot;')
                                .replace(/'/g, '&#39;');

                        const replyEmail = data.Newsletter ? data.email : data.input2;
                        const subject = data.Newsletter
                                ? `Mensaje desde website 'Ocular' motivo: ${data.Newsletter}`
                                : `Mensaje desde website 'Ocular' motivo: ${data.input4 || 'Consulta'}`;

                        const replyButton = replyEmail ? `
                                <tr>
                                    <td align="center" style="padding: 24px 24px 8px;">
                                        <a href="mailto:${escapeHtml(data.input2 || '-')}?subject=${encodeURIComponent('Re: ' + subject)}" 
                                             style="background:${brand.primary}; color:${brand.white}; display:inline-block; padding:12px 20px; border-radius:8px; text-decoration:none; font-weight:600;">
                                            Responder vía mail
                                        </a>
                                    </td>
                                </tr>
                        ` : '';

                        const htmlContact = `
                        <div style="background:${brand.bg}; padding:24px; font-family:Arial, sans-serif;">
                            <div style="max-width:640px; margin:0 auto; background:${brand.white}; border:1px solid ${brand.border}; border-radius:12px; overflow:hidden;">
                                <div style="background:${brand.primary}; color:${brand.white}; padding:18px 24px;">
                                    <h1 style="margin:0; font-size:20px;">Nuevo contacto desde el sitio Ocular</h1>
                                    <p style="margin:4px 0 0; opacity:0.9; font-size:13px;">Detalles del mensaje</p>
                                </div>
                                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="padding: 8px 24px 0;">
                                    <tr>
                                        <td style="padding:12px 0; border-bottom:1px solid ${brand.border};">
                                            <strong style="color:${brand.textSecondary};">Nombre:</strong>
                                            <span style="color:${brand.textDark}; margin-left:6px;">${escapeHtml(data.input1 || '-')}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:12px 0; border-bottom:1px solid ${brand.border};">
                                            <strong style="color:${brand.textSecondary};">Email:</strong>
                                            <span style="color:${brand.textDark}; margin-left:6px;">${escapeHtml(data.input2 || '-')}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:12px 0; border-bottom:1px solid ${brand.border};">
                                            <strong style="color:${brand.textSecondary};">Teléfono:</strong>
                                            <span style="color:${brand.textDark}; margin-left:6px;">${escapeHtml(data.input5 || '-')}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:12px 0; border-bottom:1px solid ${brand.border};">
                                            <strong style="color:${brand.textSecondary};">Motivo:</strong>
                                            <span style="color:${brand.textDark}; margin-left:6px;">${escapeHtml(data.input4 || 'Consulta')}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:16px 0;">
                                            <strong style="color:${brand.textSecondary}; display:block; margin-bottom:8px;">Mensaje:</strong>
                                            <div style="color:${brand.textDark}; line-height:1.5;">${escapeHtml(data.input3 || '').replace(/\n/g, '<br/>')}</div>
                                        </td>
                                    </tr>
                                </table>
                                ${replyButton}
                                ${attachments.length ? `<div style="padding: 8px 24px 24px; color:${brand.textSecondary}; font-size:12px;">Se adjuntó 1 archivo: receta</div>` : `<div style="padding-bottom:16px;"></div>`}
                                <div style="background:${brand.bg}; padding:12px 24px; color:${brand.textSecondary}; font-size:12px;">
                                    Este mensaje fue enviado desde el formulario de contacto de <a style="color:${brand.primary}; text-decoration:none;" href="https://ocularinsumosquirurgicos.com/es" target="_blank" rel="noreferrer">https://ocularinsumosquirurgicos.com/es</a>
                                </div>
                            </div>
                        </div>`;

                        const htmlNewsletter = `
                        <div style="background:${brand.bg}; padding:24px; font-family:Arial, sans-serif;">
                            <div style="max-width:640px; margin:0 auto; background:${brand.white}; border:1px solid ${brand.border}; border-radius:12px; overflow:hidden;">
                                <div style="background:${brand.primary}; color:${brand.white}; padding:18px 24px;">
                                    <h1 style="margin:0; font-size:20px;">Nueva suscripción a novedades</h1>
                                    <p style="margin:4px 0 0; opacity:0.9; font-size:13px;">Solicitud para agregar a la base de datos</p>
                                </div>
                                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="padding: 8px 24px 0;">
                                    <tr>
                                        <td style="padding:12px 0; border-bottom:1px solid ${brand.border};">
                                            <strong style="color:${brand.textSecondary};">Email:</strong>
                                            <span style="color:${brand.textDark}; margin-left:6px;">${escapeHtml(data.email || '-')}</span>
                                        </td>
                                    </tr>
                                </table>
                                ${data.email ? `
                                    <div style="text-align:center; padding: 24px 24px 8px;">
                                        <a href="mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent('Re: Suscripción a novedades Ocular')}" 
                                             style="background:${brand.primary}; color:${brand.white}; display:inline-block; padding:12px 20px; border-radius:8px; text-decoration:none; font-weight:600;">
                                            Responder vía mail
                                        </a>
                                    </div>
                                ` : ''}
                                <div style="background:${brand.bg}; padding:12px 24px; color:${brand.textSecondary}; font-size:12px;">
                                    Esta solicitud fue enviada desde el sitio <a style="color:${brand.primary}; text-decoration:none;" href="https://ocularinsumosquirurgicos.com/es" target="_blank" rel="noreferrer">ocularinsumosquirurgicos.com</a>
                                </div>
                            </div>
                        </div>`;

            const mailData = {
                        from: SENDER,
                        to: TO,
                        subject,
                        html: !data.Newsletter ? htmlContact : htmlNewsletter,
                        attachments: attachments.length ? attachments : undefined,
            };

            const info = await transporter.sendMail(mailData);
            //console.log('Correo enviado: %s', info.messageId);

            res.status(200).json({ message: 'Correo enviado exitosamente' });
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).json({ error: 'Error al enviar el correo' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
