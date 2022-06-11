import nodemailer from 'nodemailer';

import {SMTP_CONFIG} from '../config/smtp';

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
        rejectUnauthorized: false,
    },
});


export async function run(email:string, hashedlink:string) {
    const mailSent = await transporter.sendMail({
        from: `Team Meta <${SMTP_CONFIG.user}>`,
        to: email,
        subject: 'Avaliação Meta Leaguer',
        text: `Olá, clique no link abaixo para responder a avaliação: ${hashedlink}`,
    });

    if (!mailSent) {
        throw new Error('Could not send email');
    }
}