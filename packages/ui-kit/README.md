UI-kit

UI-kit — библиотека переиспользуемых компонентов для монорепозитория.
Использует CSS Modules + CSS Variables (токены) и поддерживает темизацию.

🎯 Цель пакета

Создание единообразных компонентов UI.
Обеспечение темизации и токенов для согласованного дизайна.
Переиспользуемость в хостовом приложении и микрофронтах.

📂 Структура пакета
src/
├── components/
│ ├── atoms/
│ ├── molecules/
│ └── organisms/
├── hooks/
└── utils/

atoms — простые элементы: Button, Input, Typography, Checkbox
molecules — комбинации атомов: Card, FormField, Modal
organisms — сложные блоки: Header, Sidebar

Компонентная структура
ComponentName/
├── ComponentName.tsx # React-компонент
├── ComponentName.module.css # CSS Module
└── ComponentName.stories.tsx # Storybook story

⚛️ Atomic Design
| Уровень | Примеры | Комментарий |
| ------------- | ------------------------- | -------------------------------------------- |
| **Atoms** | Button, Input, Typography | Базовые элементы интерфейса |
| **Molecules** | Card, FormField | Комбинации атомов |
| **Organisms** | Header, Sidebar | Сложные блоки, состоящие из молекул и атомов |

🎨 Стили и темы
Токены
Все токены лежат в @packages/shared/src/styles/theme.css.
Цвета, типографика, spacing, бордеры, радиусы, тени, transition.
import '@packages/shared/src/styles/theme.css';

Базовые стили и reset - в @packages/shared/src/styles/base.css.

Темизация
Светлая тема: data-theme="light"
Тёмная тема: data-theme="dark"

CSS Variables автоматически применяются в компонентах.
CSS Modules

Локальные стили через .module.css:
import styles from './Button.module.css';

🧩 Hooks и Utils
hooks/ — кастомные React-хуки для компонентов.
utils/ — вспомогательные функции (formatDate, getColorByStatus).

📚 Storybook
Все компоненты имеют stories.
Поддерживаются темизация, контролы props, документация.

cd packages/ui-kit
npm run storybook

📐 Гайдлайны по компонентам
Именование: Папка и файлы совпадают с именем компонента (Button/Button.tsx)
Props: Использовать variant (primary, secondary, disabled, loading)

🚀 Подключение в приложении
// глобальные стили и темы
import '@packages/shared/src/styles';

// использование компонента
import Button from '@packages/ui-kit';

<Button variant="primary">Click me</Button>

Компоненты должны быть переиспользуемыми и изолированными.
