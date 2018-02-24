export default class QuestionParser {
  static parser(url, data)
  {
    var returnObj = {};
    if (url.indexOf("/mc_meaning") !== -1 || url.indexOf("/mc_word") !== -1)
    {
      returnObj.a = data.a;
      returnObj.b = data.b;
      returnObj.c = data.c;
      returnObj.d = data.d;
      if (url.indexOf("/mc_meaning") !== -1)
        returnObj.question = "What is the meaning of " + data.question;
      else
        returnObj.question = "What is the word for " + data.question;
      returnObj.answer = data.answer;
      switch(parseInt(data.answer))
      {
        case 0:
          returnObj.correct_answer = returnObj.a;
          break;
        case 1:
          returnObj.correct_answer = returnObj.b;
          break;
        case 2:
          returnObj.correct_answer = returnObj.c;
          break;
        case 3:
          returnObj.correct_answer = returnObj.d;
          break;
      }
    }
    else if (url.indexOf("/spelling") !== -1)
    {
      returnObj.question = "What is the spelling of " + data.question;
      returnObj.answer = data.answer;
    }
    else if (url.indexOf("/short_q") !== -1)
    {
      returnObj.question = "What is the word for " + data.meaning;
      returnObj.answer = data.vocab;
    }
    else if (url.indexOf("/verb") !== -1)
    {
      var form = data.question.split("_").join(" ");
      returnObj.question = "What is " + form + " form of " + data.verb;
      returnObj.answer = data.answer;
      returnObj.meaning = data.meaning;
    }
    else if (url.indexOf("/adjective") !== -1)
    {
      var form = data.question.split("_").join(" ");
      returnObj.question = "What is " + form + " form of " + data.adjective;
      returnObj.answer = data.answer;
      returnObj.meaning = data.meaning;
    }
    return returnObj;
    /*
    case 0:
          return url + "/question/vocab/year/0/mc_meaning";
        case 1:
          return url + "/question/vocab/year/0/mc_word";
        case 2:
          return url + "/question/kanji/year/0/mc_word";
        case 3:
          return url + "/question/kanji/year/0/mc_meaning";
        case 4:
          return url + "/question/kanji/year/0/spelling";
        case 5:
          return url + "/question/vocab/year/0/short_q";
        case 6:
          return url + "/question/verb/year/0";
        case 7:
          return url + "/question/adjective/year/0";
          */
  }
}