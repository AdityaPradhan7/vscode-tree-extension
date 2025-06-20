# .aiapp Tree Viewer

This extension provides a custom tree viewer for `.aiapp` files within Visual Studio Code. It renders the JSON content of an `.aiapp` file as an interactive tree structure using a React-based webview.

## Features

*   Opens `.aiapp` files in a custom webview.
*   Renders an interactive tree visualization of the JSON data.

## How to Use

1.  Install the extension.
2.  Create or open a file with the `.aiapp` extension. The JSON content of the file should be in a fixed format.
3.  The file will automatically open in the ".aiapp Tree Viewer", displaying the rendered tree.

### Screenshot

![Extension Screenshot](images/screenshot.png)

## JSON Data Format

The extension expects the `.aiapp` file to contain a JSON object with a specific structure. The root object should contain a `template` key. The Values of the keys: `description`, `roleDescription` and `staticJsonPayload`, need to be `base64` encoded.

Here is an example of the required format:

```json
{
  "template": {
    "business_teams": [
      {
        "business_agents": [
          {
            "LLMkey": "YOUR_LLM_KEY_HERE",
            "identifier": "8d3493ab-38ea-4440-b70b-f581f59d86c7",
            "name": "Mani",
            "title": "DBA",
            "roleDescription": "WW91IGFyZSBhIGJhbmsgZW1wbG95ZWUgYW5kIGhhdmUgYWNjZXNzIHRvIGNvbXBsZXRlIGJhbmsgZGF0YWJhc2UgYW5kIGNhbiBxdWVyeSBhbnkgaW5mb3JtYXRpb24gYWJvdXQgdmFyaW91cyB1c2VyIGFjY291bnRzIGluIHRoZSBiYW5rLiBVc2VycyB3aWxsIGFza3MgcXVlc3Rpb25zIGZvciB3aGljaCB5b3UgbWF5IGhhdmUgdG8gZXhwbG9yZSBhbmQgYW5hbHl6ZSBiYW5rIGRhdGFiYXNlcy4gVXNlIHRoZSBhcHByb3ByaWF0ZSBmdW5jdGlvbnMgdG8gYWNjZXNzIGJhbmsgZGF0YWJhc2VzLiBFbnN1cmUgdG8gZXhwbG9yZSB0aGUgc2NoZW1hIGFuZCB1bmRlcnN0YW5kaW5nIG9mIGRhdGFiYXNlIHRhYmxlcyBiZWZvcmUgcnVubmluZyBhbnkgZGF0YSByZXRyaWV2YWwuIFlvdSBtdXN0IHJ1biBxdWVyaWVzIHRvIHVuZGVyc3RhbmQgdGhlIGRhdGFiYXNlIHNjaGVtYS4gQW5kIHRoZW4gY29uc3RydWN0IHlvdXIgc2VsZWN0IFNRTHMgYmFzZWQgb24geW91ciBhbmFseXNpcyB0byBwcm92aWRlIGFjY3VyYXRlIGluZm9ybWF0aW9uIHRvIHRoZSB1c2VyLgoKQWxsIHRyYW5zYWN0aW9ucyBhcmUgZm9yIHNtYWxsIGFjY291bnRzOgpCZWxvdyBpcyB0aGUgb25lIG9mIHRoZSB0YWJsZXMgdGhhdCBleGlzdHMgaW4gdGhlIGRhdGFiYXNlOgoKQ1JFQVRFIFRBQkxFIHB1YmxpYy50cmFuc2FjdGlvbnMgKAoJcm93aWQgSU5UOCBOT1QgVklTSUJMRSBOT1QgTlVMTCBERUZBVUxUIHVuaXF1ZV9yb3dpZCgpLAoJYWNjb3VudF9udW1iZXIgVkFSQ0hBUig1MCkgTlVMTCwKCXRyYW5zYWN0aW9uX2RhdGUgVkFSQ0hBUig1MCkgTlVMTCwKCXRyYW5zYWN0aW9uX3R5cGUgVkFSQ0hBUig1MCkgTlVMTCwKCWFtb3VudCBJTlQ4IE5VTEwsCglkZXNjcmlwdGlvbiBWQVJDSEFSKDUwKSBOVUxMLAoJQ09OU1RSQUlOVCB0cmFuc2FjdGlvbnNfcGtleSBQUklNQVJZIEtFWSAocm93aWQgQVNDKQop",
            "model": {
              "modelName": "gpt-4o-mini",
              "LLMkey": "YOUR_LLM_KEY_HERE",
              "baseUrl": "https://api.openai.com/v1",
              "apiKey": "YOUR_API_KEY_HERE",
              "enableParallelToolCalling": true,
              "temperature": 0.8,
              "name": "gpt-4o-mini",
              "maxTokens": 10000,
              "$$hashKey": "object:14"
            },
            "tools": [
              {
                "identifier": "8d3493ab-38ea-4440-b70b-f581f59d86c7",
                "fqn": "queryAccounts",
                "description": "VGhpcyBmdW5jdGlvbiBwcm92aWRlcyBhY2Nlc3MgdG8gYmFuayBkYXRhYmFzZS4gWW91IG11c3QgcnVuIHNlbGVjdCBTUUxzIHVzaW5nIHdoZXJlIGNsYXVzZSBhbmQgcmVzdHJpY3QgbWF4IHJvd3MgdG8gNTAuIFRoZSBkYXRhYmFzZSBzZXJ2ZXIgaXMgcG9zdGdyZXMuIE1ha2Ugc3VyZSB0byBleHBsb3JlIGRhdGFiYXNlIHNjaGVtYSBhbmQgb25seSBzZW5kIHBvc3RncmVzIGNvbXBhdGlibGUgU1Fscy4=",
                "api": {
                  "name": "",
                  "description": "",
                  "id": "packages.SyncloopTools.services.queryAccounts"
                },
                "staticJsonPayload": ""
              },
              {
                "identifier": "8d3493ab-38ea-4440-b70b-f581f59d86c7",
                "fqn": "clearChatHistory",
                "description": "VXNlIHRoaXMgZnVuY3Rpb24gdG8gY2xlYXIgY2hhdCBtZW1vcnkgdG8gZm9yZ2V0IHRoZSBjaGF0IGhpc3RvcnkuIEZ1bmN0aW9uIG5hbWUgaXMgc3RyaWN0bHkgcmVxdWlyZWQgaWRlbnRpY2FsIGFuZCBpdCdzIGNhc2Ugc2Vuc2l0aXZlLg==",
                "api": {
                  "name": "",
                  "description": "",
                  "id": "packages.Awareness.assistant.tools.clearChatHistory"
                },
                "staticJsonPayload": "ewogICJhZ2VudElEIjogIjhkMzQ5M2FiLTM4ZWEtNDQ0MC1iNzBiLWY1ODFmNTlkODZjNyIsCiAgImNoYXRJRCI6ICJkZWZhdWx0IiwKICAiKmZxbiI6ICJwYWNrYWdlcy5Bd2FyZW5lc3MuYXNzaXN0YW50LnRvb2xzLmNsZWFyQ2hhdEhpc3RvcnkiCn0="
              },
              {
                "identifier": "8d3493ab-38ea-4440-b70b-f581f59d86c7",
                "fqn": "getCurrentTime",
                "description": "VXNlIHRoaXMgZnVuY3Rpb24gZ2V0IGN1cnJlbnQgdGltZSBmcm9tIHN5c3RlbQ==",
                "api": {
                  "name": "",
                  "description": "",
                  "id": "packages.Awareness.assistant.tools.currentTime"
                },
                "staticJsonPayload": "ewogICIqZnFuIjogInBhY2thZ2VzLkF3YXJlbmVzcy5hc3Npc3RhbnQudG9vbHMuY3VycmVudFRpbWUiCn0="
              }
            ]
          }
        ],
        "tempAgents": [
          {
            "id": "8d3493ab-38ea-4440-b70b-f581f59d86c7"
          }
        ],
        "name": "TeamA",
        "description": "MTIz",
        "id": "a72d999c-c7ba-4bd4-9278-11e4317fba35"
      }
    ],
    "name": "TestApp",
    "description": "PHA+VHlwZSB5b3VyIGNvbnRlbnQgaGVyZS4uLjwvcD4=",
    "id": "3ffe45fe-7078-4c2e-b22d-1f97769d53cc"
  }
}
```
