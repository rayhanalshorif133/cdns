/*
* Copyright
* Author: Rayhan Al Shorif
* Date: 19/07/2023
* Description: This file is used to generate margin top classes
*/

var styledBody = '';
// find all mt- * Margin Top
var marginTops = document.querySelectorAll('[class^="mt-"]');
marginTops.forEach((mt) => {
    var marginTopClass = mt.className.split(' ');
    marginTopClass.forEach((mtClass) => {
        if (mtClass.includes('mt-[')) {
            const dotClassName = getDotClassName(mtClass);
            const numberWithExtension = getNumberWithExtension(mtClass);
            styledBody += `.${dotClassName} {margin-top: ${numberWithExtension}!important;}`;
        }
    });
});

// find all mb- * Margin Bottom



function getDotClassName(mtClass) {
    var mtClassToArray = mtClass.split("");
    var length = mtClassToArray.length;
    mtClassToArray.splice(3, 0, '\\[');
    mtClassToArray.splice(length, 0, '\\]');
    var mtClassToString = mtClassToArray.join("");
    mtClassToString = mtClassToString.replace('\[', '');
    mtClassToString = mtClassToString.replace('\]', '');
    return mtClassToString;
}

function getNumberWithExtension(mtClass) {
    const mtClassNumWithPx = mtClass.split('-')[1];
    const mtClassNum = justNumbers(mtClassNumWithPx); // get only number
    const getExtensionWithBracket = mtClassNumWithPx.replace(mtClassNum, '');
    const getExtensionWithOutBracket = getExtensionWithBracket.replace(']', '');
    const getExt = getExtensionWithOutBracket.replace('[', '');
    return mtClassNum + getExt;
}



function justNumbers(string) {
    var numsStr = string.replace(/[^0-9]/g, '');
    return parseInt(numsStr);
}


console.log(styledBody);
const styled = `<style type="text/css">${styledBody}</style>`;
$('head').append(styled);