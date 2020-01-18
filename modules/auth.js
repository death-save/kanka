import * as KANKA from "./config.js";

export function getAuth() {
    const host = KANKA.DEFAULT_CONFIG.HOST; 

    const apiKey = game.settings.get(KANKA.MODULE_NAME, KANKA.SETTINGS.Auth.apiKey);

    if (!apiKey) {
        return;
    }

    const auth = await fetch(host, {
        headers: {
            "Authorization": apiKey,
            "Accept": "application/json"
        }
    });

    console.log("auth: ", auth);
}
