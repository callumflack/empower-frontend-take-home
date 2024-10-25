# Functional Requirements

Web-app equivalent of its current native mobile application feature set: a one stop shop to aggregate multiple bank accounts.

Feature: A spend tracker defines an amount set (limit) for all transactions across the customer’s
account which meet some search criteria (e.g. category, or transaction name) for a given
time period (weekly or monthly). It should be named/labeled for differentiation and display
purposes.

## User Stories

- [x] view accounts connected with the company w/ balances associated with each account.
- [x] view transaction history for any selected account
  - [x] style this view
- [x] create, view, update, and remove spend trackers: limit + criteria (category or transaction name) + time period (weekly or monthly)
  - [ ] do criteria for more than category?
- [x] visualize their spending over a period of at least 1 week relative to set budget (exceeds/safe) for any pre-determined category

## Task

- produce a layout for the application in any styling method of choice
- create components to build views for each feature
- use hooks for managing application state
- use API provided; adjust any mocked data if necessary
- (not reqd) implement pages and routes using a routing lib
- make various assumptions during your implementation and design to simplify the submission
  - list & reason about assumptions in .md file, e.g. API request/session security will be done using x method for x benefits but this has been excluded from the solution and listed here as an assumption

## Submission and evaluation

- working front-end web app in no more than 5 hours
- submit prior to your onsite interview
- package it appropriately and provide ample documentation where necessary
- technical onsite = discus the design and technical decisions made
