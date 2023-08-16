/*
* Copyright
* Author: Rayhan Al Shorif
* Date: 19/07/2023
* Description: This file is used to generate margin top classes
*/

var styledBody = '';

// find all m- * Margin Top
var margins = document.querySelectorAll('[class*="m-"]');
margins.forEach((m) => {
    var marginClass = m.className.split(' ');
    marginClass.forEach((mClass) => {
        if (mClass.includes('m-[')) {
            const dotClassName = getDotClassName(mClass);
            const numberWithExtension = getNumberWithExtension(mClass);
            styledBody += `.${dotClassName} {margin: ${numberWithExtension}!important;}`;
        }
    });
});


// find all mx- * Margin Top
var marginLeftRights = document.querySelectorAll('[class*="mx-"]');
marginLeftRights.forEach((mx) => {
    var marginClass = mx.className.split(' ');
    marginClass.forEach((mxClass) => {
        if (mxClass.includes('mx-[')) {
            const dotClassName = getDotClassName(mxClass);
            const numberWithExtension = getNumberWithExtension(mxClass);
            styledBody += `.${dotClassName} {margin-left: ${numberWithExtension}!important;margin-right: ${numberWithExtension}!important;}`;
        }
    });
});

// find all my- * Margin Top and bottom
var marginTopBottoms = document.querySelectorAll('[class*="my-"]');
marginTopBottoms.forEach((my) => {
    var marginClass = my.className.split(' ');
    marginClass.forEach((myClass) => {
        if (myClass.includes('my-[')) {
            const dotClassName = getDotClassName(myClass);
            const numberWithExtension = getNumberWithExtension(myClass);
            styledBody += `.${dotClassName} {margin-top: ${numberWithExtension}!important;margin-bottom: ${numberWithExtension}!important;}`;
        }
    });
});

// find all mt- * Margin Top
var marginTops = document.querySelectorAll('[class*="mt-"]');
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

var marginBottoms = document.querySelectorAll('[class*="mb-"]');

marginBottoms.forEach((mb) => {
    var marginTopClass = mb.className.split(' ');
    marginTopClass.forEach((mbClass) => {
        if (mbClass.includes('mb-[')) {
            const dotClassName = getDotClassName(mbClass);
            const numberWithExtension = getNumberWithExtension(mbClass);
            styledBody += `.${dotClassName} {margin-bottom: ${numberWithExtension}!important;}`;
        }
    });
});

// find all ml- * Margin Bottom

var marginBottoms = document.querySelectorAll('[class*="ml-"]');

marginBottoms.forEach((ml) => {
    var marginTopClass = ml.className.split(' ');
    marginTopClass.forEach((mlClass) => {
        if (mlClass.includes('ml-[')) {
            const dotClassName = getDotClassName(mlClass);
            const numberWithExtension = getNumberWithExtension(mlClass);
            styledBody += `.${dotClassName} {margin-left: ${numberWithExtension}!important;}`;
        }
    });
});

// find all mr- * Margin Bottom

var marginBottoms = document.querySelectorAll('[class*="mr-"]');

marginBottoms.forEach((mr) => {
    var marginTopClass = mr.className.split(' ');
    marginTopClass.forEach((mrClass) => {
        if (mrClass.includes('mr-[')) {
            const dotClassName = getDotClassName(mrClass);
            const numberWithExtension = getNumberWithExtension(mrClass);
            styledBody += `.${dotClassName} {margin-right: ${numberWithExtension}!important;}`;
        }
    });
});





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

let styled = `<style type="text/css">${styledBody}</style>`;
document.querySelectorAll('head')[0].innerHTML += styled;