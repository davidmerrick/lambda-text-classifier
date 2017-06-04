var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    version_date: NaturalLanguageUnderstandingV1.VERSION_DATE_2017_02_27
});

var params = {
    html: "The Fake News Media works hard at disparaging & demeaning my use of social media because they don't want America to hear the real story!",
    'features': {
        'sentiment': {},
        'categories': {}
    }
};

nlu.analyze(params, (error, response) => {
    if(error) {
        return console.error(`ERROR: ${error}`);
    }

    console.log(JSON.stringify(response, null, 2));
});
