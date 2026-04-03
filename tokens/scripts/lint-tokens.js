#!/usr/bin/env node
/**
 * Lint design token JSON files.
 * Validates that each token file is valid JSON and that every leaf node
 * that represents a token has the required $value and $type properties.
 */

const fs = require("fs");
const path = require("path");

const TOKEN_DIRS = [
  path.resolve(__dirname, "../global"),
  path.resolve(__dirname, "../themes"),
];

let hasErrors = false;

function isTokenNode(obj) {
  return typeof obj === "object" && obj !== null && "$value" in obj;
}

function validateNode(obj, filePath, keyPath) {
  if (isTokenNode(obj)) {
    if (!("$type" in obj)) {
      console.error(`[ERROR] ${filePath}: token at "${keyPath}" is missing required "$type" property.`);
      hasErrors = true;
    }
    return;
  }
  if (typeof obj === "object" && obj !== null) {
    for (const [key, value] of Object.entries(obj)) {
      if (key.startsWith("$")) continue;
      validateNode(value, filePath, keyPath ? `${keyPath}.${key}` : key);
    }
  }
}

for (const dir of TOKEN_DIRS) {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  for (const file of files) {
    const filePath = path.join(dir, file);
    let parsed;
    try {
      parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
    } catch (err) {
      console.error(`[ERROR] ${filePath}: invalid JSON — ${err.message}`);
      hasErrors = true;
      continue;
    }
    validateNode(parsed, filePath, "");
    console.log(`[OK] ${filePath}`);
  }
}

if (hasErrors) {
  console.error("\nToken validation failed. Fix the errors above and try again.");
  process.exit(1);
} else {
  console.log("\nAll token files are valid.");
}
