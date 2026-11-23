# Input Code Connect decisions

The Input contract differences were approved before implementation. This file
records how the Figma properties map to accessible React behavior.

## Approved decisions

- Figma `Show Label=false` never removes the accessible React label. Code
  Connect records the difference in metadata instead of emitting hidden-label
  behavior.
- Units use the typed `units` string prop.
- Country selection uses typed `countryOptions`, controlled/uncontrolled
  values, and `useCountrySelection`. Figma must supply product-specific option
  content before Code Connect can emit those props.
- Filled text variants contain an X action and masked variants contain an Eye
  action. React implements them with canonical ADS icons, accessible button
  labels, `useInputClear`, and `usePasswordVisibility`.
- Figma `focus` and `filled` states are runtime/derived states in React rather
  than consumer props. `disabled` and `error` can be mapped safely.

## Template behavior

`Input.figma.ts` maps label, input text, supporting text, error text, required,
info, type, disabled, filled, and error states. Units and country-selection
booleans are retained as metadata because Figma does not expose their content.
