
// TASK ZM:

// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
// o'girib (reverse) qilib qaytarmoqda.


function reverseInteger(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

console.log(reverseInteger(123456789)); 













// TASK-ZL:

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
