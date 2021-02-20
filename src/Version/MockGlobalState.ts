interface GlobalState {
    version: string;
}

export class MockGlobalState {
    // Global state
    private globalState: GlobalState;

    // Default key
    private defaultKey: string;

    constructor(versionValue: string) {
        // Set global state and default key
        this.globalState = { version: versionValue };
        this.defaultKey = 'document-code-generator_version';
    }

    public update(key: string, value: string): void {
        // If we have passed the right key, we update the fake context
        if (key === this.defaultKey) {
            this.globalState.version = value;
        } 
    }

    public get<T>(key: string): T | undefined {
        // Check if have passed the right key, and return the right value, otherwise, return undefined
        return key === this.defaultKey ? this.globalState.version as unknown as T : undefined;
    }
}