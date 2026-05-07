export async function onRequest(context) {
    const { searchParams } = new URL(context.request.url);
    const id = searchParams.get('id');
    const API_KEY = context.env.TMDB_API_KEY; // Pobiera klucz z ustawień Cloudflare

    const res = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&append_to_response=movie_credits&language=pl-PL`);
    const data = await res.json();

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" }
    });
}