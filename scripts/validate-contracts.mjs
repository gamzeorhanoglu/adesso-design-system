import { readFile, readdir } from "node:fs/promises";

const requiredTokens = [
  "--ads-color-action-primary-default",
  "--ads-color-action-primary-hover",
  "--ads-color-action-primary-pressed",
  "--ads-color-action-primary-disabled",
  "--ads-size-control-lg",
  "--ads-size-control-md",
  "--ads-size-control-sm"
];

const requiredSelectors = [
  ".ads-btn",
  ".ads-btn.primary",
  ".ads-btn.secondary",
  ".ads-btn.outline",
  ".ads-btn.destructive",
  ".ads-btn.ghost",
  ".ads-btn.icon-only",
  ".ads-button-group",
  ".ads-flag",
  ".ads-list-item",
  ".ads-search-input",
  ".ads-search-input-control",
  ".ads-dropdown-list",
  ".ads-dropdown-list-options",
  ".ads-dropdown",
  ".ads-dropdown-trigger",
  ".ads-language",
  ".ads-language-trigger",
  ".ads-calendar-item",
  ".ads-icon",
  ".ads-field",
  ".ads-field-control",
  ".ads-field-support",
  ".ads-field-error",
  ".ads-selection",
  ".ads-checkbox",
  ".ads-radio",
  ".ads-switch",
  ".ads-switch-track",
  ".ads-selection-item",
  ".ads-selection-group",
  ".ads-switch-group",
  ".ads-avatar",
  ".ads-tag",
  ".ads-tooltip",
  ".ads-progress-bar"
];

const [tokens, icon, button, buttonGroupStyles, input, selection, switchStyles, groupStyles, avatarStyles, tagStyles, tooltipStyles, progressBarStyles, config, figmaManifest, generatedCss, generatedIconIndex, figmaConfig, buttonTemplate, inputTemplate, checkboxTemplate, radioButtonTemplate, desktopSwitchTemplate, mobileSwitchTemplate, selectionItemTemplate, selectionGroupTemplate, switchGroupTemplate, avatarTemplate, tagSoftTemplate, tagSolidTemplate, tooltipTemplate, progressBarTemplate, componentInventory] = await Promise.all([
  readFile(new URL("../packages/tokens/src/index.css", import.meta.url), "utf8"),
  readFile(new URL("../packages/css/src/components/icon.css", import.meta.url), "utf8"),
  readFile(new URL("../packages/css/src/components/button.css", import.meta.url), "utf8"),
  readFile(new URL("../packages/css/src/components/button-group.css", import.meta.url), "utf8"),
  readFile(new URL("../packages/css/src/components/input.css", import.meta.url), "utf8"),
  readFile(new URL("../packages/css/src/components/selection.css", import.meta.url), "utf8"),
  readFile(new URL("../packages/css/src/components/switch.css", import.meta.url), "utf8"),
  readFile(new URL("../packages/css/src/components/groups.css", import.meta.url), "utf8"),
  readFile(new URL("../packages/css/src/components/avatar.css", import.meta.url), "utf8"),
  readFile(new URL("../packages/css/src/components/tag.css", import.meta.url), "utf8"),
  readFile(new URL("../packages/css/src/components/tooltip.css", import.meta.url), "utf8"),
  readFile(new URL("../packages/css/src/components/progress-bar.css", import.meta.url), "utf8"),
  readFile(new URL("../ads.config.json", import.meta.url), "utf8"),
  readFile(new URL("../packages/tokens/src/figma.tokens.json", import.meta.url), "utf8"),
  readFile(new URL("../packages/tokens/src/generated/figma.css", import.meta.url), "utf8"),
  readFile(new URL("../packages/icons/src/generated/index.ts", import.meta.url), "utf8"),
  readFile(new URL("../figma.config.json", import.meta.url), "utf8"),
  readFile(new URL("../code-connect/Button.figma.ts", import.meta.url), "utf8"),
  readFile(new URL("../code-connect/Input.figma.ts", import.meta.url), "utf8"),
  readFile(new URL("../code-connect/Checkbox.figma.ts", import.meta.url), "utf8"),
  readFile(new URL("../code-connect/RadioButton.figma.ts", import.meta.url), "utf8"),
  readFile(new URL("../code-connect/DesktopSwitch.figma.ts", import.meta.url), "utf8"),
  readFile(new URL("../code-connect/MobileSwitch.figma.ts", import.meta.url), "utf8"),
  readFile(new URL("../code-connect/SelectionItem.figma.ts", import.meta.url), "utf8"),
  readFile(new URL("../code-connect/SelectionGroup.figma.ts", import.meta.url), "utf8"),
  readFile(new URL("../code-connect/SwitchGroup.figma.ts", import.meta.url), "utf8"),
  readFile(new URL("../code-connect/Avatar.figma.ts", import.meta.url), "utf8"),
  readFile(new URL("../code-connect/TagSoft.figma.ts", import.meta.url), "utf8"),
  readFile(new URL("../code-connect/TagSolid.figma.ts", import.meta.url), "utf8"),
  readFile(new URL("../code-connect/Tooltip.figma.ts", import.meta.url), "utf8"),
  readFile(new URL("../code-connect/ProgressBar.figma.ts", import.meta.url), "utf8"),
  readFile(new URL("../docs/figma-component-inventory.json", import.meta.url), "utf8")
]);

