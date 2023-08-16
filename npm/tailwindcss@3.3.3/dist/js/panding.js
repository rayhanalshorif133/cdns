/*
* Copyright
* Author: Rayhan Al Shorif
* Date: 19/07/2023
* Description: This file is used to generate margin top classes
*/

var styledBody = '';

// find all m- * Margin Top
var padding = document.querySelectorAll('[class*="p-"]');
padding.forEach((p) => {
    var paddingClass = p.className.split(' ');
    paddingClass.forEach((pClass) => {
        if (pClass.includes('p-[')) {
            const dotClassName = getDotClassName(pClass);
            const numberWithExtension = getNumberWithExtension(pClass);
            styledBody += `.${dotClassName} {padding: ${numberWithExtension}!important;}`;
        }
    });
});


// find all px- * Margin Top
var paddingLeftRights = document.querySelectorAll('[class*="px-"]');
paddingLeftRights.forEach((px) => {
    var paddingClass = px.className.split(' ');
    paddingClass.forEach((pxClass) => {
        if (pxClass.includes('px-[')) {
            const dotClassName = getDotClassName(pxClass);
            const numberWithExtension = getNumberWithExtension(pxClass);
            styledBody += `.${dotClassName} {padding-left: ${numberWithExtension}!important;padding-right: ${numberWithExtension}!important;}`;
        }
    });
});

// find all py- * Padding Top and bottom
var paddingTopBottoms = document.querySelectorAll('[class*="py-"]');
paddingTopBottoms.forEach((py) => {
    var marginClass = py.className.split(' ');
    marginClass.forEach((pyClass) => {
        if (pyClass.includes('py-[')) {
            const dotClassName = getDotClassName(pyClass);
            const numberWithExtension = getNumberWithExtension(pyClass);
            styledBody += `.${dotClassName} {padding-top: ${numberWithExtension}!important;padding-bottom: ${numberWithExtension}!important;}`;
        }
    });
});

// find all pt- * Padding Top
var paddingTops = document.querySelectorAll('[class*="pt-"]');
paddingTops.forEach((pt) => {
    var paddingTopClass = pt.className.split(' ');
    paddingTopClass.forEach((ptClass) => {
        if (ptClass.includes('pt-[')) {
            const dotClassName = getDotClassName(ptClass);
            const numberWithExtension = getNumberWithExtension(ptClass);
            styledBody += `.${dotClassName} {padding-top: ${numberWithExtension}!important;}`;
        }
    });
});

// find all pb- * Padding Bottom

var paddingBottoms = document.querySelectorAll('[class*="pb-"]');

paddingBottoms.forEach((pb) => {
    var paddingTopClass = pb.className.split(' ');
    paddingTopClass.forEach((pbClass) => {
        if (pbClass.includes('pb-[')) {
            const dotClassName = getDotClassName(pbClass);
            const numberWithExtension = getNumberWithExtension(pbClass);
            styledBody += `.${dotClassName} {padding-bottom: ${numberWithExtension}!important;}`;
        }
    });
});

// find all ml- * padding Bottom

var paddingBottoms = document.querySelectorAll('[class*="pl-"]');

paddingBottoms.forEach((pl) => {
    var paddingTopClass = pl.className.split(' ');
    paddingTopClass.forEach((plClass) => {
        if (plClass.includes('pl-[')) {
            const dotClassName = getDotClassName(plClass);
            const numberWithExtension = getNumberWithExtension(plClass);
            styledBody += `.${dotClassName} {padding-left: ${numberWithExtension}!important;}`;
        }
    });
});

// find all mr- * Padding Bottom

var paddingRights = document.querySelectorAll('[class*="pr-"]');

paddingRights.forEach((pr) => {
    var paddingRightClass = pr.className.split(' ');
    paddingRightClass.forEach((prClass) => {
        if (prClass.includes('pr-[')) {
            const dotClassName = getDotClassName(prClass);
            const numberWithExtension = getNumberWithExtension(prClass);
            styledBody += `.${dotClassName} {padding-right: ${numberWithExtension}!important;}`;
        }
    });
});





function getDotClassName(className) {
    var classNameToArray = className.split("");
    var length = classNameToArray.length;
    classNameToArray.splice(3, 0, '\\[');
    classNameToArray.splice(length, 0, '\\]');
    var classNameToString = classNameToArray.join("");
    classNameToString = classNameToString.replace('\[', '');
    classNameToString = classNameToString.replace('\]', '');
    return classNameToString;
}

function getNumberWithExtension(className) {
    const classNameNumWithPx = className.split('-')[1];
    const classNameNum = justNumbers(classNameNumWithPx); // get only number
    const getExtensionWithBracket = classNameNumWithPx.replace(classNameNum, '');
    const getExtensionWithOutBracket = getExtensionWithBracket.replace(']', '');
    const getExt = getExtensionWithOutBracket.replace('[', '');
    return classNameNum + getExt;
}



function justNumbers(string) {
    var numsStr = string.replace(/[^0-9]/g, '');
    return parseInt(numsStr);
}

let styled = `<style type="text/css">${styledBody}</style>`;
document.querySelectorAll('head')[0].innerHTML += styled;