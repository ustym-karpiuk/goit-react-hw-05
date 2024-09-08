import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Массив имен компонентов, которые нужно создать
const components = ['ErrorMessage', 'LoadMoreBtn', 'MoiveCard', 'MovieCast', 'Loader', 'MovieList', 'MovieReviews', 'Navigation', 'SearchBar'];

// Создание папки src/components, если она еще не существует
const componentsDir = path.join(__dirname, 'src', 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// Функция для создания файлов компонента
function createComponentFiles(componentName) {
  const componentDir = path.join(componentsDir, componentName);

  // Создание папки для компонента
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
  }

  // Создание файла компонента (JSX)
  const componentFile = path.join(componentDir, `${componentName}.jsx`);
  const componentContent = `
import React from 'react';
import './${componentName}.css';

const ${componentName} = () => {
  return (
    <div className="${componentName}">
      <h1>${componentName} Component</h1>
    </div>
  );
};

export default ${componentName};
  `;
  fs.writeFileSync(componentFile, componentContent.trim());

  // Создание CSS файла
  const cssFile = path.join(componentDir, `${componentName}.module.css`);
  const cssContent = `
.${componentName} {
  /* Styles for ${componentName} */
}
  `;
  fs.writeFileSync(cssFile, cssContent.trim());
}

  components.forEach(createComponentFiles);

console.log('Components created successfully!');