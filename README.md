# Custom Stylelint Configuration
## Кастомная конфигурация Stylelint для проектов с SCSS и стандартным CSS.
Этот пакет предоставляет готовую конфигурацию Stylelint для работы с SCSS и CSS. Он помогает поддерживать единообразие в стиле кода и предотвращать ошибки при работе с CSS и SCSS.

## Особенности
1) Рекомендуемые конфигурации:
- Стандартная конфигурация Stylelint `(stylelint-config-standard)`
- Стандартная конфигурация для SCSS `(stylelint-config-standard-scss)`
- TypeScript `(plugin:@typescript-eslint/recommended)`
2) Поддержка плагинов:
- `stylelint-scss` — для проверки правил, специфичных для SCSS.
- `stylelint-order` — для управления порядком свойств в CSS.
3) Применение стандартных стилей:
   - Отступы в 2 пробела.
   - Одинарные кавычки для строк.
   - Краткие значения для цветов в формате hex.
4) Настройки для порядка свойств в CSS.

## Детали конфигурации
### Общие настройки
1) `stylelint-config-standard` — Рекомендуемая конфигурация для стандартного CSS.
2) `stylelint-config-standard-scss` — Рекомендуемая конфигурация для SCSS.

## Правила
1) `indentation: 2` — Требуется отступ в 2 пробела.
2) `string-quotes: 'single'` — Требуется использование одинарных кавычек для строк.
3) `color-hex-length: 'short'` — Использование краткой формы для цветов в hex.
4) `block-no-empty: true` — Запрещает пустые блоки.
5) `selector-class-pattern: '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$'` — Требуется использование нижнего регистра и дефисов в названиях классов.
6) `scss/dollar-variable-pattern: '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$'` — Требуется использование нижнего регистра и дефисов для имен переменных SCSS.
### Порядок свойств
1) Правила для порядка свойств:
- `position`, `top`, `right`, `bottom`, `left`, `z-index`
- `display`, `flex`, `flex-grow`, `flex-shrink`, `flex-basis`, `justify-content`, `align-items`, `align-self`, `order`
- `display`, `grid`, `grid-template-rows`, `grid-template-columns`, `grid-template-areas`, `grid-gap, `gap`
- `width`, `height`, `min-width`, `min-height`, `max-width`, `max-height`
- `color`, `background-color`, `background`, `background-image`, `background-position`, `background-size`
2) Для остальных свойств — `bottomAlphabetical`.

## Использование
### 1) Установите пакет:

```bash
# npm
npm i @ilya_goncharov_y/custom-stylelint --save-dev

# pnpm
pnpm i @ilya_goncharov_y/custom-stylelint --save-dev

# yarn
yarn add @ilya_goncharov_y/custom-stylelint --save-dev
```

### 2) Настройте ESLint в проекте: Создайте файл .stylelintrc.js в корне проекта:

```js
import styleLintConfig from '@ilya_goncharov_y/custom-stylelint';

export default styleLintConfig;
```

### 3) Запустите ESLint:

```bash
npx stylelint '**/*.scss' '**/*.css'
```

## Пример конфигурации
Вот полная конфигурация, экспортируемая этим пакетом:
```js
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
```
