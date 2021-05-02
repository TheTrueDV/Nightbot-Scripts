var response = false;
var friendList = ['sero', 'arkhand', 'rainty', 'rhea', 'rin', 'vivi', 'aru', 'snugsbun', 'bubbly', 'lemonleaf', 'vtubertalk'];
switch (q.toLowerCase()) {
    case 'sero':
        response = 'the OG wife, the former IRL roommate, the one who dragged me into virtual hell. Give her all the love @ www.twitch.tv/serotina. Check out her carrd to find her other socials: serotina.carrd.co';
        break;
    case 'arkhand':
        response = 'Check out arkhand @ www.twitch.tv/the_arkhand + Check out her twitter to find her other socials: twitter.com/vividlyASMR';
        break;
    case 'rainty':
        response = 'the only sane former roommate, artist, gamer. Rainty is in pre-debut so please send her all the love and support. https://twitter.com/raintyQQ @ www.twitch.tv/raintyqq + Check out her twitter to find her other socials: twitter.com/raintyQQ';
        break;
    case 'rhea':
        response = 'the poor taskmaster who has to keep the combined chaos of rin and aria under control. Rhea is predebut and deserves all the love and ATTENTION @ www.twitch.tv/rheavt + Check out her twitter to find her other socials: twitter.com/lavenderhea';
        break;
    case 'rin':
        response = 'My sweet, chaotic mess witch twin. Love her to bits. Find her @ www.twitch.tv/rindouko + Check out her twitter to find her other socials: twitter.com/rindouko';
        break;
    case 'vivi':
        response = 'Check out Vivi @ www.twitch.tv/vividlyasmr + Check out her twitter to find her other socials: twitter.com/vividlyASMR';
        break;
    case 'aru':
        response = 'Check out ARu @ www.twitch.tv/autotuneready + Check out her twitter as well: twitter.com/AutotuneReady';
        break;
    case 'snugsbun':
        response = 'Check out Snug @ www.twitch.tv/snugsbunasmr + Check out her twitter to find her other socials: twitter.com/Snugsbun';
        break;
    case 'bubbly':
        response = 'Check out Bubbly @ www.twitch.tv/bubblybunnana + Check out her twitter to find her other socials: twitter.com/BubblyBunnana';
        break;
    case 'lemonleaf':
        response = 'Check out lemonleaf @ www.twitch.tv/lemonleaf + Check out her twiiter to find her other socials: https://twitter.com/LemonLeafASMR';
        break;
    case 'vtubertalk':
        response = 'Vtuber Talk interviews Vtubers every week! Check them out  @ http://twitch.tv/VtuberTalk + Check out his twitter to find his other socials: https://twitter.com/VtuberTalk';
        break;
    case 'friends':
    response = 'Here are a list of friends currently added: ' + friendList.join(", ");
        break;
    default:
        response = 'Please go check out twitch.tv/'+tu+'! They were last streaming '+g+'! ♡';
}