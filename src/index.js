import App from './App';

document.getElementById('root').innerHTML = App;


(function (win, doc) {
    function resizeBaseFontSize() {
        const { clientWidth, offsetWidth, scrollWidth } = doc.documentElement;
        const { width: screenWidth, availWidth } = win.screen;
        const width = clientWidth || offsetWidth || scrollWidth || screenWidth || availWidth || 375;
        doc.documentElement.style.fontSize = `${(width / 375) * 10}px`;
        doc.documentElement.style.opacity = '1';
    }
    win.addEventListener('load', resizeBaseFontSize, false);
    win.addEventListener('resize', resizeBaseFontSize, false);
    win.addEventListener('orientationchange', resizeBaseFontSize, false);
})(window, document);