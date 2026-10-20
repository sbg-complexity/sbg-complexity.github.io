# Salzburg Complexity Group website

An English-language Jekyll site for the Salzburg Complexity Group. The team, research collaborations, selected publications, news, and scheduled events are maintained as editable data; continue to verify details as the site develops.

## Run locally

Install Ruby and Bundler, then from this folder run:

```sh
bundle install
bundle exec jekyll serve
```

Open the local address printed by Jekyll (usually `http://127.0.0.1:4000/`). Use `bundle exec jekyll build` to create the production files in `_site/`. This project uses the `github-pages` gem so the local build follows GitHub Pages' supported Jekyll setup. No third-party fonts, scripts, or images are loaded by the pages.

## Where things live

- Root Markdown files are the site pages; their front matter sets the page title, description, layout, and URL.
- `_layouts/default.html` is the shared page shell. Reusable navigation, footer, and content cards live in `_includes/`.
- `_data/` contains editable group content, grouped by topic. `assets/css/` and `assets/img/` contain the local styles and images.
- `assets/files/` is for downloadable documents such as publication PDFs.
- `_site/` is generated output. Do not edit it directly; Jekyll recreates it from the source files.

Keep image names lowercase and descriptive, and use paths beginning with `/assets/` in YAML. The site applies Jekyll's `relative_url` filter when rendering those paths.

The supplied logo files are in `assets/img/brand/`. The cropped mark SVG is used in the header, browser tab, and center of the homepage atom; the wordmark SVG sits beside the mark in the header. The stacked lockup appears in the Team page introduction. Circular, stacked, and wordmark lockups are also available as transparent PNGs for presentations and other materials.

## Edit the group details

Update `_config.yml` for the group name, description, tagline, introduction, affiliation, contact email, draft disclaimer, and `noindex` setting. Keep `baseurl` empty for an organization or user site served from the domain root. If the repository is instead hosted as a project site, set `baseurl` to its path (for example, `/repository-name`); internal links and assets use Jekyll's `relative_url` filter.

To turn off search-engine exclusion at launch, change `noindex: true` to `noindex: false` in `_config.yml`. Rebuild the site after changing configuration.

## Add or update content

Repeated content lives in YAML under `_data/`; edit those files rather than adding repeated markup to pages. Keep YAML indentation consistent (two spaces), quote text containing YAML punctuation when needed, and give linked items unique IDs/slugs.

- **Team member:** Add a record under `current:` or `alumni:` in `_data/team.yml`. Set `name`, `role`, `interest`, `image`, `image_alt`, and `link`. Put a portrait in `assets/img/` and use its path beginning with `/assets/img/`; the included illustrated SVG is only a placeholder.
- **Publication:** Add a record to `_data/publications.yml` with a unique `id`, `authors` list, `title`, and `venue`. Add a numeric `year` for published work; use `status: forthcoming` when no publication year is available. Optional `pdf`, `doi`, `arxiv`, and `url` values add links. Add local PDFs under `assets/files/`.
- **Event:** Add an ISO date (`YYYY-MM-DD`), `title`, `place`, and `description` to `_data/events.yml`. Add optional `end_date` for a multi-day event; Upcoming/Past uses the end date and the date range is shown. Optional `link` and `link_label` fields add a details link. For a recurring weekly event, add `recurrence: weekly` and `time`; it stays under Upcoming until its optional `end_date` passes. One-time events move to Past at build time.
- **News:** Add `date`, `title`, `summary`, and an internal `url` to `_data/news.yml`. The home page shows the four newest items, and the News archive at `/news/` lists all entries newest first. The archive is linked from Home and is not a header tab.
- **Research collaboration:** Edit one of the entries in `_data/projects.yml` to update its `name`, `category`, `summary`, `involvement`, `logo`, and `url`. Selected publications for MACBeh are linked by publication ID.
- **Sponsor or institutional logo:** Update `_data/sponsors.yml` and place the image under `assets/img/sponsors/`. The shared footer displays these logos on every page. Keep official logos proportionally scaled and unchanged.

The footer links to `/imprint/` and `/data-policy/`. The Contact page includes a form that opens the visitor's email application with the message prepared; it does not submit data to or store data on the website.

## Hosting and launch notes

The root-domain repository is `sbg-complexity.github.io`, owned by the `sbg-complexity` organization. GitHub Pages organization-site naming depends on these matching names. This draft has `noindex: true` and an internal-review disclaimer; review current content and confirm contact details before making it public. The MACBeh workshop listing currently gives the city of Salzburg and notes that the venue has not yet been announced.

The workflow in `.github/workflows/pages.yml` builds and deploys the site with GitHub Actions. After merging it to the default branch, select **Settings → Pages → Build and deployment → Source → GitHub Actions** for the repository. The local `Gemfile.lock` is ignored because the site's dependencies must resolve on both Windows and GitHub's Linux runners.

The site uses a system font stack, local portrait and sponsor images, semantic page landmarks, a skip link, visible keyboard focus, responsive layouts, and optional dark styling from the visitor's system preference. The footer contact, affiliation, sponsor marks, and legal links are shared across all pages.
