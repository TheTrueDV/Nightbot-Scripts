var response = false;
var friendList = ['sero', 'arkhand', 'rainty', 'rhea', 'rin', 'vivi', 'aru', 'snugsbun', 'bubbly', 'lemonleaf', 'vtubertalk'];
switch (q.toLowerCase()) {
    case 'sero':
        response = 'The OG wife, the former IRL roommate, the one who dragged me into virtual hell. Give their all the love @ www.twitch.tv/serotina. Check out their carrd to find their other socials: serotina.carrd.co';
        break;
    case 'arkhand':
        response = 'Check out arkhand @ www.twitch.tv/the_arkhand + Check out their linktr to find all their socials: https://linktr.ee/arkhand';
        break;
    case 'rainty':
        response = 'The only sane former roommate, artist, gamer. Rainty is in pre-debut so please send them all the love and support @ www.twitch.tv/raintyqq + Check out their twitter to find their other socials: twitter.com/raintyQQ';
        break;
    case 'rhea':
        response = 'The poor taskmaster who has to keep the combined chaos of rin and aria under control. Rhea is predebut and deserves all the love and ATTENTION @ www.twitch.tv/rheavt + Check out their twitter to find their other socials: twitter.com/lavenderhea';
        break;
    case 'rin':
        response = 'My sweet, chaotic mess witch twin. Love them to bits. Find their @ www.twitch.tv/rindouko + Check out their twitter to find their other socials: twitter.com/rindouko';
        break;
    case 'vivi':
        response = 'Check out Vivi @ www.twitch.tv/vividlyasmr + Check out their twitter to find their other socials: twitter.com/vividlyASMR';
        break;
    case 'aru':
        response = 'Check out ARu @ www.twitch.tv/autotuneready + Check out their twitter as well: twitter.com/AutotuneReady';
        break;
    case 'snugsbun':
        response = 'Check out Snugsbun @ www.twitch.tv/snugsbunasmr + Check out their twitter to find their other socials: twitter.com/Snugsbun';
        break;
    case 'bubbly':
        response = 'Check out Bubbly @ www.twitch.tv/bubblybunnana + Check out their twitter to find their other socials: twitter.com/BubblyBunnana';
        break;
    case 'lemonleaf':
        response = 'Check out Lemonleaf @ www.twitch.tv/lemonleaf + Check out their twiiter to find their other socials: https://twitter.com/LemonLeafASMR';
        break;
    case 'vtubertalk':
        response = 'Vtuber Talk interviews Vtubers every week! Check them out  @ http://twitch.tv/VtuberTalk + Check out their twitter to find their other socials: https://twitter.com/VtuberTalk';
        break;
    case 'friends':
    response = 'Here is a list of friends currently added: ' + friendList.join(", ");
        break;
    default:
        response = 'Please go check out twitch.tv/'+tu+'! They were last streaming '+g+'! ♡';
}