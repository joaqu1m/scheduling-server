export default defineEventHandler((event) => {
    return { status: 200, body: { message: 'ok' } };
});