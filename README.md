# TONY THEME

This project was generated using [Nx](https://nx.dev).

### Tech stack

- react typescript
- MUI component
- publish npm package

### Step to step to publish libs via npm package

1. Create an lib publish

```bash
$ npx nx generate @nrwl/react:library minimal --directory=themes --importPath=@tony-mui/minimal --publishable
```

2. Go to libs/themes/minimal/package.json

```
{
  "name": "@tony-theme/minimal",
  "version": "0.0.1",
  "publishConfig": {
    "access": "public"
  }
}
```

3. Build themes

```
$ npm run build themes-minimal
```

4. Go to tsconfig.base.json

```
"paths": {
  {name package}: ["libs/themes/minimal/src/index.ts"]
}
```

name package = @tony-theme/minimal

5. Registry npm package

```
$ npm login
```

6. Go to libs/themes/minimal/project.json

```
"publish": {
  "executor": "@nrwl/workspace:run-commands",
  "options": {
    "command": "npm publish",
    "cwd": "dist/libs/themes/minimal"
  }
}

$ nx run themes-minimal:publish
```
