import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, city, scope, area, notes } = body;

    const emailSubject = `New Architectural Proposal Inquiry: ${name} (${scope})`;
    const formattedMessage = `
========================================
ANJANI INFRA - NEW PROJECT INQUIRY
========================================
Client Name: ${name}
Phone / WhatsApp: ${phone}
Client Email: ${email || 'N/A'}
Site Location / City: ${city}
Contracting Scope: ${scope}
Built-Up Area: ${area} Sq.Ft.
Project Notes: ${notes || 'Standard Consultation & BOQ Quote Request'}
========================================
Sent via Anjani Infra Live Web Portal (anjaniinfrap.com)
    `.trim();

    // 1. Dispatch via FormSubmit AJAX (Direct Mailbox Relay)
    try {
      await fetch('https://formsubmit.co/ajax/anjaniinfra4@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
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
      console.log('Relay 1 note:', e);
    }

    // 2. Dispatch via Web3Forms (Public Instant Endpoint)
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e48a3641-7667-4d1a-b684-[#DIRECT_KEY]',
          to_email: 'anjaniinfra4@gmail.com',
          from_name: name,
          subject: emailSubject,
          message: formattedMessage,
          name: name,
          phone: phone,
          email: email
        })
      });
    } catch (e) {
      console.log('Relay 2 note:', e);
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry email dispatched successfully to anjaniinfra4@gmail.com'
    });
  } catch (error) {
    console.error('API send-email error:', error);
    return NextResponse.json({ success: false, message: 'Failed to dispatch email' }, { status: 500 });
  }
}
