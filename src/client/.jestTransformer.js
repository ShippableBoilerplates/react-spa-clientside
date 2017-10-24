const babel = require('babel-core')
const path = require('path')
const babelRc = require('./.babelrc.js')

module.exports = {
    process(src, filename) {
        if (babel.util.canCompile(filename)) {
            return babel.transform(src, {
                filename,
                presets: babelRc.presets,
                plugins: babelRc.dev.plugins,
                retainLines: true
            }).code
        }
        return 'module.exports = ' + JSON.stringify(path.basename(filename))
    }
}