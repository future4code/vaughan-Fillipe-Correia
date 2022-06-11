import dotenv from 'dotenv';

dotenv.config();

export const SMTP_CONFIG = {
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASSWORD
}
