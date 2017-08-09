# Lessons learned

## JavaScript

### Webpack

- When creating libraries, use `libraryTarget: 'umd'`.
- Babel: `babel-loader` presets are are applied in bottom-up order. Jeez. So put `'flow'` last, for example.

### NPM

- `npm link path/to/package` is useful for local development. However, having the source code of another package installed can cause issues during compilation.

### React

### Flow

- Don't ignore `node_modules` directory or else all your package imports will start breaking.
- If you want a custom `suppress_comment`, make sure you still include the default one (see below) or else all your modules will start breaking...
- Adding `src` directory to [`resolve_dirname`](https://flow.org/en/docs/config/options/#toc-module-system-node-resolve-dirname-string) will allow you to use absolute imports!

Just use this configuration:

```ini
[ignore]
; DON'T DO THIS: .*/node_modules/.*

[include]

[libs]

[options]
all=false
emoji=true

module.system.node.resolve_dirname=node_modules
module.system.node.resolve_dirname=src

; MUST INCLUDE THE FIRST VALUE IN ADDITION TO ANY OTHERS
; Note: Yes, it's the ugly form of regex with lots of escaping.
suppress_comment= \\(.\\|\n\\)*\\$FlowFixMe
; suppress_comment=custom_expression

[lints]

```

### Angular

Not worth it.

## Python

