import * as vscode from "vscode";
import * as lc from "vscode-languageclient/node";

let client: lc.LanguageClient;

export function activate(_context: vscode.ExtensionContext) {
	const serverOptions: lc.ServerOptions = {
		"command": "edit-mirror",
		"args": ["language-server"]
	};

	const clientOptions: lc.LanguageClientOptions = {
		"documentSelector": [{ "language": "elm" }]
	};

	client = new lc.LanguageClient(
		"edit-mirror",
		"Edit Mirror",
		serverOptions,
		clientOptions
	);

	client.start();
}

export function deactivate() {
	if (!client) {
		return;
	}
	return client.stop();
}