const flagStyles = await readFile(new URL("../packages/css/src/components/flag.css", import.meta.url), "utf8");
const listItemStyles = await readFile(new URL("../packages/css/src/components/list-item.css", import.meta.url), "utf8");
const searchInputStyles = await readFile(new URL("../packages/css/src/components/search-input.css", import.meta.url), "utf8");
const dropdownListStyles = await readFile(new URL("../packages/css/src/components/dropdown-list.css", import.meta.url), "utf8");
const dropdownStyles = await readFile(new URL("../packages/css/src/components/dropdown.css", import.meta.url), "utf8");
const languageStyles = await readFile(new URL("../packages/css/src/components/language.css", import.meta.url), "utf8");
const calendarItemStyles = await readFile(new URL("../packages/css/src/components/calendar-item.css", import.meta.url), "utf8");
const styles = `${icon}\n${button}\n${buttonGroupStyles}\n${flagStyles}\n${listItemStyles}\n${input}\n${searchInputStyles}\n${dropdownListStyles}\n${dropdownStyles}\n${languageStyles}\n${calendarItemStyles}\n${selection}\n${switchStyles}\n${groupStyles}\n${avatarStyles}\n${tagStyles}\n${tooltipStyles}\n${progressBarStyles}`;
const errors = [];

for (const token of requiredTokens) {
  if (!tokens.includes(token)) errors.push(`Missing token: ${token}`);
}

for (const selector of requiredSelectors) {
  if (!styles.includes(selector)) errors.push(`Missing selector: ${selector}`);
}

const parsedConfig = JSON.parse(config);
const parsedManifest = JSON.parse(figmaManifest);
const parsedComponentInventory = JSON.parse(componentInventory);
if (parsedManifest.source?.variableCount !== 891 || parsedManifest.variables?.length !== 891) {
  errors.push("Figma token manifest must contain all 891 ADS variables.");
}
if (parsedManifest.dependencies?.length !== 7) {
  errors.push("Figma token manifest must contain all 7 referenced variable dependencies.");
}
if (!generatedCss.includes('[data-ads-theme="dark"]')) {
  errors.push("Generated Figma CSS is missing the ADS dark-mode selector.");
}
const iconDirectory = new URL("../packages/icons/src/figma/", import.meta.url);
const iconBatchFiles = (await readdir(iconDirectory))
  .filter((file) => /^batch-\d+\.json$/.test(file))
  .sort();
