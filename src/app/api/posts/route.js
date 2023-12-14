import { NextResponse } from 'next/server';
import { posts } from './posts';

export async function GET(Response) {
  return NextResponse.json(posts);
}