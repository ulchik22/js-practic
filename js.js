let numbers = [0, 5, 10, -3, 7, 12, 2, 9, -1];
for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] < 10) {
        console.log(numbers[i]);
    }
}

console.log(`Задание 19`)
let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
for (let i = 0; i < daysOfWeek.length; i++) {
    if (i === 5 || i === 6) {
    } else {
        console.log(daysOfWeek[i]);
    }
}