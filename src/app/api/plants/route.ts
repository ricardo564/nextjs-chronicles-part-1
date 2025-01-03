import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.TREFLE_API_KEY;

  try {
    const response = await fetch(
      `https://trefle.io/api/v1/plants?token=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching plants:', error);

    return NextResponse.json({
      error: 'Failed to load plants'
    }, {
      status: 500
    });
  }
}
