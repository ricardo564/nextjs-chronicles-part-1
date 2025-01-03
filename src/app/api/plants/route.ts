import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.TREFLE_API_KEY;
  console.log('API Key:', apiKey);

  try {
    const response = await fetch(
      `https://trefle.io/api/v1/plants?token=${apiKey}`
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch plants' }, { status: 500 });
  }
}
