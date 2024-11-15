require('dotenv').config();
const fs = require('fs');

const { generateHtmlFromOpenai } = require('./services/openaiSvc');

const main = async () => {
    console.log("Read file with article");
    const articleText = fs.readFileSync("articleText.txt", "utf8");
    
    console.log("Start generated");
    const generatedFromAi = await generateHtmlFromOpenai(articleText);
    console.log("Ended generated");

    fs.writeFileSync("artykul.html", generatedFromAi.message.content);
    console.log("HTML is generated");
};

main().catch(e => {
    console.log(e);
    process.exit(1);
});
