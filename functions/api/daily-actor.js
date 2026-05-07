export async function onRequest(context) {
    const answerList = [31, 380, 116, 1158, 287]; // Tu Twoja lista 200 ID
    const GAME_START_DATE = new Date("2024-01-01T00:00:00Z");
    const { searchParams } = new URL(context.request.url);
    const day = searchParams.get('day');
    const today = new Date();
    const realDiff = Math.floor(Math.abs(today - GAME_START_DATE) / 86400000);
    let targetDay = day !== null ? parseInt(day) : realDiff;
    if (targetDay > realDiff) targetDay = realDiff;

    return new Response(JSON.stringify({ 
        actorId: answerList[targetDay % answerList.length],
        currentDay: targetDay,
        realToday: realDiff
    }), { headers: { "Content-Type": "application/json" } });
}