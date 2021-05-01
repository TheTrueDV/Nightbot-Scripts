var response = false;
var micList = ['3dio', 'zoom', 'yeti'];
switch (q.toLowerCase()) {
    case '3dio':
        response = 'Aria is currently using her 3DIO. You can buy one here: +'
        'https://3diosound.com/products/free-space-binaural-microphone';
        break;
    case 'yeti':
        response = 'Aria is currently using her Yeti, a mic from Bluemic. You can buy one here: +'
        'https://www.bluemic.com/en-gb/products/yeti/';
        break;
    case 'zoom':
        response = 'Aria is currently using her H4n Pro Black, a mic from Zoomcorp. You can buy one from here: '+
        '<insert link>';
        break;
    default:
        response = 'Did you forget to filter? Try !mic 3dio! Valid filters: ' + micList.join(", ");
}