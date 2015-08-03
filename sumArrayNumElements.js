'use strict';

var dZlibs = dZlibs || {};

/**
 * Suma todos los elementos de un array numerico y devuelve el resultado.
 * Antes comprueba que los elementos del array son todos numeros
 * Los indices que no sean numericos son saltados y no se tienen en cuenta
 *
 * @param  {Array} arr El array que quiere sumarse
 * @return {Number}     Suma total de los numeros del array
 */
dZlibs.sumArrayNumElements = function(arr) {
	var result = 0,
		arrLen = arr.length,
		elem
	;

	arr.forEach(function(elem) {
		if(typeof elem !== 'number') {
			console.log('"' + (typeof elem) + '"' + ' is not a number.');
		} else {
			result += elem;
		}
	});

	return result;
};

/**
 * Same as above
 * @param  {Array} arr
 * @return {Number}
 */
dZlibs.sumElementsInArray = function(arr) {

	var result = arr.reduce(function(prevVal, currentVal) {

		if (typeof currentVal === 'number') {
			return prevVal + currentVal;
		} else {
			console.warn('Current element is not a Number: ', currentVal);
			return prevVal;
		}
	});

	return result;
};