export function isHtml(input: string): boolean {
  const regexHtmlValidation = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/;
  return regexHtmlValidation.test(input);
}

export function isAllElementNotFalse(rows: Array<object | false>): boolean {
  for (let i = 0; i < rows.length; i++) {
    if (rows[i] === false) {
      return false;
    }
  }
  return true;
}
