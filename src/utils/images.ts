const generateSrcset = (sizes: number[], url: string) =>
  sizes.map((size) => `${url}?tr=w-${size} ${size}w`).join(", ");

export { generateSrcset };
