/*
* Copyright
* Author: Rayhan Al Shorif
* Date: 19/07/2023
* Description: This file is used to generate margin top classes
*/

styledBody = '';

// find all m- * Margin Top
var padding = document.querySelectorAll('[class*="p-"]');
padding.forEach((p) => {
    var paddingClass = p.className.split(' ');
    paddingClass.forEach((pClass) => {
        if (pClass.includes('p-[')) {
            const dotClassName = paddingGetDotClassName(pClass);
            const numberWithExtension = paddingGetNumberWithExtension(pClass);
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
            const dotClassName = paddingGetDotClassName(pxClass);
            const numberWithExtension = paddingGetNumberWithExtension(pxClass);
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
            const dotClassName = paddingGetDotClassName(pyClass);
            const numberWithExtension = paddingGetNumberWithExtension(pyClass);
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
            const dotClassName = paddingGetDotClassName(ptClass);
            const numberWithExtension = paddingGetNumberWithExtension(ptClass);
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
            const dotClassName = paddingGetDotClassName(pbClass);
            const numberWithExtension = paddingGetNumberWithExtension(pbClass);
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
            const dotClassName = paddingGetDotClassName(plClass);
            const numberWithExtension = paddingGetNumberWithExtension(plClass);
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
            const dotClassName = paddingGetDotClassName(prClass);
            const numberWithExtension = paddingGetNumberWithExtension(prClass);
            styledBody += `.${dotClassName} {padding-right: ${numberWithExtension}!important;}`;
        }
    });
});





function paddingGetDotClassName(className) {
    var classNameToArray = className.split("");
    var length = classNameToArray.length;
    classNameToArray.splice(3, 0, '\\[');
    classNameToArray.splice(length, 0, '\\]');
    var classNameToString = classNameToArray.join("");
    classNameToString = classNameToString.replace('\[', '');
    classNameToString = classNameToString.replace('\]', '');
    return classNameToString;
}

function paddingGetNumberWithExtension(className) {
    const classNameNumWithPx = className.split('-')[1];
    const classNameNum = paddingJustNumbers(classNameNumWithPx); // get only number
    const getExtensionWithBracket = classNameNumWithPx.replace(classNameNum, '');
    const getExtensionWithOutBracket = getExtensionWithBracket.replace(']', '');
    const getExt = getExtensionWithOutBracket.replace('[', '');
    return classNameNum + getExt;
}



function paddingJustNumbers(string) {
    var numsStr = string.replace(/[^0-9]/g, '');
    return parseInt(numsStr);
}

document.querySelectorAll('head')[0].innerHTML += `<style type="text/css">${styledBody}</style>`;