const iconBatches = await Promise.all(
  iconBatchFiles.map(async (file) => JSON.parse(await readFile(new URL(file, iconDirectory), "utf8")))
);
const icons = iconBatches.flatMap((batch) => batch.icons);
const iconVariantCount = icons.reduce((total, entry) => total + entry.variants.length, 0);
if (icons.length !== 280 || iconVariantCount !== 1680) {
  errors.push("Figma icon manifest must contain 280 icons and 1680 variants.");
}
if ((generatedIconIndex.match(/^export \{/gm) ?? []).length !== 280) {
  errors.push("Generated icon index must export all 280 ADS icons.");
}
if (
  parsedConfig.figma.icons?.componentSetCount !== 280 ||
  parsedConfig.figma.icons?.variantCount !== 1680
) {
  errors.push("ads.config.json must record the canonical ADS icon inventory.");
}
const parsedFigmaConfig = JSON.parse(figmaConfig);
if (
  parsedFigmaConfig.codeConnect?.parser !== "react" ||
  parsedFigmaConfig.codeConnect?.label !== "React" ||
  !parsedFigmaConfig.codeConnect?.include?.includes("code-connect/**/*.figma.ts")
) {
  errors.push("figma.config.json must target the parserless ADS React templates.");
}
if (parsedConfig.figma.codeConnect?.parserlessTemplateCount !== 309) {
  errors.push("ads.config.json must record 309 parserless Code Connect templates.");
}
if (!buttonTemplate.includes("figma.code") || buttonTemplate.includes("figma.connect(")) {
  errors.push("Button Code Connect must use a parserless figma.code template.");
}
if (
  parsedComponentInventory.summary?.componentSetCount !== 337 ||
  parsedComponentInventory.summary?.standaloneComponentCount !== 37 ||
  parsedComponentInventory.summary?.implementedIconSetCount !== 281 ||
  parsedComponentInventory.summary?.implementedStandaloneComponentCount !== 6 ||
  parsedComponentInventory.summary?.implementedNonIconSetCount !== 22 ||
  parsedComponentInventory.summary?.missingNonIconSetCount !== 35
) {
  errors.push("Figma component inventory counts are incomplete or stale.");
}
if (
  parsedConfig.figma.inventory?.componentSetCount !== 337 ||
  parsedConfig.figma.inventory?.implementedIconSetCount !== 281 ||
  parsedConfig.figma.inventory?.implementedNonIconSetCount !== 22 ||
  parsedConfig.figma.inventory?.missingNonIconSetCount !== 35
) {
  errors.push("ads.config.json must record the ADS component coverage counts.");
}
if (
  !inputTemplate.includes("figma.code") ||
  inputTemplate.includes("figma.connect(") ||
  !inputTemplate.includes('id: "ads-input"')
) {
  errors.push("Input Code Connect must use the canonical parserless template.");
}
for (const [name, template, id] of [
  ["Checkbox", checkboxTemplate, "ads-checkbox"],
  ["RadioButton", radioButtonTemplate, "ads-radio-button"],
  ["DesktopSwitch", desktopSwitchTemplate, "ads-switch-desktop"],
  ["MobileSwitch", mobileSwitchTemplate, "ads-switch-mobile"],
  ["SelectionItem", selectionItemTemplate, "ads-selection-item"],
  ["SelectionGroup", selectionGroupTemplate, "ads-selection-group"],
  ["SwitchGroup", switchGroupTemplate, "ads-switch-group"],
  ["Avatar", avatarTemplate, "ads-avatar"],
  ["TagSoft", tagSoftTemplate, "ads-tag-soft"],
  ["TagSolid", tagSolidTemplate, "ads-tag-solid"],
  ["Tooltip", tooltipTemplate, "ads-tooltip"],
  ["ProgressBar", progressBarTemplate, "ads-progress-bar"]
]) {
  if (!template.includes("figma.code") || template.includes("figma.connect(") || !template.includes(`id: "${id}"`)) {
    errors.push(`${name} Code Connect must use the canonical parserless template.`);
  }
}
const additionalButtonTemplateContracts = [
  ["SecondaryButton", "SecondaryButton.figma.ts", "ads-button-secondary"],
  ["OutlineButton", "OutlineButton.figma.ts", "ads-button-outline"],
  ["GhostButton", "GhostButton.figma.ts", "ads-button-ghost"],
  ["DestructiveButton", "DestructiveButton.figma.ts", "ads-button-destructive"],
  ["IconOnlyButton", "IconOnlyButton.figma.ts", "ads-button-icon-only"],
  ["ButtonGroupIconAction", "ButtonGroupIconAction.figma.ts", "ads-button-group-icon-action"],
  ["ButtonGroupHorizontal", "ButtonGroupHorizontal.figma.ts", "ads-button-group-horizontal"],
  ["ButtonGroupVertical", "ButtonGroupVertical.figma.ts", "ads-button-group-vertical"],
  ["Flag", "Flag.figma.ts", "ads-flag"],
  ["ListItem", "ListItem.figma.ts", "ads-list-item"],
  ["SearchInput", "SearchInput.figma.ts", "ads-search-input"],
  ["DropdownList", "DropdownList.figma.ts", "ads-dropdown-list"],
  ["Dropdown", "Dropdown.figma.ts", "ads-dropdown"],
  ["Language", "Language.figma.ts", "ads-language"],
  ["CalendarItem", "CalendarItem.figma.ts", "ads-calendar-item"]
];
for (const [name, file, id] of additionalButtonTemplateContracts) {
  const template = await readFile(new URL(`../code-connect/${file}`, import.meta.url), "utf8");
  if (!template.includes("figma.code") || template.includes("figma.connect(") || !template.includes(`id: "${id}"`)) {
    errors.push(`${name} Code Connect must use the canonical parserless template.`);
  }
}
const codeConnectIconDirectory = new URL("../code-connect/icons/", import.meta.url);
const codeConnectIconFiles = (await readdir(codeConnectIconDirectory)).filter((file) =>
  file.endsWith(".figma.ts")
);
if (codeConnectIconFiles.length !== 280) {
  errors.push("Code Connect must contain all 280 generated icon templates.");
}
const flagAssetDirectory = new URL("../packages/ui-web/src/assets/flags/", import.meta.url);
const flagAssetFiles = (await readdir(flagAssetDirectory)).filter((file) => file.endsWith(".png"));
if (flagAssetFiles.length !== 10) {
  errors.push("Flag must contain all 10 exported Figma assets.");
}
for (const file of flagAssetFiles) {
  if ((await readFile(new URL(file, flagAssetDirectory))).length === 0) {
    errors.push(`Flag asset must not be empty: ${file}`);
  }
}
for (const key of ["button", "buttonGroup", "flag", "listItem", "dropdownList", "dropdown", "language", "calendarItem", "input", "searchInput", "checkbox", "radioButton", "switch", "selectionItem", "selectionGroup", "switchGroup", "avatar", "tag", "tooltip", "progressBar"]) {
  const mapping = parsedConfig.figma.components[key];
  if (!mapping?.componentSetNodeId && !mapping?.componentNodeId) {
    errors.push(`Missing Figma component mapping: ${key}`);
  }
}
for (const behavior of ["clear", "passwordVisibility", "countrySelection"]) {
  if (!parsedConfig.figma.components.input?.behaviors?.[behavior]) {
    errors.push(`Missing approved Input behavior mapping: ${behavior}`);
  }
}
if (!parsedConfig.figma.components.checkbox?.behaviors?.indeterminate) {
  errors.push("Missing approved Checkbox indeterminate behavior mapping.");
}
if (!parsedConfig.figma.components.listItem?.behaviors?.selection) {
  errors.push("Missing approved ListItem selection behavior mapping.");
}
if (
  !parsedConfig.figma.components.searchInput?.behaviors?.clear ||
  !parsedConfig.figma.components.searchInput?.behaviors?.state
) {
  errors.push("Missing approved SearchInput behavior mappings.");
}
if (!parsedConfig.figma.components.dropdownList?.behaviors?.state) {
  errors.push("Missing approved DropdownList state behavior mapping.");
}
if (!parsedConfig.figma.components.dropdown?.behaviors?.state) {
  errors.push("Missing approved Dropdown state behavior mapping.");
}
if (!parsedConfig.figma.components.language?.behaviors?.selection) {
  errors.push("Missing approved Language selection behavior mapping.");
}
if (!parsedConfig.figma.components.calendarItem?.behaviors?.selection) {
  errors.push("Missing approved CalendarItem selection behavior mapping.");
}
if (parsedConfig.name !== "Adesso Design System") {
  errors.push("ads.config.json must use the canonical Adesso Design System name.");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("ADS contracts valid: tokens, icons, selectors, and Figma mappings are present.");

