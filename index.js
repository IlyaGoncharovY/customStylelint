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
        'indentation': 2,
        'string-quotes': 'single',
        'color-hex-length': 'short',
        'block-no-empty': true,
        'selector-class-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        'scss/dollar-variable-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        'order/properties-order': [
            {
                properties: [
                    'position', 'top', 'right', 'bottom', 'left', 'z-index',
                ],
            },
            {
                properties: [
                    'display', 'flex', 'flex-grow', 'flex-shrink', 'flex-basis',
                    'justify-content', 'align-items', 'align-self', 'order',
                ],
            },
            {
                properties: [
                    'display', 'grid', 'grid-template-rows', 'grid-template-columns',
                    'grid-template-areas', 'grid-auto-rows', 'grid-auto-columns',
                    'grid-auto-flow', 'grid-gap', 'gap', 'row-gap', 'column-gap',
                    'justify-items', 'align-items', 'place-items',
                    'justify-self', 'align-self', 'place-self',
                ],
            },
            {
                properties: ['width', 'height', 'min-width', 'min-height', 'max-width', 'max-height'],
            },
            {
                properties: ['color', 'background-color', 'background', 'background-image', 'background-position', 'background-size'],
            },
            {
                unspecified: 'bottomAlphabetical',
            },
        ],
    },
};
