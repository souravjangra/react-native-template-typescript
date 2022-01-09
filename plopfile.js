/*
 * Project: alautun
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Saturday, January 8th 2022 11:45:48 am
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'src/components/stories.ts',
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import './{{type}}/{{pascalCase name}}/stories';`,
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/molecules/{{pascalCase name}}/{{pascalCase name}}.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component.js.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/molecules/{{pascalCase name}}/stories.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Stories.js.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/molecules/{{pascalCase name}}/index.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/ExportIndex.js.hbs',
      },
    ],
  });

  plop.setGenerator('screen', {
    description: 'Create a common screen',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your common screen name?',
      },
    ],
    actions: [
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'src/screens/index.ts',
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_SCREEN */`,
        template: `{{pascalCase name}}: { component: {{pascalCase name}} },`,
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'src/screens/index.ts',
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase name}} } from '@screens/{{pascalCase name}}';`,
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'src/screens/index.ts',
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_TYPE */`,
        template: `{{pascalCase name}}: undefined;`,
      },
      {
        // Add the component file
        type: 'add',
        // Path for the component file
        path: 'src/screens/{{pascalCase name}}/{{pascalCase name}}.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/CommonScreen.js.hbs',
      },
      {
        // Add the index file
        type: 'add',
        // Path for the index file
        path: 'src/screens/{{pascalCase name}}/index.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/ExportIndex.js.hbs',
      },
      //   {
      //     // Add a new file
      //     type: 'add',
      //     // Path for the new file
      //     path: 'src/screens/{{pascalCase name}}.tsx',
      //     // Handlebars template used to generate content of new file
      //     templateFile: 'plop-templates/CommonScreen.js.hbs',
      //   },
    ],
  });
};
