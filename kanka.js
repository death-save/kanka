import { getUserProfile } from "./modules/user.js";
import { registerModuleSettings } from "./modules/settings.js";
import { getCampaigns } from "./modules/campaigns.js";

Hooks.on("ready", () => {
    registerModuleSettings();
    //getUserProfile();
    getCampaigns();
});