var navigator_bien = navigator.userAgent
var chrome = document.getElementById('chrome')
var firefox = document.getElementById('firefox')
var edge = document.getElementById('edge')
var electron = document.getElementById('electron')
var result = navigator_bien.includes('Edg')
var result2 = navigator_bien.includes('Firefox')
var result3 = navigator_bien.includes('Chrome')
var result4 = navigator_bien.includes('Electron')

console.log(navigator_bien)

if (result == true) {
    console.log('edge')
    edge.style.opacity = 1
}
else if (result2 == true) {
    console.log('firefox')
    firefox.style.opacity = 1
}
else if (result4 == true) {
    console.log('electron')
    electron.style.opacity = 1
}
else if (result3 == true) {
    console.log('chrome')
    chrome.style.opacity = 1
}