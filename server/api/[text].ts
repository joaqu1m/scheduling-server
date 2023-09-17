export default defineEventHandler((event) => {
    const text = getRouterParam(event, 'text')
    return { status: 200, body: { message: 'okkk' + text } };
});