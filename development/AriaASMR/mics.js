var response = false;
var micList = ['3dio', 'zoom', 'yeti'];
switch (q.toLowerCase()) {
    case '3dio':
        response = 'Aria is currently using her Free Space Binaural, a mic from 3DIO. You can buy one here: '+
        '<insert link>';
        break;
    case 'yeti':
        response = 'Aria is currently using her Yeti, a mic from BlueMic. You can buy one here: '+
        '<insert link>';
        break;
    case 'zoom':
        response = 'Aria is currently using her H4n Pro Black, a mic from ZoomCorp. You can buy one from here: '+
        '<insert link>';
        break;
    default:
        response = 'Did you forget to filter? Try !mic 3dio! Valid filters: ' + micList.join(", ");
}