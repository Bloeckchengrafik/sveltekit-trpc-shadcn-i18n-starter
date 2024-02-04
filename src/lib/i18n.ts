import { addMessages, getLocaleFromNavigator, init } from "svelte-i18n";

import en from "./translations/en.json";
import de from "./translations/de.json";

addMessages("en", en);
addMessages("de", de);

init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
});