export const getFontFamily = (baseFont = 'Inter', weight) => {
  switch (weight) {
    case '100':
      return `${baseFont}_24pt-Thin`;
    case '200':
      return `${baseFont}_24pt-ExtraLight`;
    case '300':
      return `${baseFont}_24pt-Light`;
    case '400':
      return `${baseFont}_24pt-Reguler`;
    case '500':
      return `${baseFont}_24pt-Medium`;
    case '600':
      return `${baseFont}_24pt-Bold`;
    case '700':
      return `${baseFont}_24pt-ExtraBold`;
    case '800':
      return `${baseFont}_24pt-Black`;
    default:
      return `${baseFont}_24pt-Regular`;
  }
};
