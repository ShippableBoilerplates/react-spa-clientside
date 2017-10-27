const presets = [
    [
        'env',
        {
            targets: {
                browsers: ['last 2 versions']
            }
        }
    ]
]

const devPlugins = [
    [
        'transform-object-rest-spread',
        {
            useBuiltIns: true
        }
    ],
    [
        'transform-runtime',
        {
            helpers: false,
            polyfill: false,
            regenerator: true,
            moduleName: 'babel-runtime'
        }
    ],
    'transform-class-properties',
    'transform-react-jsx'
]

const prodPlugins = [
    ...devPlugins,
    [
        'transform-react-remove-prop-types',
        {
            mode: 'remove',
            removeImport: true,
            ignoreFileNames: ['node_modules']
        }
    ]
]

module.exports = {
    presets,
    dev: {
        plugins: devPlugins
    },
    prod: {
        plugins: prodPlugins
    }
}
