var response = false;
var creditList = ['Yeti', 'Commands'];
switch ('$q'.toString().toLowerCase()) {
    case 'yeti':
        response = 'Check out the adorable Kopi at https://twitter.com/Kopintea';
        break;
    case 'commands':
        response = 'Check out the nerdy True at https://twitter.com/TheTrue_DV';
        break;
    default:
        response = 'Did you forget to filter? Try !credit Commands! Valid filters: ' + creditList.join(", ").toLowerCase();
}