import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { domain, name, email, telefon, note } = await request.json();

    if (!domain || !name || !email || !note || !telefon) {
      return NextResponse.json({ error: 'Alle felter skal udfyldes' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Uplift <kontakt@upliftcro.dk>',
      to: ['mbk@upliftcro.dk', 'mmr@upliftcro.dk'],
      replyTo: email,
      subject: `🚀 NYT LEAD: ${name}`,
      html: `
        <div style="background-color: #EAEDF1; padding: 40px 0; font-family: sans-serif; color: #22272A;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
      <tr>
        <td align="center" style="padding: 30px 0; background-color: #ffffff; border-bottom: 1px solid #e2e8f0;">
          <img src="https://upliftcro.dk/_next/static/media/UPLIFT%20Wordmark.a7271212.svg" alt="UPLIFT" width="150" style="display: block;" />
        </td>
      </tr>
      
      <tr>
        <td style="padding: 40px 50px;">
          <h1 style="font-size: 24px; margin-bottom: 20px; color: #22272A;">🚀 Nyt lead i hus!</h1>
          
          <p style="font-size: 16px; margin-bottom: 20px;">Vi har modtaget en besked fra: ${name},</p>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Han skriver vedrørende <span style="font-weight: 700;">${domain}</span>, og har tilføjet følgende note:
          </p>

          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            ${note}
          </p>

          <h3 style="font-size: 18px; margin-top: 30px; margin-bottom: 10px; color: #22272A;">Kontaktoplysninger</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Navn: <span style="font-weight: 700;">${domain}</span>
            Email: <span style="font-weight: 700;">${email}</span>
            Telefon: <span style="font-weight: 700;">${telefon}</span>
          </p>

          <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 30px;" />

          <p style="font-size: 15px; line-height: 1.4; margin-bottom: 5px;">De bedste hilsner,</p>
          <p style="font-size: 15px; line-height: 1.4; font-weight: bold; margin: 0;">Mads Kaiser</p>
          <p style="font-size: 14px; color: #666; margin: 0;">Founder & CRO Specialist</p>
          <p style="font-size: 14px; color: #666; margin: 0;">UPLIFT ApS</p>
        </td>
      </tr>
      
      <tr>
        <td align="center" style="padding: 20px; background-color: #f8fafc; color: #94a3b8; font-size: 12px;">
          &copy; ${new Date().getFullYear()} UPLIFT ApS. Alle rettigheder forbeholdes.
        </td>
      </tr>
    </table>
  </div>
      `,
    });

    await resend.emails.send({
      from: 'UPLIFT <kontakt@upliftcro.dk>',
      to: [email],
      subject: `Tak for din besked, ${name}!`,
      replyTo: "kontakt@upliftcro.dk",
      html: `
  <div style="background-color: #EAEDF1; padding: 40px 0; font-family: sans-serif; color: #22272A;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
      <tr>
        <td align="center" style="padding: 30px 0; background-color: #ffffff; border-bottom: 1px solid #e2e8f0;">
          <img src="https://upliftcro.dk/_next/static/media/UPLIFT%20Wordmark.a7271212.svg" alt="UPLIFT" width="150" style="display: block;" />
        </td>
      </tr>
      
      <tr>
        <td style="padding: 40px 50px;">
          <h1 style="font-size: 24px; margin-bottom: 20px; color: #22272A;">Tak for din besked!</h1>
          
          <p style="font-size: 16px; margin-bottom: 20px;">Hej ${name},</p>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Tak for din interesse! Vi har modtaget din besked. Vi glæder os til at kigge på din case og vende tilbage med et resultat inden længe 🙌
          </p>

          <h3 style="font-size: 18px; margin-top: 30px; margin-bottom: 10px; color: #22272A;">Hvad sker der nu?</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Vi stræber efter at have en sammenfattet analyse af din hjemmeside klar til dig indenfor 48 timer. Du kan forvente, at vi kontakter dig via mail eller telefon, for at tage en kort snak om situationen.
          </p>

          <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 30px;" />

          <p style="font-size: 15px; line-height: 1.4; margin-bottom: 5px;">De bedste hilsner,</p>
          <p style="font-size: 15px; line-height: 1.4; font-weight: bold; margin: 0;">Mathias Rasmussen</p>
          <p style="font-size: 14px; color: #666; margin: 0;">Co-founder & Kommunikationsansvarlig</p>
          <p style="font-size: 14px; color: #666; margin: 0;">UPLIFT ApS</p>
        </td>
      </tr>
      
      <tr>
        <td align="center" style="padding: 20px; background-color: #f8fafc; color: #94a3b8; font-size: 12px;">
          &copy; ${new Date().getFullYear()} UPLIFT ApS. Alle rettigheder forbeholdes.
        </td>
      </tr>
    </table>
  </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Resend fejl:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}