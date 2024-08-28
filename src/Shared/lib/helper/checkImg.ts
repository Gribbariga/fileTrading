export const checkImg = (file: File) => {
  const validImageTypes: string[] = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/svg+xml",
  ];
  const validExtensions: string[] = [".jpg", ".jpeg", ".png", ".gif", ".svg"];

  const extension: string = file.name.slice(
    ((file.name.lastIndexOf(".") - 1) >>> 0) + 2
  );

  return (
    validImageTypes.includes(file.type) ||
    validExtensions.includes(`.${extension.toLowerCase()}`)
  );
};
