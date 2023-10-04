import Link from '~/server/models/Link.model';

export default defineEventHandler(async(event) => {
    const token = getRouterParam(event, 'token');
    const link = await Link.findOne({token: token});
    if(!link) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Not Found!',
        })
    }
    else {
        await sendRedirect(event, link.url, 307);
    }
});