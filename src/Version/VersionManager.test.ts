import { MockGlobalState } from './MockGlobalState';
import { strictEqual } from 'assert';
import { VersionManager } from './VersionManager';

describe('Version Manager tests', () => {
    const extensionName = 'document-code-generator';
    const mockGlobalState = new MockGlobalState('0.2.0');

    it('Obtain version from package.json, update it to the new one and return the right message', () => {
        const versionManager = new VersionManager('0.3.0');
        const message = versionManager.updateExtensionVersion(mockGlobalState);
        strictEqual(message, `Package ${extensionName} has been updated to the newest version "0.3.0"`);
    });

    it('If we are on the latest version, we do not update it and put a information message about that', () => {
        const versionManager = new VersionManager('0.3.0');
        const message = versionManager.updateExtensionVersion(mockGlobalState);
        strictEqual(message, `You have the most recent version for the package ${extensionName}`);
    });
});