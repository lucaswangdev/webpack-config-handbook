document.write('partA.js: ');
document.write(
    global._babelPolyfill
        ? 'added babel-polyfill'
        : 'no global babel-polyfill'
);
document.write('<br/>');
