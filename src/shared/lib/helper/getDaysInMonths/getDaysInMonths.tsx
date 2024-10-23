export function getDaysInMonths(months: number) {
  let days = 0;

  for (let i = 0; i < months; i++) {
    // Используем объект Date для определения количества дней в месяце
    const monthIndex = i % 12; // Месяцы от 0 до 11
    const year = new Date().getFullYear(); // Текущий год (можно заменить на нужный)
    days += new Date(year, monthIndex + 1, 0).getDate(); // Переходим к следующему месяцу и получаем количество дней в текущем месяце
  }

  return days;
}
