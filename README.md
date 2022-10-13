# TONY THEME

This project was generated using [Nx](https://nx.dev).

### Tech stack

- react typescript
- MUI component
- publish npm package

### Step to step to publish libs via npm package

1. Create an lib publish

```bash
$ npx nx generate @nrwl/react:library piano --directory=themes --importPath=@tony-theme/piano --publishable
```

2. Go to libs/themes/piano/package.json

```
{
  "name": "@tony-theme/piano",
  "version": "0.0.1",
  "publishConfig": {
    "access": "public"
  }
}
```

3. Build themes

```
$ npm run build themes-piano
```

4. Go to tsconfig.base.json

```
"paths": {
  {name package}: ["libs/themes/piano/src/index.ts"]
}
```

name package = @tony-theme/piano

5. Registry npm package

```
$ npm login
```

6. Go to libs/themes/piano/project.json

```
"publish": {
  "executor": "@nrwl/workspace:run-commands",
  "options": {
    "command": "npm publish",
    "cwd": "dist/libs/themes/minimal"
  }
}

$ nx run themes-piano:publish
```

### Step to step to publish lib core

<b>I want to import format</b>

import { sharedConfig } from '@tony-theme/core/configs';

import { AccountPopover } from '@tony-theme/core/components';

1. Create publishable core

```
$ npx nx generate @nrwl/react:library core --directory=themes --importPath=@tony-theme/core --publishable --no-interactive --dry-run
```

2. Go to themes/core/package.json

```
"publishConfig": {
  "access": "public"
}
```

3. Go to themes/core/project.json

```
"publish": {
  "executor": "@nrwl/workspace:run-commands",
  "options": {
    "command": "npm publish",
    "cwd": "dist/libs/themes/chau-core"
  }
},
```

4. Create library components

```
$ npx nx generate @nrwl/react:library components --directory=themes/core --buildable --importPath=@tony-theme/core/components --no-publishable --no-interactive --dry-run
```

5. Create library configs

```
$ npx nx generate @nrwl/react:library configs --directory=themes/core --buildable --importPath=@tony-theme/core/configs --no-publishable --no-interactive --dry-run
```

6. Go to themes/core/tsconfig.lib.json

```
"exclude": [
  ...
  "components/**/*",
  "configs/**/*"
],
```

7. Go to themes/core/package.json

```
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.esm.js",
    "require": "./index.umd.js"
  },
  "./components": {
    "types": "./components/index.d.ts",
    "import": "./components/index.esm.js",
    "require": "./components/index.umd.js"
  },
  "./configs": {
    "types": "./configs/index.d.ts",
    "import": "./configs/index.esm.js",
    "require": "./configs/index.umd.js"
  }
}
```

8. Build

- Build themes-core: npx nx build themes-core
- Build themes-core-components: npx nx build themes-core-components

or

Go to themes/core/project.json

```
"package": {
  "executor": "@nrwl/workspace:run-commands",
  "options": {
    "commands": [
      "npx nx build themes-core",
      "npx nx build themes-core-components",
      "npx nx build themes-core-configs"
    ],
    "parallel": false
  }
}
```

9. Login npm package

```
$ npm login
```

10. Go to libs/themes/core/project.json

```
"publish": {
  "executor": "@nrwl/workspace:run-commands",
  "options": {
    "command": "npm publish",
    "cwd": "dist/libs/themes/core"
  }
}

$ npx nx run themes-core:publish
```
