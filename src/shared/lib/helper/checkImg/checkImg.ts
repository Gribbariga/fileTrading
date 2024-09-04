export const checkImg = (name: string) => {
  // const validImageTypes: string[] = [
  //   "image/jpeg",
  //   "image/png",
  //   "image/gif",
  //   "image/svg+xml",
  // ];
  const validExtensions: string[] = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".svg",
    ".webp",
    ".tiff",
    ".heif",
    ".heic",
    ".raw",
    ".eps",
    ".avif",
  ];

  const extension: string = name.slice(((name.lastIndexOf(".") - 1) >>> 0) + 2);

  return validExtensions.includes(`.${extension.toLowerCase()}`);
};
