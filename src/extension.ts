import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    // Register the custom editor provider
    context.subscriptions.push(
        vscode.window.registerCustomEditorProvider(
            'aiappEditor',
            new AIAppEditor(context.extensionUri),
            {
                webviewOptions: {
                    retainContextWhenHidden: true,
                }
            }
        )
    );

    console.log('AI App Tree Viewer extension is now active!');
}

class AIAppEditor implements vscode.CustomTextEditorProvider {
    constructor(private readonly extensionUri: vscode.Uri) {}

    public async resolveCustomTextEditor(
        document: vscode.TextDocument,
        webviewPanel: vscode.WebviewPanel,
        _token: vscode.CancellationToken
    ): Promise<void> {
        webviewPanel.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.joinPath(this.extensionUri, 'media')
            ]
        };

        try {
            const jsonData = JSON.parse(document.getText());
            webviewPanel.webview.html = this.getWebviewContent(webviewPanel.webview, this.extensionUri, jsonData);
        } catch (error) {
            webviewPanel.webview.html = this.getErrorWebviewContent(`Failed to parse file: ${error}`);
        }
    }

  private getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri, jsonData: any): string {
    // Find the main JS and CSS files (Vite adds hashes to filenames)
    const mediaFiles = fs.readdirSync(path.join(this.extensionUri.fsPath, 'media', 'assets'));
    const jsFile = mediaFiles.find(f => f.endsWith('.js') && f.startsWith('index-'));
    const cssFile = mediaFiles.find(f => f.endsWith('.css') && f.startsWith('index-'));

    const scriptUri = webview.asWebviewUri(
        vscode.Uri.joinPath(extensionUri, 'media', 'assets', jsFile!)
    );
    const styleUri = webview.asWebviewUri(
        vscode.Uri.joinPath(extensionUri, 'media', 'assets', cssFile!)
    );

    const nonce = getNonce();

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}';">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${styleUri}" rel="stylesheet">
        <title>AI App Viewer</title>
        <script nonce="${nonce}">
            window.template = ${JSON.stringify(jsonData)};
        </script>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
    </body>
    </html>`;
}

    private getErrorWebviewContent(error: string): string {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Error</title>
        </head>
        <body>
            <h1>Error Loading File</h1>
            <p>${error}</p>
        </body>
        </html>`;
    }
}

function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export function deactivate() {}