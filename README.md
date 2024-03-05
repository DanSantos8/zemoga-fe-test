## Getting Started

Run json-server and development server:

```bash
pnpm run json-server
pnpm run dev
```

You can check the tests coverage by running:

```bash
pnpm run test --coverage
```

## UI

Toggle view

- [x] Dropdown

Buttons

- [x] Vote now
- [x] Vote again
- [x] Thumbs up / down

People Card

- [x] Vote section
- [x] Name
- [x] Description
- [x] Gauge bar

People Card List

- [x] Vote section
- [x] Name
- [x] Description
- [x] Gauge bar

- [x] People List

## Features

- [x] Get the data and map it into People List
- [x] Implement toggle view
- [x] Map people list for different visualizations/list view type
- [x] Map people list as Grid view for mobile devices - out at 768px
- [x] Implement thumbs up and down actions + revalidate
- [x] Implement Vote Now for confirming vote
- [x] Implement Vote again to reset button to default state

## Unit testing

- [x] People list title renders
- [x] Toggle view component renders
- [x] Toggle view component has a value
- [x] Toggle view component is clickable
- [x] Toggle view component changes the value

People list

- [x] Renders
- [x] Renders all the cards

People Card

- [x] Renders
- [x] Render title and description
- [x] Render posted people days label
- [x] Render vote section
- [x] Render gauge bar
- [x] Renders the correct thumb up/down state based on the data

Voting

- [x] Thumbs up / down is clickable
- [x] Vote now is initially disabled
- [x] Vote now is enables after thumbs up / down is clicked
- [x] Vote again is clickable
- [x] Vote again resets to default state when clicked
