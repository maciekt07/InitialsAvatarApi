# initials-avatar

## usage

- **URL Parameters:**

  - `i=[string]` (optional) - Initials to generate the avatar. If not provided, it will be derived from the `name` parameter.
  - `name=[string]` (optional) - Name to generate initials for the avatar.
  - `clr=[string]` (optional) - Background color of the avatar in hexadecimal format (default: `595959`).

example usage

```html
<img src="{URL}/?name=John+Doe&clr=854BFF" />
```

## preview

<img src="./assets//example.png" />

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
