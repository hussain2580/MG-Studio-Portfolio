import sendgrid from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body || {};
  if (!email || !message) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const FROM_EMAIL = process.env.FROM_EMAIL;
  const TO_EMAIL = process.env.TO_EMAIL;

  if (!SENDGRID_API_KEY || !FROM_EMAIL || !TO_EMAIL) {
    res.status(500).json({ error: 'SendGrid not configured. Set SENDGRID_API_KEY, FROM_EMAIL, TO_EMAIL.' });
    return;
  }

  try {
    sendgrid.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: TO_EMAIL,
      from: FROM_EMAIL,
      replyTo: email,
      subject: `Website contact from ${name || email}`,
      text: `Name: ${name || 'N/A'}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name || 'N/A'}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${(message || '').replace(/\n/g, '<br/>')}</p>`,
    };

    await sendgrid.send(msg);
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('send-contact sendgrid error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
