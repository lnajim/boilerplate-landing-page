#!/usr/bin/env node

import { program } from "commander";
import fs from "fs/promises";
import path from "path";
import inquirer from "inquirer";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

program
  .version("1.0.0")
  .description("Custom CLI for Resto Genius project management")
  .option("-h, --help", "Display help for command");

program
  .command("generate")
  .description("Generate pages based on app.config.ts")
  .action(generatePages);

program
  .command("interactive")
  .description("Start interactive mode")
  .action(startInteractiveMode);

async function generatePages() {
  const configPath = path.join(__dirname, "app.config.ts");
  const configContent = await fs.readFile(configPath, "utf8");

  const frontendMenuMatch = configContent.match(
    /frontendMenu:\s*\[([\s\S]*?)\]/
  );
  const backendMenuMatch = configContent.match(/backendMenu:\s*\[([\s\S]*?)\]/);

  if (!frontendMenuMatch && !backendMenuMatch) {
    console.error(
      "Could not find frontendMenu or backendMenu arrays in app.config.ts"
    );
    process.exit(1);
  }

  const menuItems = [];

  if (frontendMenuMatch) {
    menuItems.push(...parseMenuItems(frontendMenuMatch[1]));
  }

  if (backendMenuMatch) {
    menuItems.push(...parseMenuItems(backendMenuMatch[1]));
  }

  for (const item of menuItems) {
    const pagePath = item.path.startsWith("/") ? item.path.slice(1) : item.path;
    const fullPath = path.join(
      __dirname,
      "app",
      "[lang]",
      ...pagePath.split("/")
    );

    // Check if the directory already exists
    try {
      await fs.access(fullPath);
      console.log(`Directory already exists: ${fullPath}`);
      const { overwrite } = await inquirer.prompt([
        {
          type: "confirm",
          name: "overwrite",
          message: `Directory ${fullPath} already exists. Do you want to overwrite it?`,
          default: false,
        },
      ]);
      if (!overwrite) {
        console.log(`Skipping ${fullPath}`);
        continue;
      }
    } catch (error) {
      // Directory doesn't exist, we can proceed
    }

    // Create all necessary directories
    await fs.mkdir(fullPath, { recursive: true });

    const pageName = path.basename(pagePath);
    const pageContent = createReactComponent(pageName);

    // Write the file
    await fs.writeFile(path.join(fullPath, "page.tsx"), pageContent);

    console.log(`Created page: ${path.join(fullPath, "page.tsx")}`);
  }

  console.log("Page generation complete!");
}

