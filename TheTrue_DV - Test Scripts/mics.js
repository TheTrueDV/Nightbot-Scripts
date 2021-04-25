var response = false;
var micList = ['ASMR', 'Just Chatting'];
switch (q.toLowerCase()) {
    case 'asmr':
        response = 'Aria is currently using her 3DIO';
        break;
    case 'just chatting':
        response = 'Aria is currently using her Blue Yeti';
        break;
    default:
        response = 'Did you forget to filter? Try !mic ASMR! Valid filters: ' + micList.join(", ");
}