[![CI](https://github.com/Xeffen25/eminence-astro-theme-cloudflare-workers/actions/workflows/CI.yml/badge.svg)](https://github.com/Xeffen25/eminence-astro-theme-cloudflare-workers/actions/workflows/CI.yml)
![CD](https://img.shields.io/endpoint?url=https%3A%2F%2Fcloudflare-workers-build-checks-bridge.xeffen25.workers.dev%2Fcloudflare-workers-build-checks%2Fstatus)


# 👑 Eminence: Astro Theme for Cloudflare Workers

This is a better starting point for anyone looking to develop a website using Astro and deploying it on Cloudflare Workers, one of the best ways to get a fast, reliable and infinitely customizable site. It's main features are:

- 🔍 **SEO Ready:** SEO components integrated in the layout for ease of use. As well as: `robots.txt`, `site.webmanifest` and `sitemap.xml` ready for you.
- ⚙️ **Config:** Cloudflare, Astro, Typescript, Commands, Editors... Everything is configured so you can just code
- 🎨 **TailwindCSS:** We all know and love tailwind for easy and consistent styling.
- 🧹 **Format:** Prettier formats your code for consistency as well as checks it on commit, push and pull.
- 📂 **Project Structure:** this has been improved so you don't have to think about where something goes, there is already a place for it.
- 🗂️ **Github:** labels, issue templates, workflows, dependabot, commit structure... You have all tools you need to keep an up to date and tidy project.

## 🚀 Getting started

Follow these instructions and commands to start your own project.

### 1. Create your project using this template:

```sh
npm create astro@latest -- --template Xeffen25/eminence-astro-theme-cloudflare-workers
```

### 2. Change names

1. a
2. b
3. c
4. d

### 3. Format

```sh
npm run format:fix
```

### 4. Initial commit

```sh
git add .
git commit -m "Initial commit"
```

### 5. Start Coding! 🚀

If you know how it works just start coding! However, if this is your fist time seing this template head to the [Wiki](wiki/) and learn everything that has been improved on the Astro Starter so you can save time and have a better DX. If you have suggestions or improvements please make and Issue or Disccussion about it. We appreaciate feedback and criticism highly!

## 🤖 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run cf-typegen`      | Generate cloudflare types                        |
| `npm run format:fix`      | Format all your project                          |
| `npm run format:check`    | Check if all your project is formatted correctly |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🔍 Want to learn more?

Feel free to check the [wiki](https://docs.astro.build) or related docs:

- [Cloudflare Workers]()
- [Astro]()
- [Tailwind]()
- [Prettier]()
