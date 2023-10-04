import Link from '~/server/models/Link.model';

export default defineEventHandler(async(event) => {
    let { url } = await readBody(event);

    if(!URL.canParse(url)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'The given URL is invalid!',
        });
    }

    url = new URL(url);
    if(url.protocol !== 'https:' && url.protocol !== 'http:') {
        throw createError({
            statusCode: 400,
            statusMessage: 'The protocol scheme of the URL must be "https:" or "http:"!',
        });        
    }

    const link = await Link.findOne({url: url.href}).exec();
    if(link) return link;

    let token = generateToken();
    while(await Link.findOne({token: token}).exec()) {
        token = generateToken();
    }
    try {
        const newLink = new Link({
            url: url.href,
            token: token
        });
        await newLink.save();
        return newLink;
    }
    catch(err) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Unable to shorten the given url!'
        })
    }
})

function generateToken() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvzxyz0123456789";
    let token = "";
    for(let i = 0; i < 6; i++) {
        token += chars[Math.floor(Math.random() * chars.length)];
    }
    return token;
}