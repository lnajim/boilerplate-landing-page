# Resto Genius CLI Documentation

This document provides detailed information about the custom Command Line Interface (CLI) tool for managing the Resto Genius project. The CLI offers commands to generate pages and start an interactive mode for creating new pages and managing routes.

## Installation

To use this CLI, ensure you have Node.js installed on your system. Then, clone the repository and navigate to the project directory.

```bash
git clone <repository-url>
cd <project-directory>
```

Make the CLI executable:

```bash
chmod +x cli.js
```

## Usage

Run the CLI using the following command:

```bash
./cli.js <command>
```

## Commands

### `generate`

Generates pages based on the configuration specified in `app.config.ts`.

#### Usage

```bash
./cli.js generate
```

#### Description

- Reads the `frontendMenu` and `backendMenu` arrays from `app.config.ts`.
- Creates directories and page files for each menu item marked as a page.
- If a directory already exists, prompts the user to confirm overwriting.

#### Example

```bash
./cli.js generate
```

### `interactive`

Starts an interactive mode where you can generate pages or create new pages with additional options.

#### Usage

```bash
./cli.js interactive
```

#### Description

- Provides a menu to choose between generating pages, creating a new page, or exiting.
- Allows creating new route groups and pages interactively.
- Updates `app.config.ts` and `routes.ts` with new routes.

#### Example

```bash
./cli.js interactive
```

## Interactive Mode Details

When you choose to create a new page in interactive mode, you will be prompted to:

1. Select an existing route group or create a new one.
2. Enter the full route path.
3. Choose the route type (Public, Auth, Private).
4. Select the menu type (frontend, backend).

The CLI will then:

- Create necessary directories and files.
- Update `app.config.ts` with the new route.
- Update `routes.ts` with the new route.

## Configuration

The CLI relies on `app.config.ts` for menu configurations. Ensure this file is correctly formatted with `frontendMenu` and `backendMenu` arrays.

## Error Handling

- If `frontendMenu` or `backendMenu` arrays are not found in `app.config.ts`, the CLI will exit with an error message.
- If a directory already exists during page generation, the CLI will prompt for confirmation to overwrite.

## License

This project is licensed under the MIT License.
