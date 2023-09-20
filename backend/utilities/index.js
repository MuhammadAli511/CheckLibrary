const Resend = require('resend').Resend;
const verificationHtml = require('./VerificationEmail');

module.exports.convertStringToDate = async (dateString) => {
    const date = new Date(dateString);
    return date;
}

module.exports.sendVerificationEmail = async (user, url) => {
    const resend = new Resend(process.env.RESEND_SECRET);
    const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: user.email,
        subject: 'Verify your email',
        html: verificationHtml(url, user.lastName),
    });
    return data;
}
