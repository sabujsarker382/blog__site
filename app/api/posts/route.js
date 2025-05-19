// // app/api/posts/route.js
// import demoPosts from './demoPosts'; 

// export async function POST(request) {
//   // parse the body
//   const body = await request.json();

//   return new Response(JSON.stringify({ message: 'Post created' }), {
//     status: 201,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }

// export async function GET(request) {
//   return new Response(JSON.stringify(demoPosts), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }
