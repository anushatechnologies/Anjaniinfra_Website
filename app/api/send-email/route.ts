import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, city, scope, area, notes } = body;

    const emailSubject = `New Architectural Proposal Inquiry: ${name} (${scope})`;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #C5A059; border-radius: 12px; background-color: #FCF9EB;">
        <h2 style="color: #1A374D; margin-top: 0;">🏛️ ANJANI INFRA - NEW PROJECT INQUIRY</h2>
        <p style="color: #383735;">A new architectural inquiry has been submitted via the official web portal (<strong>anjaniinfrap.com</strong>).</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr style="background-color: #2B5573; color: white;">
            <th style="padding: 10px; text-align: left; font-size: 12px;">SPECIFICATION</th>
            <th style="padding: 10px; text-align: left; font-size: 12px;">DETAILS</th>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #DDD; font-weight: bold; color: #1A374D;">Client Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #DDD;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #DDD; font-weight: bold; color: #1A374D;">Phone / WhatsApp</td>
            <td style="padding: 10px; border-bottom: 1px solid #DDD;"><strong>${phone}</strong></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #DDD; font-weight: bold; color: #1A374D;">Client Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #DDD;">${email || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #DDD; font-weight: bold; color: #1A374D;">Site Location / City</td>
            <td style="padding: 10px; border-bottom: 1px solid #DDD;">${city}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #DDD; font-weight: bold; color: #1A374D;">Contracting Scope</td>
            <td style="padding: 10px; border-bottom: 1px solid #DDD;"><span style="color: #C5A059; font-weight: bold;">${scope}</span></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #DDD; font-weight: bold; color: #1A374D;">Built-Up Area</td>
            <td style="padding: 10px; border-bottom: 1px solid #DDD;">${area} Sq.Ft.</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #DDD; font-weight: bold; color: #1A374D;">Project Notes</td>
            <td style="padding: 10px; border-bottom: 1px solid #DDD;">${notes || 'Standard Consultation & BOQ Quote Request'}</td>
          </tr>
        </table>
        
        <p style="font-size: 11px; color: #888; margin-top: 20px;">Anjani Infra Official Web Portal • Direct Hotline: +91 83888 99999 • GSTIN: 36BKIPS0586G1ZT</p>
      </div>
    `;

    // Retrieve credentials from environment variables or direct config
    const gmailUser = process.env.GMAIL_USER || 'anjaniinfra4@gmail.com';
    const gmailPass = process.env.GMAIL_APP_PASS;

    if (gmailPass) {
      // Direct Gmail SMTP Transporter using App Password
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      await transporter.sendMail({
        from: `"Anjani Infra Web" <${gmailUser}>`,
        to: 'anjaniinfra4@gmail.com',
        subject: emailSubject,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, message: 'Email delivered directly via Gmail SMTP!' });
    }

    // Fallback dispatches if App Password is being configured
    try {
      await fetch('https://formsubmit.co/ajax/anjaniinfra4@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: emailSubject,
          _template: 'table',
          _captcha: 'false',
          'Client Name': name,
          'Phone / WhatsApp': phone,
          'Client Email': email || 'N/A',
          'Site Location / City': city,
          'Contracting Scope': scope,
          'Built-Up Area': `${area} Sq.Ft.`,
          'Project Notes': notes || 'Standard Consultation & BOQ Quote Request'
        })
      });
    } catch (e) {
      console.log('Fallback relay note:', e);
    }

    return NextResponse.json({ success: true, message: 'Inquiry processing complete.' });
  } catch (error) {
    console.error('API send-email error:', error);
    return NextResponse.json({ success: false, message: 'Failed to dispatch email' }, { status: 500 });
  }
}
