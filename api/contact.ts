import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }

    // Server-side secret key (configured in Vercel Environment Variables, never exposed in client JS)
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return res.status(500).json({
        success: false,
        message: 'Server configuration error: WEB3FORMS_ACCESS_KEY is not configured in Vercel.',
      });
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: subject ? `[Portfolio Inquiry] ${subject}` : `[Portfolio Inquiry] From ${name}`,
        message,
        from_name: `${name} via Hamid Portfolio`,
        replyto: email,
        botcheck: '',
      }),
    });

    const result = await response.json();
    return res.status(response.status).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to deliver message. Please contact buildwithhamid@gmail.com directly.',
    });
  }
}