function parseMenuItems(menuString) {
  return menuString
    .split("},")
    .map((item) => {
      const keyMatch = item.match(/key:\s*["'](.+?)["']/);
      const pathMatch = item.match(/path:\s*["'](.+?)["']/);
      const isPageMatch = item.match(/isPage:\s*(true|false)/);
      return {
        key: keyMatch ? keyMatch[1] : null,
        path: pathMatch ? pathMatch[1] : null,
        isPage: isPageMatch ? isPageMatch[1] === "true" : false,
      };
    })
    .filter((item) => item.key && item.path && item.isPage);
}

function createReactComponent(pageName) {
  // Remove any non-alphanumeric characters and convert to camel case
  const camelCaseName = pageName
    .split(/[^a-zA-Z0-9]/) // Split by any non-alphanumeric character
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  return `import React from 'react';

export default function ${camelCaseName}Page() {
  return (
    <div>
      <h1>${camelCaseName} Page</h1>
      <p>This is the ${camelCaseName} page content.</p>
    </div>
  );
}
`;
}

async function createNewPage() {
  // Read the existing route groups from the filesystem
  const appDir = path.join(__dirname, "app", "[lang]");
  const existingGroups = await fs.readdir(appDir);

  // Filter out non-directory entries and format group names
  const routeGroups = existingGroups
    .filter((name) => name.startsWith("(") && name.endsWith(")"))
    .map((name) => name.slice(1, -1)); // Remove parentheses

  // Add an option to create a new group
  routeGroups.push("Create new group");

  const { selectedGroup } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedGroup",
      message: "Select a route group or create a new one:",
      choices: routeGroups,
    },
  ]);

  let groupName;
  if (selectedGroup === "Create new group") {
    const { newGroupName } = await inquirer.prompt([
      {
        type: "input",
        name: "newGroupName",
        message: "Enter the name for the new group:",
        validate: (input) =>
          input.trim() !== "" || "Group name cannot be empty",
      },
    ]);
    groupName = newGroupName;
  } else {
    groupName = selectedGroup;
  }

  const { routeName } = await inquirer.prompt([
    {
      type: "input",
      name: "routeName",
      message: "Enter the full route path (e.g., dashboard):",
      validate: (input) => input.trim() !== "" || "Route path cannot be empty",
    },
  ]);

  const { routeType } = await inquirer.prompt([
    {
      type: "list",
      name: "routeType",
      message: "Where should this route be categorized?",
      choices: ["Public", "Auth", "Private"],
    },
  ]);

  const { menuType } = await inquirer.prompt([
    {
      type: "list",
      name: "menuType",
      message: "Which menu should this route be added to?",
      choices: ["frontend", "backend"],
    },
  ]);

  // New prompts for additional options
  const { isPage } = await inquirer.prompt([
    {
      type: "confirm",
      name: "isPage",
      message: "Is this a page?",
      default: true,
    },
  ]);

  const { isClientPage } = await inquirer.prompt([
    {
      type: "confirm",
      name: "isClientPage",
      message: "Is this a client-side rendered page?",
      default: true,
    },
  ]);

  const { isUserMenu } = await inquirer.prompt([
    {
      type: "confirm",
      name: "isUserMenu",
      message: "Should this appear in the user menu?",
      default: false,
    },
  ]);

  const { showInAdminArea } = await inquirer.prompt([
    {
      type: "confirm",
      name: "showInAdminArea",
      message: "Should this be shown in the admin area?",
      default: false,
    },
  ]);

  const routeParts = routeName.split("/");
  const basePath = path.join(appDir, `(${groupName})`);
  const fullPath = path.join(basePath, ...routeParts);

  try {
    // Create the main layout for the new group route if it doesn't exist
    const layoutPath = path.join(basePath, "layout.tsx");
    try {
      await fs.access(layoutPath);
    } catch (error) {
      // If access fails, the file doesn't exist, so create it
      const layoutContent = `
import React from 'react';

export default function ${
        groupName.charAt(0).toUpperCase() + groupName.slice(1)
      }Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>${groupName.charAt(0).toUpperCase() + groupName.slice(1)} Layout</h1>
      {children}
    </div>
  );
}
`;
      await fs.mkdir(basePath, { recursive: true });
      await fs.writeFile(layoutPath, layoutContent);
      console.log(`Created layout.tsx in ${basePath}`);
    }

    // Create the new page
    await fs.mkdir(fullPath, { recursive: true });
    const pageContent = `
import React from 'react';

export default function ${
      routeParts[routeParts.length - 1].charAt(0).toUpperCase() +
      routeParts[routeParts.length - 1].slice(1)
    }Page() {
  return (
    <div>
      <h1>${routeParts[routeParts.length - 1]}</h1>
    </div>
  );
}
`;
    await fs.writeFile(path.join(fullPath, "page.tsx"), pageContent);
    console.log(`Created new page: ${path.join(fullPath, "page.tsx")}`);

    // Add the new route to app.config.ts
    await addRouteToConfig(
      routeParts[routeParts.length - 1],
      routeName,
      isClientPage,
      menuType,
      groupName,
      isPage,
      isUserMenu,
      showInAdminArea
    );

    // Add the new route to routes.ts
    await addRouteToRoutesFile(routeName, routeType);
  } catch (error) {
    console.error("Error creating new page:", error);
  }
}

async function addRouteToConfig(
  routeName,
  routePath,
  isClientPage,
  menuType,
  groupName,
  isPage,
  isUserMenu,
  showInAdminArea
) {
  const configPath = path.join(__dirname, "app.config.ts");
  let configContent = await fs.readFile(configPath, "utf8");

  // Ensure the route path starts with a slash
  const fullPath = `(${groupName})/${
    routePath.startsWith("/") ? routePath.slice(1) : routePath
  }`;

  const newMenuItem = `
    {
      key: "${routeName}",
      path: "${fullPath}",
      isPage: ${isPage},
      isClientPage: ${isClientPage},
      isUserMenu: ${isUserMenu},
      showInAdminArea: ${showInAdminArea},
    },`;

  const menuRegex = new RegExp(`(${menuType}Menu:\\s*\\[)([\\s\\S]*?)(\\])`);
  const match = configContent.match(menuRegex);

  if (match) {
    const updatedMenu = match[1] + match[2] + newMenuItem + match[3];
    configContent = configContent.replace(menuRegex, updatedMenu);

    await fs.writeFile(configPath, configContent);
    console.log(
      `Added new route to ${menuType}Menu in app.config.ts: ${routeName}`
    );
  } else {
    console.error(`Could not find ${menuType}Menu array in app.config.ts`);
  }
}

async function addRouteToRoutesFile(routeName, routeType) {
  const routesPath = path.join(__dirname, "routes.ts");
  let routesContent = await fs.readFile(routesPath, "utf8");

  // Ensure the route name starts with a slash
  const cleanedRouteName = `/${routeName.replace(/\(.*?\)\//, "")}`;

  const routeEntry = `...i18n.locales.map((locale) => \`/\${locale}${cleanedRouteName}\`),`;

  let regex;
  switch (routeType) {
    case "Public":
      regex = /(export const publicRoutes: string\[\] = \[)([\s\S]*?)(\];)/;
      break;
    case "Auth":
      regex = /(export const authRoutes: string\[\] = \[)([\s\S]*?)(\];)/;
      break;
    case "Private":
      regex = /(export const privateRoutes: string\[\] = \[)([\s\S]*?)(\];)/;
      break;
    default:
      console.error("Invalid route type");
      return;
  }

  const match = routesContent.match(regex);
  if (match) {
    const updatedRoutes = match[1] + match[2] + routeEntry + match[3];
    routesContent = routesContent.replace(regex, updatedRoutes);

    await fs.writeFile(routesPath, routesContent);
    console.log(`Added new route to ${routeType} routes: ${cleanedRouteName}`);
  } else {
    console.error(`Could not find ${routeType} routes array in routes.ts`);
  }
}

async function startInteractiveMode() {
  const actions = [
    { name: "Generate pages", value: "generate" },
    { name: "Create new page", value: "create" },
    { name: "Exit", value: "exit" },
  ];

  while (true) {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: actions,
      },
    ]);

    if (action === "exit") {
      console.log("Goodbye!");
      process.exit(0);
    }

    switch (action) {
      case "generate":
        await generatePages();
        break;
      case "create":
        await createNewPage();
        break;
      default:
        console.log("Invalid action");
    }

    console.log("\n");
  }
}

program.parse(process.argv);
