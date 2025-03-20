import client from '@/config/postmark';

export async function POST(request: Request) {
  const body = await request.json();
  try {
    await client.sendEmail({
      From: "",
      To: "jackwang.m483@gmail.com",
      Subject: 'Porfolio-----------',
      HtmlBody: `
        <p><strong>IP:</strong> ${body.message}</p>
      `,
    });
    return new Response('ok', { status: 200 });
  } catch (e) {
    return new Response('error', { status: 500 });
  }
}
