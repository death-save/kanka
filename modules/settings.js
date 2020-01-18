import * as KANKA from "./config.js";

export function registerModuleSettings() {
    game.settings.register(KANKA.MODULE_NAME, KANKA.SETTINGS.Auth.apiKey, {
        Name: "SETTINGS.AuthAPIKeyN",
        Hint: "SETTINGS.AuthAPIKeyH",
        scope: "world",
        type: String,
        default: "",
        config: true
    })
}