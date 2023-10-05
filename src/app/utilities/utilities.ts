export function isHtml(input: string): boolean {
  const regexHtmlValidation = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/;
  return regexHtmlValidation.test(input);
}

// export function dataHasSameKeyValues(data: Array<object>): boolean {
//   if (data.length === 0 || data === undefined) return false;

//   const refObject = data[0];

//   for (const key in refObject) {
//     if (refObject.hasOwnProperty(key)) {
//       for (let i = 1;)
//     }
//   }

// }
