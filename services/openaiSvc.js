const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
});

const generateHtmlFromOpenai = async (generateIdea) => {
    const response = await openai.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: 'Return only html code. Dont use tags: html, head and body. Use the best practices for html. Code should be in main tag.'
            },
            {
                role: 'system',
                content: 'Dont use css and javascript for this.Give the answer in such a form that it will look nice when saved in a file.'
            },
            { 
                role: 'user',
                content: 'Create a html code using text:' + generateIdea
            },
            {
                role: 'user',
                content: 'Suggest where the pictures should be. In appropriate place put img tags with alt atributs.Alt atributes let this be used to generate amazing images by you in the future.'
            },
            {
                role: 'user',
                content: 'Under images should be a description using html tags figure and figcaption'
            }
        ],
        model: 'gpt-4o-mini'
    });

    return response.choices[0];
};

module.exports = {
    generateHtmlFromOpenai
};
