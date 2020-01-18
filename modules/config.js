export const MODULE_NAME = "kanka";

export const MODULE_LABEL = "Kanka";

export const SETTINGS = {
    get Auth() {
        return {
            apiKey: "apiKey"
        }
    }
    
}

export const DEFAULT_CONFIG = {
    get HOST() {
        return "https://kanka.io/api/1.0/"
    }
}