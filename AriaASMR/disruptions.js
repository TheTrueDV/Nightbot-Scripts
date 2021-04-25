var response = false;
var disruptionList = ['Mic', 'Luna'];
switch (q.toLowerCase()) {
    case 'mic':
        response = 'Aria is having audio troubles, plz wait and be patient til she finishes fighting with her mic';
        break;
    case 'luna':
        response = 'Aria is tending to Luna\'s needs. Please wait for a few minutes :D';
        break;    
    default:
        response = 'Did you forget to filter? Try !distrupt mic Valid filters: ' + disruptionList.join(", ");
}