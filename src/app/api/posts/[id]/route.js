// import { getPostById } from '@/utils/fetchData';
// import { NextResponse } from 'next/server';

// export async function GET(Request, {params: {id}}) {
//   const post = await getPostById(id)
//   return NextResponse.json({post})
// }

import { getPostById } from '@/utils/fetchData';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const res = await getPostById(id)
  
  const post = await res.json()
  
  return Response.json({post})
}
