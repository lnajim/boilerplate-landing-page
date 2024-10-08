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
  .description("Custom CLI for Resto Genius project management");

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
  const menuMatch = configContent.match(/menu:\s*\[([\s\S]*?)\]/);
  if (!menuMatch) {
    console.error("Could not find menu array in app.config.ts");
    process.exit(1);
  }

  const menuString = menuMatch[1];
  const menuItems = eval(`[${menuString}]`);
  const pageItems = menuItems.filter((item) => item.isPage);

  for (const item of pageItems) {
    const pagePath = item.path.startsWith("/") ? item.path.slice(1) : item.path;
    let fullPath = path.join(__dirname, "app", "[lang]", pagePath);

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

function createReactComponent(pageName) {
  return `import React from 'react';

export default function ${
    pageName.charAt(0).toUpperCase() + pageName.slice(1)
  }Page() {
  return (
    <div>
      <h1>${pageName.charAt(0).toUpperCase() + pageName.slice(1)} Page</h1>
      <p>This is the ${pageName} page content.</p>
    </div>
  );
}
`;
}

async function createNewPage() {
  const { pageType } = await inquirer.prompt([
    {
      type: "list",
      name: "pageType",
      message: "Where do you want to create the new page?",
      choices: ["(administration)", "(client)", "(other)"],
    },
  ]);

  let basePath = path.join(__dirname, "app", "[lang]");
  let isClientPage = false;
  let newFolderName = "";
  let routePath = "";

  const { routeName } = await inquirer.prompt([
    {
      type: "input",
      name: "routeName",
      message: "Enter the name of the new page:",
      validate: (input) => input.trim() !== "" || "Page name cannot be empty",
    },
  ]);

  if (pageType === "(administration)") {
    const { adminChoice } = await inquirer.prompt([
      {
        type: "list",
        name: "adminChoice",
        message: "Where in (administration) do you want to create the page?",
        choices: ["Under admin folder", "New location"],
      },
    ]);

    if (adminChoice === "Under admin folder") {
      basePath = path.join(basePath, "(administration)", "admin");
      isClientPage = true;
      routePath = `(administration)/admin/${routeName}`;
    } else {
      basePath = path.join(basePath, "(administration)");
      routePath = `(administration)/${routeName}`;
    }
  } else if (pageType === "(client)") {
    basePath = path.join(basePath, "(client)");
    isClientPage = true;
    routePath = `(client)/${routeName}`;
  } else if (pageType === "(other)") {
    const { folderName } = await inquirer.prompt([
      {
        type: "input",
        name: "folderName",
        message: "Enter the name of the new folder:",
        validate: (input) =>
          input.trim() !== "" || "Folder name cannot be empty",
      },
    ]);
    newFolderName = folderName.trim();
    basePath = path.join(basePath, `(${newFolderName})`);
    routePath = `(${newFolderName})/${routeName}`;

    // Create layout.tsx in the new folder
    const layoutPath = path.join(basePath, "layout.tsx");
    const layoutContent = `
import React from 'react';

export default function ${
      newFolderName.charAt(0).toUpperCase() + newFolderName.slice(1)
    }Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>${
        newFolderName.charAt(0).toUpperCase() + newFolderName.slice(1)
      } Layout</h1>
      {children}
    </div>
  );
}
`;
    await fs.mkdir(basePath, { recursive: true });
    await fs.writeFile(layoutPath, layoutContent);
    console.log(`Created layout.tsx in ${basePath}`);
  }

  const fullPath = path.join(basePath, routeName);

  try {
    await fs.mkdir(fullPath, { recursive: true });
    const pageContent = `
import React from 'react';

export default function ${
      routeName.charAt(0).toUpperCase() + routeName.slice(1)
    }Page() {
  return (
    <div>
      <h1>${routeName}</h1>
    </div>
  );
}
`;
    await fs.writeFile(path.join(fullPath, "page.tsx"), pageContent);
    console.log(`Created new page: ${path.join(fullPath, "page.tsx")}`);

    // Add the new route to app.config.ts
    await addRouteToConfig(routeName, routePath, isClientPage);
  } catch (error) {
    console.error("Error creating new page:", error);
  }
}

async function addRouteToConfig(routeName, routePath, isClientPage) {
  const configPath = path.join(__dirname, "app.config.ts");
  let configContent = await fs.readFile(configPath, "utf8");

  const newMenuItem = `
    {
      key: "${routeName}",
      path: "${routePath}",
      isPage: true,
      isClientPage: ${isClientPage},
    },`;

  const menuRegex = /(menu:\s*\[)([\s\S]*?)(\])/;
  const match = configContent.match(menuRegex);

  if (match) {
    const updatedMenu = match[1] + match[2] + newMenuItem + match[3];
    configContent = configContent.replace(menuRegex, updatedMenu);

    await fs.writeFile(configPath, configContent);
    console.log(`Added new route to app.config.ts: ${routeName}`);
  } else {
    console.error("Could not find menu array in app.config.ts");
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
