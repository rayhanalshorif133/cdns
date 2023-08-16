/*
* Copyright
* Author: Rayhan Al Shorif
* Date: 12/08/2023
* Description: This file is used to generate color
*/

styledBody = '';

// find all text- * color
var texts = document.querySelectorAll('[class*="text-"]');
texts.forEach((text) => {
    var getText = text.className.split(' ');
    getText.forEach((tClass) => {

        if (tClass.includes('text-[#')) {
            const dotClassName = textGetColorClassName(tClass);
            const colorHexName = getTextColor(tClass);
            styledBody += `.${dotClassName} {color: ${colorHexName}!important;}`;
        } else if (tClass.includes('text-[')) {
            const dotClassName = textGetDotClassName(tClass);
            const numberWithExtension = textGetNumberWithExtension(tClass);
            styledBody += `.${dotClassName} {font-size: ${numberWithExtension}!important;}`;
        }
    });
});


function getTextColor(className) {
    var classNameToArray = className.split("");
    var length = classNameToArray.length;
    var index = classNameToArray.indexOf('#');
    var hex = classNameToArray.splice(index, length);
    var classNameToString = hex.join("");
    classNameToString = classNameToString.replace(']', '');
    const hexToRGBColor = hexToRGB(classNameToString);
    return hexToRGBColor;
}



function textGetColorClassName(className) {
    var classNameToArray = className.split("");
    var length = classNameToArray.length;
    classNameToArray.splice(5, 0, '\\[');
    classNameToArray.splice(length, 0, '\\]');
    var classNameToString = classNameToArray.join("");
    classNameToString = classNameToString.replace('[', '');
    classNameToString = classNameToString.replace('[', '[\\');
    classNameToString = classNameToString.replace('\]', '');

    return classNameToString;
}

function textGetDotClassName(className) {
    var classNameToArray = className.split("");
    var length = classNameToArray.length;
    classNameToArray.splice(5, 0, '\\[');
    classNameToArray.splice(length, 0, '\\]');
    var classNameToString = classNameToArray.join("");
    classNameToString = classNameToString.replace('\[', '');
    classNameToString = classNameToString.replace('\]', '');
    return classNameToString;
}


function hexToRGB(hex, alpha = 1) {

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    console.log(r, g, b);

    if (alpha) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else {
        return `rgb(${r}, ${g}, ${b})`;
    }
}

function textGetNumberWithExtension(className) {
    const classNameNumWithPx = className.split('-')[1];
    const classNameNum = textJustNumbers(classNameNumWithPx); // get only number
    const getExtensionWithBracket = classNameNumWithPx.replace(classNameNum, '');
    const getExtensionWithOutBracket = getExtensionWithBracket.replace(']', '');
    const getExt = getExtensionWithOutBracket.replace('[', '');
    return classNameNum + getExt;
}

function textJustNumbers(string) {
    var numsStr = string.replace(/[^0-9]/g, '');
    return parseInt(numsStr);
}

document.querySelectorAll('head')[0].innerHTML += `<style type="text/css">${styledBody}</style>`;

