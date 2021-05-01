var response = false;
var quotes = ['vivi'];
switch (q.toLowerCase()) {
    case 'vivi':
        response = '\'That is, that is my opinion. I am totally happy, I am totally happy to lose viewers if it means that they find someone they love and adore watching, I really mean that. 100% okay? 100%.\' - VividlyASMR. Find the full quote here: https://thetruedv.github.io/quotes?key=vivi';
        break;    
    default:
        response = 'Did you forget to filter? Try !quote vivi! Valid filters: ' + quotes.join(", ");
}


