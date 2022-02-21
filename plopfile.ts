import {NodePlopAPI} from 'plop'

export default function (plop: NodePlopAPI) {
  plop.setGenerator('GComponent', {
    description: "Creates a global component",
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "Component name:",
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './templates/Component.hbs'
      }
    ]
  })

  plop.setGenerator('LComponent', {
    description: "Creates a local component",
    prompts: [
      {
        type: 'input',
        name: 'screenName',
        message: "Enter screen name",
      },
      {
        type: 'input',
        name: 'name',
        message: "Enter component name: ",
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/screens/{{screenName}}/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './templates/Component.hbs'
      }
    ]
  })
}