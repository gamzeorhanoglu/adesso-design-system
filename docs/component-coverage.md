# ADS component coverage

Bu envanter, ADS Figma dosyasının tüm gerçek component sayfalarının programatik
taramasıdır. İki `--` sayfası dosya ayıracıdır ve ürün komponenti içermez.

## Özet

- 337 component seti
- 37 standalone component
- 2.222 varyant veya standalone öğe
- 281 icon seti kodda hazır: 280 ADS ikonu + 10 varyantlı `Flag` component seti
- İkonlar dışında 57 component seti
- Kod kapsamındaki non-icon set: 45 (önceki kapsam + `Card-Content` ve `Card-ExternalLink`)
- Eksik non-icon set: 12
- Kod kapsamındaki standalone component: 24 (önceki kapsam + `tabgroup/primary` ve `tabgroup/secondary`)

Button ailesindeki altı ayrı Figma seti tek `Button` React API'sine karşılık
gelir. Input, Search ve TextArea form kontrolleri hazırdır.

## Sayfa bazında kapsam

| Sayfa | Set | Standalone | Varyant/öğe | Kod kapsamı | Eksik |
|---|---:|---:|---:|---:|---:|
| Icons | 281 | 0 | 1.690 | 281 | 0 |
| Accordion | 1 | 0 | 6 | 1 | 0 |
| Avatar | 1 | 0 | 12 | 1 | 0 |
| Brand | 0 | 8 | 8 | 4 | 4 |
| Breadcrumb | 1 | 1 | 5 | 2 | 0 |
| Buttons | 6 | 5 | 197 | 9 | 0 |
| Calendar | 2 | 0 | 8 | 2 | 0 |
| Cards | 4 | 1 | 15 | 2 | 3 |
| Carousel | 0 | 2 | 2 | 0 | 2 |
| Chips | 1 | 1 | 13 | 2 | 0 |
| Date Picker | 1 | 0 | 6 | 1 | 0 |
| Dialog | 2 | 0 | 8 | 2 | 0 |
| Dropdown | 3 | 0 | 13 | 3 | 0 |
| Icons | 1 | 0 | 10 | 1 | 0 |
| Inputs | 3 | 0 | 20 | 3 | 0 |
| Navigation | 2 | 8 | 17 | 10 | 0 |
| Notification | 2 | 1 | 13 | 0 | 3 |
| Pagination | 2 | 1 | 11 | 3 | 0 |
| Partner Logo Grid | 1 | 2 | 4 | 0 | 3 |
| Progress Bar | 1 | 0 | 15 | 1 | 0 |
| Selection | 2 | 2 | 16 | 4 | 0 |
| Sidebar | 3 | 0 | 18 | 3 | 0 |
| Stepper | 3 | 1 | 14 | 4 | 0 |
| Switch | 3 | 1 | 16 | 4 | 0 |
| Tab | 2 | 2 | 26 | 4 | 0 |
| Table | 6 | 1 | 23 | 0 | 7 |
| Tags | 2 | 0 | 30 | 2 | 0 |
| Toasts | 1 | 0 | 8 | 0 | 1 |
| Tooltip | 1 | 0 | 8 | 1 | 0 |

## Aktarım sırası

### 0. Hazır kapsam

`Destructive-Button`, `Ghost-Button`, `IconOnly-Button`, `Outline-Button`, `Primary-Button`, `Secondary-Button`, `buttongroup/icon+button`, `buttongroup/stack_horizontal`, `buttongroup/stack_vertical`, `flag`, `Accordion`, `Input`, `Input/Search`, `Input/TextArea`, `DropdownList`, `Dropdown`, `Language`, `Calendar`, `Calendar-Item`, `DatePicker`, `Desktop/Dialog`, `Mobile/Dialog`, `Chips-Filter`, `chipsgroup/filter`, `Breadcrumb`, `Breadcrumb-Item`, `Carousel Control`, `Dots`, `Navigation-Item`, `logo/original`, `logo/white`, `favicon/original`, `favicon/white`, `Desktop/Footer`, `Mobile/Footer`, `Desktop/navigationgroup/top_open`, `Desktop/Top-Navigation`, `Mobile/Top-Navigation`, `Checkbox`, `RadioButton`, `ListItem`, `selectiongroup/label`, `selectiongroup/listing`, `Desktop/Switch Button`, `Mobile/Switch Button`, `switchgroup/label`, `Avatar`, `Tags/Soft`, `Tags/Solid`, `Tooltip`, `ProgressBar`, `Sidebar`, `Sidebar-Item`, `Sidebar-Item/Profile`, `DektoConnector`, `Desktop/Steps`, `Mobile/Steps`, `Stepper`, `Primary Tab`, `Secondary Tab`, `tabgroup/primary`, `tabgroup/secondary`

### 1. Temel primitives

Tamamlandı.

### 2. Form kontrolleri

Tamamlandı.

### 3. Navigasyon

Tamamlandı.

### 4. Feedback ve overlays

`Desktop/Dialog`, `Mobile/Dialog`, `Notification/List`, `Notification/Message`, `notificationgroup`, `Messages`

### 5. Data ve composites

`Card-ExternalLink`, `Card-KPI`, `Card-News&Blog`, `Card-Stats`, `Desktop/Carousel`, `Mobile/Carousel`, `Logo Asset / Akbank`, `Logo Tile`, `Partner Logo Grid/6`, `Header`, `Table`, `Table/Cell`, `Table/Empty`, `Table/Footer`, `Table/Header Cell`, `Table/Row`

`Card-Content` is implemented as `CardContent` with desktop/mobile layouts,
default/hover/disabled states, optional image/text/action slots, and an ADS
Ghost Button action.

`Card-ExternalLink` is implemented as `CardExternalLink` with default/hover
states, editable title and description, and an optional ADS Secondary Button
action.

### 6. Brand ve shell

`Footer`, `Header`, `lime/original`, `lime/white`

## Her komponent için zorunlu teslim kriteri

Bir komponent ancak aşağıdakilerin tamamı bittikten sonra “hazır” sayılır:

1. Figma component property ve varyant sözleşmesi kaydedilir.
2. `ads.config.json` node eşleşmesi eklenir.
3. React API ve ADS token tabanlı CSS uygulanır.
4. Etkileşim gerekiyorsa odaklı hook oluşturulur.
5. Erişilebilirlik ve davranış testleri yazılır.
6. Parserless `.figma.ts` Code Connect şablonu eklenir.
7. Playground örneği ve kullanım dokümantasyonu güncellenir.
8. `npm run check` ve ADS audit geçer.

## İlk uygulama paketi

Phase 1, Phase 2 ve Phase 3 tamamlandı. Phase 4'te Dialog tamamlandı. Phase 5'te
`Card-Content` ve `Card-ExternalLink` tamamlandı; sıradaki Card varyantları
`Card-KPI`, `Card-News&Blog` ve `Card-Stats`.

Makine-okunur kaynak: `docs/figma-component-inventory.json`.

