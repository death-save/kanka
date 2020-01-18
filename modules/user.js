import * as KANKA from "./config.js";

export async function getUserProfile() {
    const host = KANKA.DEFAULT_CONFIG.HOST; 
    const endpoint = host+"profile";

    const apiKey = game.settings.get(KANKA.MODULE_NAME, KANKA.SETTINGS.Auth.apiKey);
    

    if (!apiKey) {
        return;
    }

    const headers = {
        "Authorization": "Bearer " + apiKey,
        "Accept": "application/json"
    }

    const profile = await fetch(endpoint, {
        headers: headers,
        mode: "no-cors"
    });

    console.log("user: ", profile);
}