export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
  // .then(() => {
  //   console.log("Текст успешно скопирован в буфер обмена:", text);
  // })
  // .catch((err) => {
  //   console.error("Ошибка при копировании текста:", err);
  // });
}
