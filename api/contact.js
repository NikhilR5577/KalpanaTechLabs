import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const { name, hospital, email, phone, message } = req.body;
  
  // Save to Supabase
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );
    await supabase.from('inquiries').insert([{ name, hospital, email, phone, message }]);
  } catch (e) {
    console.error('Supabase error:', e);
  }
  
  // Send email notification
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  });
  
  await transporter.sendMail({
    from: `"Kalpana TechLabs Website" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `🏥 New Demo Request from ${name} — ${hospital}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a1a; color: white; padding: 32px; border-radius: 16px;">
        <h2 style="color: #3b82f6; margin-top: 0;">New Demo Request 🚀</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Hospital:</b> ${hospital}</p>
        <p><b>Email:</b> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
        <hr style="border-color: rgba(255,255,255,0.1); margin: 24px 0;"/>
        <p style="color: rgba(255,255,255,0.4); font-size: 12px;">Sent from kalpanatechlabs.vercel.app</p>
      </div>
    `,
  });
  
  res.status(200).json({ success: true });
}
