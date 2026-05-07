export async function onRequest(context) {
    const { searchParams } = new URL(context.request.url);
    const query = searchParams.get('query');
    const API_KEY = context.env.TMDB_API_KEY;

    const res = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=pl-PL`);
    const data = await res.json();

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" }
    });
}