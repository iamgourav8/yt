var id = link.slice(charAt(20), link.lenth)
videoUrlLink.youtube.getInfo('https://youtu.be/' + id, {
    hl: 'en'
}, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log(info.details);
        console.log(info.formats);
    }
});