# Resto Genius App Configuration

This document provides detailed information about the `app.config.ts` file, which defines various settings and properties for the Resto Genius application. This configuration is crucial for managing the application's menus, header, and hero section.

## Configuration Structure

The `app.config.ts` file exports an `appConfig` object with the following properties:

### Company Information

- **companyName**: The name of the company (e.g., "Resto Genius").
- **email**: Contact email address for the company.
- **phone**: Contact phone number for the company.
- **address**: Physical address of the company.

### Menus

The configuration includes two main menus: `frontendMenu` and `backendMenu`. Each menu is an array of menu items with specific properties.

#### Menu Item Properties

- **key**: Unique identifier for the menu item.
- **path**: URL path for the menu item. Paths can include route groups, e.g., `(client)/about`.
- **isPage**: Indicates if the menu item corresponds to a page.
- **isClientPage**: Indicates if the page is a client-side rendered page.
- **isUserMenu** (optional): Indicates if the item should appear in the user menu.
- **showInAdminArea** (optional): Indicates if the item should be shown in the admin area.
- **icon**: Icon component for the menu item.

#### Example Configuration

```typescript
export const appConfig = {
  frontendMenu: [
    {
      key: "about",
      path: "(client)/about",
      isPage: true,
      isClientPage: true,
    },
    {
      key: "gallery",
      path: "(client)/gallery",
      isPage: true,
      isClientPage: true,
    },
  ],
  backendMenu: [
    {
      key: "dashboard",
      path: "(administration)/admin/dashboard",
      isPage: true,
      isClientPage: false,
      isUserMenu: true,
      showInAdminArea: false,
      icon: Icons.dashboard,
    },
    {
      key: "test",
      path: "(administration)/admin/test",
      isPage: true,
      isClientPage: true,
    },
  ],
};
```

### Header Configuration

- **applicationName**: Name displayed in the header.
- **authentifcation**: Boolean indicating whether authentication features should be enabled.
- **i18n**: Boolean indicating whether internationalization features should be enabled.
- **logo**: Logo image to be displayed in the header.

### Hero Section

- **backgroundImage**: Source path for the hero section background image.

## Usage

The `app.config.ts` file is used by the CLI to generate pages and manage routes based on the menu configurations. Ensure that the paths and keys are unique and correctly formatted to avoid conflicts.

## Notes

- The configuration should be updated to reflect any changes in the application's structure or requirements.
- Ensure that all paths are valid and correspond to existing or planned routes in the application.
