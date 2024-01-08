/**
 * カンマ区切りの文字列を数値に変換します
 */
export const commaToNum = (str: string) => {
  const noCommaStr = str.replaceAll(",", ""); // 1つめのカンマのみが置換される replace() では数値比較ができないため replaceAll() に変更
  return Number(noCommaStr);
};
