import { useState } from "react";
import { ChevronRightIcon, StarIcon } from "@ads/icons";
import {
  Button,
  ButtonGroup,
  Calendar,
  CalendarItem,
  Chip,
  ChipGroup,
  Avatar,
  Checkbox,
  Flag,
  Input,
  Language,
  SearchInput,
  DropdownList,
  Dropdown,
  ListItem,
  RadioButton,
  SelectionGroup,
  SelectionItem,
  ProgressBar,
  Switch,
  SwitchGroup,
  Tag,
  Tooltip
} from "@ads/ui-web";

export function App() {
  const [name, setName] = useState("");

  return (
    <main>
      <header>
        <p>Adesso Design System</p>
        <h1>ADS component playground</h1>
      </header>

      <section aria-labelledby="buttons-title">
        <h2 id="buttons-title">Button</h2>
        <div className="showcase-row">
          <Button size="large">Button</Button>
          <Button size="medium">Button</Button>
          <Button size="small">Button</Button>
          <Button variant="secondary" trailingIcon={<ChevronRightIcon size="md" />}>
            Secondary
          </Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className="component-grid button-group-showcase">
          <ButtonGroup aria-label="Primary and icon actions">
            <Button size="large" leadingIcon={<ChevronRightIcon size="lg" />}>Button</Button>
            <Button variant="icon-only" size="large" aria-label="Continue">
              <ChevronRightIcon size="lg" />
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Horizontal actions">
            <Button variant="secondary" size="large">Button</Button>
            <Button size="large" leadingIcon={<ChevronRightIcon size="lg" />}>Button</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Vertical actions" orientation="vertical">
            <Button size="large" leadingIcon={<ChevronRightIcon size="lg" />}>Button</Button>
            <Button variant="secondary" size="large">Button</Button>
            <Button variant="ghost" size="large">Button</Button>
          </ButtonGroup>
        </div>
      </section>

      <section aria-labelledby="flags-title">
        <h2 id="flags-title">Flag</h2>
        <div className="flag-showcase">
          <div className="showcase-row">
            <Flag country="turkey" label="Turkey" />
            <Flag country="saudi-arabia" label="Saudi Arabia" />
            <Flag country="usa" label="USA" />
            <Flag country="spain" label="Spain" />
            <Flag country="germany" label="Germany" />
          </div>
          <div className="showcase-row">
            <Flag country="turkey" size="lg" label="Turkey" />
            <Flag country="saudi-arabia" size="lg" label="Saudi Arabia" />
            <Flag country="usa" size="lg" label="USA" />
            <Flag country="spain" size="lg" label="Spain" />
            <Flag country="germany" size="lg" label="Germany" />
          </div>
        </div>
      </section>

      <section aria-labelledby="inputs-title">
        <h2 id="inputs-title">Input</h2>
        <div className="input-grid">
          <Input
            label="Label Text"
            required
            showInfo
            supportingText="Supporting text"
            placeholder="Placeholder"
          />
          <Input
            label="Label Text"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            supportingText="Focus or type to inspect runtime states"
            placeholder="Placeholder"
          />
          <Input label="Label Text" value="Disabled" disabled supportingText="Supporting text" />
          <Input label="Label Text" errorMessage="Error Text" placeholder="Placeholder" />
          <Input label="Password" typeVariant="masked" defaultValue="secret" />
          <Input
            label="Phone"
            countryOptions={[
              { label: "TR +90", value: "TR" },
              { label: "DE +49", value: "DE" }
            ]}
            units="mobile"
            placeholder="555 000 00 00"
            showPasswordToggle={false}
          />
          <SearchInput aria-label="Search options" placeholder="Placeholder" />
          <SearchInput aria-label="Search filled options" defaultValue="Search query" />
          <SearchInput aria-label="Search disabled options" placeholder="Placeholder" disabled />
          <SearchInput aria-label="Search with error" defaultValue="Invalid query" error />
        </div>
      </section>

      <section aria-labelledby="dropdown-list-title">
        <h2 id="dropdown-list-title">DropdownList</h2>
        <DropdownList
          aria-label="Country options"
          options={[
            { label: "Turkey", value: "tr" },
            { label: "Germany", value: "de" },
            { label: "Spain", value: "es" },
            { label: "Saudi Arabia", value: "sa" },
            { label: "United States", value: "us" }
          ]}
        />
      </section>

      <section aria-labelledby="dropdown-title">
        <h2 id="dropdown-title">Dropdown</h2>
        <div className="input-grid">
          <Dropdown
            label="Country"
            required
            showInfo
            supportingText="Choose one or more countries"
            options={[
              { label: "Turkey", value: "tr" },
              { label: "Germany", value: "de" },
              { label: "Spain", value: "es" },
              { label: "Saudi Arabia", value: "sa" },
              { label: "United States", value: "us" }
            ]}
          />
          <Dropdown
            label="Filled country"
            multiple={false}
            defaultValue={["de"]}
            options={[
              { label: "Turkey", value: "tr" },
              { label: "Germany", value: "de" }
            ]}
          />
          <Dropdown label="Disabled country" options={[]} disabled />
          <Dropdown label="Country with error" options={[]} errorMessage="Error Text" />
        </div>
      </section>

      <section aria-labelledby="language-title">
        <h2 id="language-title">Language</h2>
        <Language
          aria-label="Language"
          options={[
            { country: "turkey", label: "Türkçe", value: "tr" },
            { country: "usa", label: "English", value: "en" },
            { country: "germany", label: "Deutsch", value: "de" },
            { country: "spain", label: "Español", value: "es" },
            { country: "saudi-arabia", label: "العربية", value: "ar" }
          ]}
        />
      </section>

      <section aria-labelledby="calendar-item-title">
        <h2 id="calendar-item-title">CalendarItem</h2>
        <div className="showcase-row">
          <CalendarItem aria-label="Default day 30" label={30} />
          <CalendarItem aria-label="Selected day 30" label={30} selected />
          <CalendarItem aria-label="Range day 30" label={30} inRange />
          <CalendarItem aria-label="Disabled day 30" label={30} disabled />
          <CalendarItem aria-label="Hidden day 30" label={30} hidden />
        </div>
      </section>

      <section aria-labelledby="calendar-title">
        <h2 id="calendar-title">Calendar</h2>
        <div className="showcase-row">
          <Calendar
            aria-label="Day calendar"
            defaultValue={new Date(2025, 8, 9)}
            defaultDisplayedMonth={new Date(2025, 8, 1)}
          />
          <Calendar
            aria-label="Month calendar"
            period="month"
            locale="tr-TR"
            defaultValue={new Date(2025, 7, 1)}
            defaultDisplayedMonth={new Date(2025, 7, 1)}
          />
        </div>
      </section>

      <section aria-labelledby="chips-title">
        <h2 id="chips-title">Chips</h2>
        <div className="component-grid">
          <div className="showcase-row">
            <Chip size="large" icon={<StarIcon size="md" />}>Filter</Chip>
            <Chip size="medium" icon={<StarIcon size="sm" />} defaultSelected>Filter</Chip>
            <Chip size="small" icon={<StarIcon size="xs" />}>Filter</Chip>
            <Chip size="medium" icon={<StarIcon size="sm" />} disabled>Filter</Chip>
          </div>
          <ChipGroup aria-label="Content filters">
            <Chip size="medium" icon={<StarIcon size="sm" />} defaultSelected>Filter</Chip>
            <Chip size="medium" icon={<StarIcon size="sm" />}>Filter</Chip>
            <Chip size="medium" icon={<StarIcon size="sm" />}>Filter</Chip>
            <Chip size="medium" icon={<StarIcon size="sm" />}>Filter</Chip>
            <Chip size="medium" icon={<StarIcon size="sm" />}>Filter</Chip>
          </ChipGroup>
        </div>
      </section>

      <section aria-labelledby="list-item-title">
        <h2 id="list-item-title">ListItem</h2>
        <div className="list-item-showcase" role="listbox" aria-label="List item states">
          <ListItem label="Default option" />
          <ListItem label="Selected option" selected />
          <ListItem label="Disabled option" disabled />
          <ListItem label="Option without checkbox" showCheckbox={false} />
        </div>
      </section>

      <section aria-labelledby="selection-title">
        <h2 id="selection-title">Selection</h2>
        <div className="showcase-row">
          <Checkbox aria-label="Default checkbox" />
          <Checkbox aria-label="Selected checkbox" defaultChecked />
          <Checkbox aria-label="Indeterminate checkbox" indeterminate />
          <Checkbox aria-label="Disabled checkbox" disabled />
          <Checkbox aria-label="Error checkbox" error />
          <RadioButton aria-label="First radio option" name="playground-radio" defaultChecked />
          <RadioButton aria-label="Second radio option" name="playground-radio" />
          <RadioButton aria-label="Disabled radio option" name="playground-radio" disabled />
          <RadioButton aria-label="Error radio option" name="playground-radio" error />
          <Switch aria-label="Desktop inactive switch" />
          <Switch aria-label="Desktop active switch" defaultChecked />
          <Switch aria-label="Desktop disabled switch" disabled />
          <Switch aria-label="Mobile inactive switch" size="mobile" />
          <Switch aria-label="Mobile active switch" size="mobile" defaultChecked />
          <Switch aria-label="Mobile disabled switch" size="mobile" disabled />
        </div>
        <div className="component-grid">
          <SelectionGroup aria-label="Plan selection">
            <SelectionItem
              type="radio"
              label="Starter plan"
              description="For small teams"
              name="plan"
              defaultChecked
            />
            <SelectionItem
              type="radio"
              label="Growth plan"
              description="For growing companies"
              name="plan"
            />
          </SelectionGroup>
          <SwitchGroup
            label="Product updates"
            description="Receive release announcements"
            defaultChecked
          />
          <div className="showcase-row">
            <Avatar type="initial" initials="GO" aria-label="Gamze Orhanoğlu" size="large" />
            <Avatar type="initial" initials="GO" aria-label="Gamze Orhanoğlu" size="medium" shape="square" showBadge />
            <Avatar type="initial" initials="GO" aria-label="Gamze Orhanoğlu" size="small" />
          </div>
          <div className="showcase-row">
            <Tag variant="soft" color="brand" size="large" icon={<StarIcon size="md" />}>Brand</Tag>
            <Tag variant="soft" color="green" icon={<StarIcon size="sm" />}>Success</Tag>
            <Tag variant="solid" color="orange" size="small" icon={<StarIcon size="xs" />}>Warning</Tag>
            <Tag variant="solid" color="red">Error</Tag>
          </div>
        </div>
      </section>

      <section aria-labelledby="feedback-primitives-title">
        <h2 id="feedback-primitives-title">Feedback primitives</h2>
        <div className="component-grid">
          <div className="showcase-row tooltip-showcase">
            <Tooltip title="Title" bodyText="Lorem ipsum" placement="top" />
            <Tooltip title="Title" bodyText="Lorem ipsum" placement="bottom" color="dark" />
            <Tooltip title="Title" bodyText="Lorem ipsum" placement="right" />
            <Tooltip title="Title" bodyText="Lorem ipsum" placement="left" color="dark" />
          </div>
          <div className="progress-showcase">
            <ProgressBar label="Label Text" value={64} type="brand" size="small" />
            <ProgressBar label="Label Text" value={64} type="green" size="medium" />
            <ProgressBar label="Label Text" value={64} type="red" size="large" />
          </div>
        </div>
      </section>
    </main>
  );
}

