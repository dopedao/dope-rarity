import type { ColorFn } from "./types";

import { rarityColor, rarityDescription } from "./main";

const SVG_START =
  '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">' +
  '<style type="text/css">' +
  '@font-face {' +
  'font-family: "ChiKareGo2";' +
  'src: url(data:application/font-woff;base64,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);' +
  '}' +
  '</style>' +
  '<style>' +
  'text { font-family: "ChiKareGo2"; font-size: 16px; }' +
  '</style>' +
  '<rect width="100%" height="100%" fill="black" />' +
  '<rect x="5" y="5" width="340" height="340" style="stroke:white; stroke-width:1;" />' +
  '<rect x="5" y="7" width="340" height="36" style="stroke:white; stroke-width:1;" />' +
  '<rect x="5" y="45" width="340" height="299" style="stroke:white; stroke-width:1;" />' +
  '<text x="123" y="30" fill="#AF87D7">DOPE WARS LOOT</text>' +
  '<text x="77" y="30" fill="#00AFAF">* * *</text>' +
  '<text x="235" y="30" fill="#00AFAF">* * *</text>' +
  '<text x="75" y="70" fill="#808080" font-size="8px" text-anchor="end">Clothes</text>' +
  '<text x="75" y="101" fill="#808080" font-size="8px" text-anchor="end">Shoes</text>' +
  '<text x="75" y="132" fill="#808080" font-size="8px" text-anchor="end">Hands</text>' +
  '<text x="75" y="163" fill="#808080" font-size="8px" text-anchor="end">Neck</text>' +
  '<text x="75" y="194" fill="#808080" font-size="8px" text-anchor="end">Ring</text>' +
  '<text x="75" y="225" fill="#808080" font-size="8px" text-anchor="end">Wait</text>' +
  '<text x="75" y="256" fill="#808080" font-size="8px" text-anchor="end">Weapon</text>' +
  '<text x="75" y="287" fill="#808080" font-size="8px" text-anchor="end">Drugs</text>' +
  '<text x="75" y="318" fill="#808080" font-size="8px" text-anchor="end">Vehicle</text>';
const SVG_END = "</svg>";

export function svgFromItems(
  items: string[],
  {
    colorFn,
    displayLevels = false,
  }: {
    colorFn?: ColorFn;
    displayLevels?: boolean;
  } = {}
) {
  if (items.length !== 9) {
    throw new Error("A bag should contain exactly 9 items");
  }

  let svg = SVG_START;
  let index = 0;
  while (items.length) {
    const item = items.shift()

    const level = displayLevels
      ? ` (${rarityDescription(item).slice(0, 1)})`
      : "";
    const color = rarityColor(item, { colorFn });

    const yOffset = 39 + (31 * (index + 1))
    if (item[0] === `"`) {
      const offset = item.substr(1).indexOf('"') + 2
      svg += (
        `<text x="85" y="${yOffset}" fill="#FFAF00">` + item.substr(0, offset) + `</text>`
      );
      svg += (
        `<text x="85" y="${yOffset + 15}" fill="${color}">` + item.substr(offset) + level + `</text>`
      );
    } else {
      svg += (
        `<text x="85" y="${yOffset}" fill="${color}">` + item + level + `</text>`
      );
    }

    index++
  }

  return svg + SVG_END
}

export function svgDataUri(svg: string): string {
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

const MATCH_TEXT_RE = /<text[^>]+\>([^<]+)<\/text>/;

export function itemsFromSvg(svg: string) {
  if (!svg.startsWith("<svg")) {
    throw new Error("The svg paramater doesn’t seem to be an SVG");
  }

  let matches: null | string[];
  const items = [];
  for (let i = 0; i < 9; i++) {
    matches = svg.match(MATCH_TEXT_RE);
    if (!matches) {
      throw new Error(
        "Error when parsing the SVG: couldn’t find the next item"
      );
    }
    items.push(matches[1]);
    svg = svg.slice(svg.indexOf(matches[0]) + matches[0].length);
  }
  return items;
}

export function isUri(data: string) {
  return /^(?:https?|data)\:/.test(data);
}

export function rarityImageFromItems(
  items: string[],
  {
    colorFn,
    displayLevels = false,
  }: { colorFn?: ColorFn; displayLevels?: boolean } = {}
): string {
  return svgDataUri(svgFromItems(items, { colorFn, displayLevels }));
}

export async function rarityImage(
  svgOrSvgUriOrItems: string | string[],
  {
    colorFn,
    displayLevels = false,
  }: { colorFn?: ColorFn; displayLevels?: boolean } = {}
): Promise<string> {
  if (Array.isArray(svgOrSvgUriOrItems)) {
    return rarityImageFromItems(svgOrSvgUriOrItems);
  }

  const svg = isUri(svgOrSvgUriOrItems)
    ? await fetch(svgOrSvgUriOrItems).then((res) => res.text())
    : svgOrSvgUriOrItems;

  if (!svg.startsWith("<svg")) {
    throw new Error(
      "The resource doesn’t seem to be an SVG or a URL pointing to an SVG"
    );
  }

  return rarityImageFromItems(itemsFromSvg(svg), { colorFn, displayLevels });
}