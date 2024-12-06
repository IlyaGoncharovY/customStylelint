export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
    ],
    plugins: [
        'stylelint-scss',
        'stylelint-order',
    ],
    rules: {
        'color-hex-length': 'short',
        'block-no-empty': true,
        'selector-class-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        'scss/dollar-variable-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        'order/properties-order': [
            'position', 'top', 'right', 'bottom', 'left', 'z-index',
            'display', 'flex', 'flex-grow', 'flex-shrink', 'flex-basis',
            'justify-content', 'align-items', 'align-self', 'order',
            'grid', 'grid-template-rows', 'grid-template-columns', 'grid-template-areas',
            'grid-gap', 'gap', 'width', 'height', 'color', 'background-color', 'background', 'background-image',
            'background-position', 'background-size'
        ],
        "order/properties-alphabetical-order": true
    },
};
