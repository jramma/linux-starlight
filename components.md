<!-- markdownlint-disable MD033 -->
import { Aside } from '@astrojs/starlight/components'

<Aside>Some content in an aside.</Aside>

<Aside type="caution">Some cautionary content.</Aside>

<Aside type="tip">

Other content is also supported in asides.

```js
console.log('A code snippet, for example.')
```

Some inline markdown like [link](https://example.com), `inline code`, **bold**, _italic_, and ~~strikethrough~~.

<details>
<summary>A collapsible disclosure</summary>

Some collapsible content.

</details>

</Aside>

<Aside type="danger">Do not give your password to anyone.</Aside>

<Aside type="danger" title="Watch out!">
  A warning aside *with* a custom title.
</Aside>

---
import { Badge } from '@astrojs/starlight/components'

<Badge text="Note" variant="note" />
<Badge text="Success" variant="success" />
<Badge text="Tip" variant="tip" size="small" />
<Badge text="Caution" variant="caution" size="medium" />
<Badge text="Danger" variant="danger" size="large" />
<Badge text="Default" />
---
import { Code } from 'starlight-theme-nova/components'

<Code lang="js" code={`console.log('Hello, world!')`} />
---
import { CodeFile } from 'starlight-theme-nova/components'

<CodeFile path="package.json" />
---
import { CodePackageManagers } from 'starlight-theme-nova/components'

<CodePackageManagers
  packages="starlight-theme-nova @astrojs/starlight"
  dev={true}
/>
---
import { CodeTabItem, CodeTabs } from 'starlight-theme-nova/components'

<CodeTabs>
  <CodeTabItem
    label="index.js"
    lang="js"
    code={`function () {\n  console.log('Hello, JS!')\n}`}
  />
  <CodeTabItem
    label="index.ts"
    lang="ts"
    code={`function (): void {\n  console.log('Hello, TS!')\n}`}
  />
  <CodeTabItem
    label="styles/global.css"
    lang="css"
    code={`.my-class {\n  background-color: red;\n}`}
  />
  <CodeTabItem
    label="package.json"
    lang="json"
    code={JSON.stringify(
      {
        name: 'my-project',
        version: '1.0.0',
        description: 'My project',
        main: 'index.js',
        scripts: {
          dev: 'astro dev',
          build: 'astro build',
        },
        author: 'John Doe',
        license: 'MIT',
      },
      null,
      2,
    )}
  />
</CodeTabs>
---
import { LinkButton } from 'starlight-theme-nova/components'

<div>
  <LinkButton href="/guide/getting-started/">Primary</LinkButton>
  <LinkButton href="/guide/markdown/" variant="secondary">
    Secondary
  </LinkButton>
  <LinkButton
    href="https://docs.astro.build"
    variant="minimal"
    icon="external"
    iconPlacement="start"
  >
    Minimal with external icon
  </LinkButton>
</div>
<div>
  <LinkButton href="/guide/markdown/" variant="secondary" icon="right-arrow">
    Right Arrow
  </LinkButton>
  <LinkButton
    href="/guide/markdown/"
    variant="secondary"
    icon="left-arrow"
    iconPlacement="start"
  >
    Left Arrow
  </LinkButton>
</div>
---
import { LinkCard } from 'starlight-theme-nova/components'

<LinkCard title="Authoring Markdown" href="/guides/authoring-content/" />

<LinkCard
  title="Internationalization"
  href="/guides/i18n/"
  description="Configure Starlight to support multiple languages."
/>