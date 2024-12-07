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
   - Краткие значения для цветов в формате hex.
4) Настройки для порядка свойств в CSS.

## Детали конфигурации
### Общие настройки
1) `stylelint-config-standard` — Рекомендуемая конфигурация для стандартного CSS.
2) `stylelint-config-standard-scss` — Рекомендуемая конфигурация для SCSS.

## Правила
1) `color-hex-length: 'short'` — Использование краткой формы для цветов в hex.
2) `block-no-empty: true` — Запрещает пустые блоки.
3) `selector-class-pattern: '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$'` — Требуется использование нижнего регистра и дефисов в названиях классов.
4) `scss/dollar-variable-pattern: '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$'` — Требуется использование нижнего регистра и дефисов для имен переменных SCSS.
### Порядок свойств
1) Правила для порядка свойств:
- `position`, `top`, `right`, `bottom`, `left`, `z-index`
- `display`, `flex`, `flex-grow`, `flex-shrink`, `flex-basis`, `justify-content`, `align-items`, `align-self`, `order`
- `display`, `grid`, `grid-template-rows`, `grid-template-columns`, `grid-template-areas`, `grid-gap, `gap`
- `width`, `height`, `min-width`, `min-height`, `max-width`, `max-height`
- `color`, `background-color`, `background`, `background-image`, `background-position`, `background-size`
2) Для остальных свойств — `alphabetical`.

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

### 2) Настройте Stylelint в проекте: Создайте файл .stylelintrc.js в корне проекта:

```js
import styleLintConfig from '@ilya_goncharov_y/custom-stylelint';

export default styleLintConfig;
```
- Подключенние к web storm, для автоматической проверки:
- заходим в Settings.
- в поиске прописываем Stylelint.
- ставим галку на `Enable`.
- в Style lint package указываем путь к файлу. Пример: `C:\<Твой путь к папке node_modules в проекте, в котором собираешься использовать линтер>\node_modules\stylelint`.
- в Run for files указываем: `**/*.{css,scss}`
- Применяем изменения.

### 3) Запустите Stylelint:

```bash
npx stylelint '**/*.scss' '**/*.css'
```
Или при условии настройки IDE кликаем правой кнопкой мыши в `.css` файле `Fix Stylelint problems`. Для исправления ошибок в одном конкретном файле.

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
         'background-position', 'background-size',
         'alphabetical',
      ],
   },
};
```
