// TASK-ZT:

// Shunday function yozing, u parametridagi string ichida 1 martadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
// MASALAN: firstUniqueCharIndex(“stamp”) return 0

function firstUniqueCharIndex(s) {
	const charCount = {};

	for (let char of s) {
		charCount[char] = (charCount[char] || 0) + 1;
	}

	for (let i = 0; i < s.length; i++) {
		if (charCount[s[i]] === 1) {
			return i;
		}
	}

	return -1;
}
console.log(firstUniqueCharIndex('stamp'));
console.log(firstUniqueCharIndex('hello'));
console.log(firstUniqueCharIndex('aabbcc'));

// TASK-ZS:
// Shunday funktsiya yozing, u parametridagi arrayni ichida 1 marta kelgan elemnetni qaytarsin.
// MASALAN: singleNumber([4, 2, 1, 2, 1]) 4-ni qaytaradi

// function singleNumber(nums) {
// 	let count = {};

// 	for (let num of nums) {
// 		count[num] = (count[num] || 0) + 1;
// 	}

// 	for (let key in count) {
// 		if (count[key] === 1) return Number(key);
// 	}
// }

// console.log(singleNumber([4, 2, 1, 2, 1]));

// TASK-ZR:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

// function countNumberAndLetters(input) {
// 	let result = { number: 0, letter: 0 };

// 	for (let char of input) {
// 		if (/[0-9]/.test(char)) {
// 			result.number++;
// 		} else if (/[a-zA-Z]/.test(char)) {
// 			result.letter++;
// 		}
// 	}
// 	return result;
// }
// console.log(countNumberAndLetters('string152%\\¥'));

// TASK-ZQ:

// Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]

// function findDuplicates(arr) {
// 	const counts = {};

// 	for (const num of arr) {
// 		counts[num] = (counts[num] || 0) + 1;
// 	}

// 	const duplicates = [];
// 	for (const num in counts) {
// 		if (counts[num] === 2) {
// 			duplicates.push(parseInt(num));
// 		}
// 	}

// 	return duplicates;
// }

// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]));

// TASK-ZP:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

// function countNumberAndLetters(input) {
// 	let result = { number: 0, letter: 0 };

// 	for (let char of input) {
// 		if (/[0-9]/.test(char)) {
// 			result.number++;
// 		} else if (/[a-zA-Z]/.test(char)) {
// 			result.letter++;
// 		}
// 	}

// 	return result;
// }
// console.log(countNumberAndLetters('string152%\\¥'));

// TASK-ZO:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

// function areParenthesesBalanced(s) {
// 	let count = 0;
// 	for (let char of s) {
// 		if (char === '(') {
// 			count++;
// 		} else if (char === ')') {
// 			count--;
// 		}
// 		if (count < 0) {
// 			return false;
// 		}
// 	}
// 	return count === 0;
// }

// console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda')); // true
// console.log(areParenthesesBalanced('((test))')); // true
// console.log(areParenthesesBalanced('(test')); // false
// console.log(areParenthesesBalanced('test)')); // false

// TASK-ZN:

// Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

// function rotateArray(arr, num) {
// 	if (!Array.isArray(arr) || typeof num !== 'number') {
// 		throw new Error('Invalid input');
// 	}
// 	let len = arr.length;
// 	let rotateIndex = len - num;
// 	return arr.slice(rotateIndex).concat(arr.slice(0, rotateIndex));
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));

// TASK ZM:

// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
// o'girib (reverse) qilib qaytarmoqda.

// function reverseInteger(num) {
//     return parseInt(num.toString().split('').reverse().join(''), 10);
// }

// console.log(reverseInteger(123456789));

//** TASK-ZL:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

// function stringToKebab(str) {
// 	return str
// 		.toLowerCase()
// 		.replace(/[^a-z0-9]+/g, '-')
// 		.replace(/^-+|-+$/g, '');
// }

// console.log(stringToKebab('I love Kebab'));

// TASK-ZK:

// Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

// function printNumbers() {
//     let num = 1;
//     const interval = setInterval(() => {
//         console.log(num);
//         num++;
//         if (num > 5) {
//             num = 1;
//         }
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log("Process stopped");
//     }, 5000);
// }

// printNumbers();
