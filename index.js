const links = {
    link1: 'https://www.google.com',
    link2: '',
    link3: '',
    link4: '',
    link5: '',
    link6: '',
}


window.addEventListener('DOMContentLoaded', () => {
    function gotoLink(link = '') {
        if (link) window.open(links.link1, '_blank');
        return 'no link to go to'
    }
    document.getElementById('link1').addEventListener
    
});
