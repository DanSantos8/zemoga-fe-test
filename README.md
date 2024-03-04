## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## UI

Toggle view

- [ ] Dropdown

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

- [ ] Get the data and map it into People List
- [ ] Implement toggle view
- [ ] Implement thumbs up and down actions + revalidate
- [ ] Implement Vote Now for confirming vote
- [ ] Implement Vote again to reset button section state
- [ ] Add some fancy transitions

## Unit testing

- [ ] People list title renders
- [ ] Toggle view component renders
- [ ] Toggle view component has a value
- [ ] Toggle view component is clickable
- [ ] Toggle view component changes the value

People list

- [ ] Renders
- [ ] Renders all the cards

People Card

- [ ] Renders
- [ ] Render title and description
- [ ] Render posted people days label
- [ ] Render vote section
- [ ] Render gauge bar
- [ ] Renders the correct thumb up/down state based on the data

Vote section

- [ ] Thumbs up / down is clickabel
- [ ] Vote now is initially disabled
- [ ] Vote now is enables after thumbs up / down is clicked
- [ ] Vote again is clickable

## E2E Testing

- [ ] People List - When toggle view is called / changes, the People List renders the right People Card component (List/Grid)
- [ ] Vote section - When a thumb button is clicked, the corresponding state is toggled, and the Vote Now button becomes enabled
- [ ] Vote section - When Vote Now is clicked, the vote is registered, the text updates, and the gauge bar changes
- [ ] Vote section - When Vote Again is clicked, the state of the buttons and text are reset, but the gauge bar remains updated

## Acessibility

- [ ] All interactive components are accessible with keyboard navigation
- [ ] ARIA labels and roles are correctly used for assistive technologies
