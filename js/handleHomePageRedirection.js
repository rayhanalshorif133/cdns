const handleHomePageRedirection = () => {
    const currentLocation = window.location.href;
    const pageIndex = currentLocation.indexOf('github');
    if(pageIndex !== -1) {
        $('.cdnHome').attr('href', '/cdns/');
    }else{
        $('.cdnHome').attr('href', '/');
    }
};

export default handleHomePageRedirection;