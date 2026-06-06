import { QuartzComponent, QuartzComponentConstructor } from "./types"

const TrailingSlashFixScript = `
(function () {
  var fix = setInterval(function () {
    if (typeof window.spaNavigate !== "function") return
    clearInterval(fix)
    var orig = window.spaNavigate
    window.spaNavigate = function (url) {
      var p = url.pathname
      if (!p.endsWith("/") && !/\\.[a-z0-9]+$/i.test(p) && p !== "/") {
        url = new URL(p + "/" + url.search + url.hash, url.origin)
      }
      return orig(url)
    }
  }, 10)
})()
`

export default (() => {
  const TrailingSlashFix: QuartzComponent = () => null
  TrailingSlashFix.afterDOMLoaded = TrailingSlashFixScript
  TrailingSlashFix.css = ""
  return TrailingSlashFix
}) satisfies QuartzComponentConstructor
