import { Memento } from 'vscode';
import { MockGlobalState } from './MockGlobalState';

export class VersionManager {
    // Newest version
    private readonly newestVersion: string;

    // Extension name
    private readonly extensionName: string;

    constructor(version: string = '') {
        // Obtain new version from package.json
        version = version ? version : require('../../package.json');
        this.newestVersion = version;

        // Set version name
        this.extensionName = 'document-code-generator';
    }

    public updateExtensionVersion(globalState: Memento | MockGlobalState): string {
        // Obtain current version
        const key = this.extensionName + '_version';
        const currentVersion = globalState.get<string>(key);

        // Check if there is a new version and return message
        if (!currentVersion || currentVersion < this.newestVersion) {
            // In that case, update it
            globalState.update(key, this.newestVersion);

            return `Package ${this.extensionName} has been updated to ` +
                `the newest version \"${this.newestVersion}\"`;
        }

        return `You have the most recent version for the package ${this.extensionName}`;
    }
}