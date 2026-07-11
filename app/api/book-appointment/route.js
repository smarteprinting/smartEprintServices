import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { fullName, phone, email, serviceType, description } = await req.json();

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'support@smarteprintservices.com',
      subject: `New Appointment Request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #024AD8;">New Appointment Request</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Type:</strong> ${serviceType}</p>
          <p><strong>Description:</strong></p>
          <p style="background-color: #f4f4f4; padding: 15px; border-radius: 8px;">${description}</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Appointment request sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending appointment email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send request. Please try again later.' }, { status: 500 });
  }
}
