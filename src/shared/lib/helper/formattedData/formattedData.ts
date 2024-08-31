export const formattedData = (dateString: string) => {
  // Преобразуем строку в объект Date
  const date = new Date(dateString.replace(" ", "T"));

  // Получаем день, месяц и год
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
  const year = date.getFullYear();

  // Форматируем дату в нужный формат
  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
};
