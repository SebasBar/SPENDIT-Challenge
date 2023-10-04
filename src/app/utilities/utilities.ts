export function isHtml(input: string): boolean {
  const regexHtmlValidation = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/;
  return regexHtmlValidation.test(input);
}
