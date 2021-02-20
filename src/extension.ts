import { commands, ExtensionContext, window } from 'vscode';
import { VersionManager } from './Version/VersionManager';

export function activate(context: ExtensionContext) {
    // Command to update extension to the newest version
    const disposable = commands.registerCommand('document-code-generator.updateExtensionVersion', () => {
		const versionManager = new VersionManager();
        const message = versionManager.updateExtensionVersion(context.globalState);
        window.showInformationMessage(message);
	});

    // Add command to the context
	context.subscriptions.push(disposable);
}