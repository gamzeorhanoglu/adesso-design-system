# Adesso Design System

Production code counterpart of the ADS Figma library.

## Important: install Klavika before you start

ADS uses the company-licensed Klavika font. Authorized Adesso users must
[download the Klavika font family from the internal SharePoint folder](https://o365adessogroup.sharepoint.com/:f:/s/UXUI926/IgDyCycCjkODR5HOZH2LIqVIAXpvSKOF911RPjqycjhDDHE?e=i93c6b)
and install it locally before developing or reviewing ADS interfaces. Restart
the browser, development server, and design tools after installation so they
can detect the font.

The font files are not distributed through this repository. If Klavika is not
installed, ADS automatically falls back to `Open Sans`, then `Helvetica Neue`,
Arial, and the system sans-serif font. This fallback can change text
measurements and line wrapping, so visual QA should be performed with Klavika
installed.

## Implementation guideline

Product teams using Claude Code, Gemini CLI, or Codex should follow the private
[ADS Implementation Guideline](https://github.com/gamzeorhanoglu/ads-implementation-guideline).

## Packages

- `@ads/tokens`: machine-readable ADS tokens and CSS custom properties.
- `@ads/css`: canonical component styles built on ADS tokens.
- `@ads/icons`: 280 canonical React icons with all six exact Figma size variants.
- `@ads/ui-web`: accessible React components mapped to Figma components.

The first implementation set covers Button, ButtonGroup, Flag, Input, SearchInput, TextArea,
DropdownList, Dropdown, Language, Calendar, CalendarItem, DatePicker, Chip, ChipGroup, Accordion, Breadcrumb, BreadcrumbItem, CarouselControl, CarouselDot, NavigationItem, Logo, Footer, TopNavigation, NavigationGroup, Checkbox, RadioButton, Switch, ListItem, SelectionGroup, SelectionItem,
SwitchGroup, Avatar, Tag, Tooltip, and ProgressBar. Component APIs intentionally model
runtime behavior rather than exposing Figma-only states as application props.

## Component coverage

The complete ADS Figma file has been inventoried across all component pages:
337 component sets, 37 standalone components, and 2,222 variants or standalone
items. All 281 icon sets are implemented: 280 canonical ADS icons plus the
country `Flag` component set.
Outside icons, six Button families, Input, Input/Search, Input/TextArea, DropdownList, Dropdown, Language, Calendar, Calendar-Item, DatePicker, Chips-Filter, Breadcrumb-Item, Dots, Navigation-Item, Checkbox,
RadioButton, Desktop/Mobile Switch, Avatar, Soft/Solid Tag, Tooltip, ProgressBar,
and ListItem sets are implemented, leaving 26 component
sets to build.

The three published Button Group compositions are implemented as one ADS
`ButtonGroup` primitive. They compose only canonical ADS Button variants and
preserve the Figma 408 px layout contract responsively.

- Human-readable coverage and phased order: `docs/component-coverage.md`
- Machine-readable inventory with Figma node IDs: `docs/figma-component-inventory.json`

## Figma token synchronization

The ADS Figma file currently exports 891 local variables plus 7 referenced
dependencies. The generated package exposes 898 tokens while preserving Figma
aliases and the Color collection's Light/Dark modes.

- Raw source: `packages/tokens/src/figma.tokens.json`
- Generated CSS: `packages/tokens/src/generated/figma.css`
- Resolved values: `packages/tokens/src/generated/figma.resolved.json`
- Theme selector: `[data-ads-theme="light|dark"]`

Run `npm run tokens:build` after a Figma variable export. Generated files must
not be edited manually. `npm run tokens:check` fails when they are stale.

## Figma icon synchronization

The Icons page exports 280 component sets and 1,680 exact SVG variants. Each
icon includes `xs` (16), `sm` (20), `md` (24), `lg` (32), `xl` (40), and
`2xl` (48). Variants are exported separately because their stroke geometry is
not a scaled copy of one source size.

- Raw source: `packages/icons/src/figma/batch-*.json`
- Generated React components: `packages/icons/src/generated/`
- Shared API and accessibility behavior: `packages/icons/src/createAdsIcon.tsx`

Run `npm run icons:build` after a Figma icon export. Generated components must
not be edited manually. `npm run icons:check` validates the 280/1,680 inventory
and fails when generated output is stale.

## Code Connect

Parserless Code Connect templates map published Figma components to the real
ADS React packages. Button, Flag, Input, Checkbox, RadioButton, and Switch are mapped to `@ads/ui-web`; all 280 icon
component sets are mapped to their named exports from `@ads/icons`.

- Configuration: `figma.config.json`
- Button family templates: `code-connect/*Button.figma.ts`
- Button Group templates: `code-connect/ButtonGroup*.figma.ts`
- Flag template: `code-connect/Flag.figma.ts`
- ListItem template: `code-connect/ListItem.figma.ts`
- Input templates: `code-connect/Input.figma.ts`, `code-connect/SearchInput.figma.ts`, `code-connect/TextArea.figma.ts`
- DropdownList template: `code-connect/DropdownList.figma.ts`
- Dropdown template: `code-connect/Dropdown.figma.ts`
- Language template: `code-connect/Language.figma.ts`
- CalendarItem template: `code-connect/CalendarItem.figma.ts`
- Calendar template: `code-connect/Calendar.figma.ts`
- DatePicker template: `code-connect/DatePicker.figma.ts`
- Chip templates: `code-connect/Chip.figma.ts`, `code-connect/ChipGroup.figma.ts`
- Breadcrumb templates: `code-connect/Breadcrumb.figma.ts`, `code-connect/BreadcrumbItem.figma.ts`
- Carousel control templates: `code-connect/CarouselControl.figma.ts`, `code-connect/CarouselDot.figma.ts`
- Navigation item template: `code-connect/NavigationItem.figma.ts`
- Logo templates: `code-connect/Logo.figma.ts`, `code-connect/LogoWhite.figma.ts`
- Footer templates: `code-connect/DesktopFooter.figma.ts`, `code-connect/MobileFooter.figma.ts`
- Accordion template: `code-connect/Accordion.figma.ts`
- Desktop Navigation Group template: `code-connect/DesktopNavigationGroupOpen.figma.ts`
- Top Navigation templates: `code-connect/DesktopTopNavigation.figma.ts`, `code-connect/MobileTopNavigation.figma.ts`
- Checkbox template: `code-connect/Checkbox.figma.ts`
- RadioButton template: `code-connect/RadioButton.figma.ts`
- Desktop Switch template: `code-connect/DesktopSwitch.figma.ts`
- Mobile Switch template: `code-connect/MobileSwitch.figma.ts`
- SelectionItem template: `code-connect/SelectionItem.figma.ts`
- SelectionGroup template: `code-connect/SelectionGroup.figma.ts`
- SwitchGroup template: `code-connect/SwitchGroup.figma.ts`
- Avatar template: `code-connect/Avatar.figma.ts`
- Soft Tag template: `code-connect/TagSoft.figma.ts`
- Solid Tag template: `code-connect/TagSolid.figma.ts`
- Tooltip template: `code-connect/Tooltip.figma.ts`
- ProgressBar template: `code-connect/ProgressBar.figma.ts`
- Generated icon templates: `code-connect/icons/*.figma.ts`
- Input contract gaps: `code-connect/INPUT-GAPS.md`

Run `npm run code-connect:build` after changing the icon manifest. Templates
use `.figma.ts` and `figma.code`; `.figma.tsx` / `figma.connect()` mappings are
not used in this repository.

The Figma library currently has source mappings for all 280 icon component
sets. To publish the full parserless templates, set `FIGMA_ACCESS_TOKEN` in the
local shell and run `npm run code-connect:publish`. Existing Button and Input
source-only mappings must be disconnected in Figma before their full templates
can replace them.

Input, SearchInput, and TextArea implement the approved clear, password-visibility, units,
country-selection, search, multiline, and resize contracts. Dropdown composes DropdownList and the
canonical Info, Alert, and Chevron icons. Language composes Flag, DropdownList,
and the canonical Chevron icons. DropdownList composes SearchInput,
ListItem, ButtonGroup, and Button. Behavior lives in focused hooks; labels remain
accessible, and visual decisions remain in ADS components and token CSS.

## Source links

- Button component set: `140:28279` (`Primary-Button`)
- Button default instance: `140:28280`
- Button Group components: `225:476`, `224:401`, `225:477`
- Flag component set: `2181:5614`
- ListItem component set: `2172:851`
- Input component set: `228:2526`
- Input default instance: `228:2525`
- Input/Search component set: `229:2793`
- Input/TextArea component set: `239:581`
- DropdownList component set: `2172:907`
- Dropdown component set: `2172:1208`
- Language component set: `2681:2229`
- Calendar-Item component set: `2181:8155`
- Calendar component set: `5386:1707`
- DatePicker component set: `5420:2631`
- Chips-Filter component set: `2334:6047`
- Chip group component: `5112:2972`
- Breadcrumb component: `2332:3164`
- Breadcrumb-Item component set: `2332:3233`
- Carousel Control component: `2497:239`
- Dots component set: `2496:407`
- Navigation-Item component set: `2334:5718`
- Original logo component: `120:19`
- White logo component: `120:37`
- Desktop Footer component: `2334:6296`
- Mobile Footer component: `2517:647`
- Accordion component set: `2429:1223`
- Desktop navigation group open component: `2434:895`
- Desktop Top-Navigation component: `2334:5664`
- Mobile Top-Navigation component: `2517:555`
- Checkbox component set: `239:1178`
- RadioButton component set: `239:1050`
- Desktop Switch component set: `245:158`
- Mobile Switch component set: `2690:177`
- Selection item component: `244:1236`
- Selection group component: `244:1325`
- Switch group component: `246:798`
- Avatar component set: `2759:256`
- Soft Tag component set: `2768:2266`
- Solid Tag component set: `2779:2953`
- Tooltip component set: `2896:555`
- ProgressBar component set: `2787:2475`
- Icons page: `2020:844`
- Figma file: `amS8gweXJwZXhCNWE8tB1o`

## Local development

```sh
npm install
npm run check
npm run dev
```

The repository is not ready for public npm publishing until font and icon
licensing, package ownership, and the remaining component inventory are
confirmed.

