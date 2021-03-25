export function urlNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

export function clearChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}