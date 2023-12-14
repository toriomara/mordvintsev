import { NextResponse } from 'next/server';

export async function GET(Request, {params: {id}}) {
  return NextResponse.json({id})
}
