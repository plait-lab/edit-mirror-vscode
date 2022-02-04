import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "edit-mirror" is now active!');

	let disposable = vscode.commands.registerCommand('edit-mirror.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from Edit Mirror!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
