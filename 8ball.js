//  Positive
var positiveOutcome1="It is certain.";
var positiveOutcome2="It is decidedly so.";
var positiveOutcome3="Without a doubt.";
var positiveOutcome4="Yes – definitely.";
var positiveOutcome5="You may rely on it.";
var positiveOutcome6="As I see it, yes.";
var positiveOutcome7="Most likely.";
var positiveOutcome8="Outlook good.";
var positiveOutcome9="Yes.";
var positiveOutcome10="Signs point to yes.";
//  Non-Committal
var neutralOutcome1="Reply hazy, try again.";
var neutralOutcome2="Ask again later.";
var neutralOutcome3="Better not tell you now.";
var neutralOutcome4="Cannot predict now.";
var neutralOutcome5="Concentrate and ask again.";
// Negative
var negativeOutcome1="Don't count on it.";
var negativeOutcome2="My reply is no.";
var negativeOutcome3="My sources say no.";
var negativeOutcome4="Outlook not so good.";
var negativeOutcome5="Very doubtful.";

var randomMessage = [positiveOutcome1,positiveOutcome2, positiveOutcome3, positiveOutcome4, positiveOutcome5, positiveOutcome6, positiveOutcome7, positiveOutcome8, positiveOutcome9, positiveOutcome10, neutralOutcome1, neutralOutcome2, neutralOutcome3, neutralOutcome4, neutralOutcome5, negativeOutcome1, negativeOutcome2, negativeOutcome3, negativeOutcome4, negativeOutcome5];

var random_key = Math.floor(Math.random() * 19-0) + 0;
print(randomMessage[random_key]);
