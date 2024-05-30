# TypeScript Types for WildLife

## Summary

These are TypeScript types for the [Lua APIs](https://wildlife.adult/Documentation/Lua/v1/WildLifeLuaDocumentation.html) used in the game Wild Life by Candy Valley Network. These are intended to be used with projects that are transpiled from TypeScript to Lua using [TypeScriptToLua](https://typescripttolua.github.io/).

## Disclaimer

This is not an official project by the developers of Wild Life. The game is actively under development and these APIs may change or break.

This was developed and tested using the Patreon 04.2024 build. The version on Steam is not supported currently.

Wild Life is a NSFW game, and only 18+ should use this project.

## Usage

### Initial Setup

To get started you must create a new package that uses this package as a dependency.
To create a package with npm run:

```
$npm init
```

In a directory for your new project. This will create a package.json along with some other initial files.

You can install this dependency via:

```
$npm install theguy-gay/wl-types typescript typescript-to-lua
```

Which should add these dependencies into your package.json.

Create a `tsconfig.json`:

```
{
    "compilerOptions": {
      "rootDir": ".",
      "outDir": "build",

      "target": "ESNext",
      "lib": ["ESNext"],

      "moduleResolution": "nodenext",
      "module": "NodeNext",

      "declaration": false,
      "declarationMap": false,

      "strict": true,
      "types": ["wl-typescript"],
    },
    "tstl": {
      "luaTarget": "5.3",
      "noImplicitSelf": true,
      "tstlVerbose": true,
      "luaBundle": "bundle.lua",
      "luaBundleEntry": "src/index.ts",
    },
  }
```

Create a `src` directory with an `index.ts` within.

### Development

You can write any TypeScript code within the index.ts. The WildLife methods are all available for use like any other TypeScript function.

When you want to convert it to Lua to use in the Sandbox editor, you can compile with:

```
npx tstl
```

This will create a `build` directory and a `bundle.lua` within. Open this file and copy the contents. You may then run the code in the Sandbox by creating a Lua object and pasting into the code option.

The path to find this from the top level is:

```
Automation -> Lua -> Code
```

Now whenever that object is run, your code should be executed.
