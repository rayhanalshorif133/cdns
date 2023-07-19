var styledBody = '';
styledBody += 'body {background-color: #000;text-align: center;color: #fff;font-family: sans-serif;font-size: 1.5em;}';

// find all mt-
var mt = document.querySelectorAll('[class^="mt-"]');
mt.forEach((el) => {
    var mtClass = el.className;
    var mtClassArr = mtClass.split(' ');
    mtClassArr.forEach((mtClass) => {
        if (mtClass.includes('mt-')) {
            var mtClassToArray = mtClass.split("");
            mtClassToArray.splice(3, 0, '\\[');
            mtClassToArray.splice(10, 0, '\\]');
            var mtClassToString = mtClassToArray.join("");
            mtClassToString = mtClassToString.replace('\[', '');
            mtClassToString = mtClassToString.replace('\]', '');
            const mtClassNumWithPx = mtClass.split('-')[1];
            const mtClassNum = justNumbers(mtClassNumWithPx); // get only number
            const getExtensionWithBracket = mtClassNumWithPx.replace(mtClassNum, '');
            const getExtensionWithOutBracket = getExtensionWithBracket.replace(']', '');
            const getExtension = getExtensionWithOutBracket.replace('[', '');
            styledBody += `.${mtClassToString} {margin-top: ${mtClassNum}${getExtension};}`;
        }
    });
});

function justNumbers(string) {
    var numsStr = string.replace(/[^0-9]/g, '');
    return parseInt(numsStr);
}

const styled = `<style type="text/css">${styledBody}</style>`;
$('head').append(styled);