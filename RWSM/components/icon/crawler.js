/* run this script on UNI to crawl the latest unicode and icon names */

function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

var iconsArray = [...document.getElementsByClassName("glyph-detail")];
var iconsMap = Object.create(null);

for (let i = 0; i < iconsArray.length; i++) {
  iconsMap[iconsArray[i].querySelector(".icon-name").textContent] = iconsArray[
    i
  ].querySelector(".icon-value").textContent;
}

var text = `export const FullMdl2 = {
${Object.keys(iconsMap)
  .map(key => `  "${key}": "\\u${iconsMap[key]}",`)
  .join("\n")}
};`;

download("full-mdl2.js", text);
