import { commands, ExtensionContext, window } from 'vscode';

export function activate(context: ExtensionContext) {
    // Initial release command
    let disposable = commands.registerCommand('document-code-generator.initialRelease', () => {
		window.showInformationMessage('Initial release');
	});

	context.subscriptions.push(disposable);
}