export default function(plop) {
	plop.setGenerator('GComponent', {
		description: 'Creates a global component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name:'
			}
		],
		actions: [
			{
				type: 'add',
				path:
					'./src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
				templateFile: './templates/Component.hbs'
			},
			{
				type: 'add',
				path:
					'./src/components/{{pascalCase name}}/{{pascalCase name}}.props.ts',
				templateFile: './templates/ComponentProps.hbs'
			},
			{
				type: 'add',
				path: './src/components/{{pascalCase name}}/index.ts',
				templateFile: `export {default} from './{{pascalCase name}}'`
			}
		]
	});

	plop.setGenerator('LComponent', {
		description: 'Creates a local component',
		prompts: [
			{
				type: 'input',
				name: 'screenName',
				message: 'Enter screen name: /src/screens/'
			},
			{
				type: 'input',
				name: 'name',
				message: 'Enter component name: '
			}
		],
		actions: [
			{
				type: 'add',
				path:
					'./src/screens/{{screenName}}/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
				templateFile: './templates/Component.hbs'
			},
			{
				type: 'add',
				path:
					'./src/screens/{{screenName}}/components/{{pascalCase name}}/{{pascalCase name}}.props.ts',
				templateFile: './templates/ComponentProps.hbs'
			},
			{
				type: 'add',
				path:
					'./src/screens/{{screenName}}/components/{{pascalCase name}}/index.ts',
				templateFile: `export {default} from './{{pascalCase name}}'`
			}
		]
	});

	plop.setGenerator('Screen', {
		description: 'Creates a Screen and adds it to the navigator',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Enter screen name: '
			},
			{
				type: 'list',
				choices: [ 'Main', 'Profile', 'Tabs' ],
				name: 'stack',
				message: 'Enter stack name: '
			}
		],
		actions: function(data) {
			var actions = [];
			let patternToAddRouteType = new RegExp(
				`// PLOP SCREENS FOR ${data.stack}`,
				'g'
			);
			console.log('patternToAddRouteType', patternToAddRouteType);
			let patternToAddScreenToStack = new RegExp(
				`{/\\* // PLOP ADD SCREEN FOR ${data.stack} \\*/}`,
				'g'
			);
			console.log('patternToAddScreenToStack', patternToAddScreenToStack);

			actions.push({
				type: 'add',
				path:
					'./src/screens/{{lowerCase name}}/{{pascalCase name}}Screen.tsx',
				templateFile: './templates/Screen.hbs'
			});
			actions.push({
				type: 'append',
				path: './src/routes/AppNavigator.tsx',
				pattern: /(\/\/ PLOP IMPORTS)/g,
				template: `import {{pascalCase name}}Screen from '../screens/{{lowerCase name}}/{{pascalCase name}}Screen';`
			});
			actions.push({
				type: 'append',
				path: './src/routes/routeTypes.ts',
				pattern: patternToAddRouteType,
				template: `  {{pascalCase name}}: undefined;`
			});
			actions.push({
				type: 'append',
				path: './src/routes/AppNavigator.tsx',
				pattern: patternToAddScreenToStack,
				template: `      <{{pascalCase stack}}Stack.Screen name="{{pascalCase name}}" component={ {{pascalCase name}}Screen } />`
			});

			return actions;
		}
	});

	plop.setGenerator('Model', {
		description: 'Creates a MST model',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Model name:'
			}
		],
		actions: [
			{
				type: 'add',
				path: './src/models/{{pascalCase name}}/{{pascalCase name}}.ts',
				templateFile: './templates/Model.hbs'
			}
		]
	});
}
