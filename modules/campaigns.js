import * as KANKA from "./config.js";

export async function getCampaigns() {
    const host = KANKA.DEFAULT_CONFIG.HOST; 
    const endpoint = host+"campaigns";

    const apiKey = game.settings.get(KANKA.MODULE_NAME, KANKA.SETTINGS.Auth.apiKey);
    

    if (!apiKey) {
        return;
    }

    const headers = {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json"
    }
    

    const profile = await fetch(endpoint, {
        method: "GET",
        headers: headers
    }).then(response => response.json());

    console.log("campaigns: ", profile);
}