# The Comedy Bureau Beta App [chakra-ui](https://github.com/chakra-ui/chakra-ui)

Creating The Comedy Bureau's latest iteration, MVP relaunch. [Deployed Version](https://comedy-bureau-beta.vercel.app/)

## Technologies Used:
* [Chakra-UI](https://chakra-ui.com/docs/features/style-props) - Component Library based on Style Props
* [Next.js](https://nextjs.org/docs/getting-started) - Front-End Static Site Generator Framework
* [Supabase](https://supabase.io/docs) - Database

Connected Next.js `_app.js` with `chakra-ui`'s Theme and ColorMode containers so the pages can have app-wide dark/light mode. 

## WireFrames and References: 
* [High-Fidelity WireFrames on Figma](https://www.figma.com/file/CeYfhMvJkWWO0BEqYtmUrx/High-Fidelity-Wireframes-for-TCB?node-id=31%3A14489)
* [Notion Board - Created by Estie Choi](https://www.notion.so/The-Comedy-Bureau-4-0-5871ca84430b43c9adf7e8a3d9f9b23f)
## How to use

```bash
yarn install
yarn run dev
```
## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui&project-name=with-chakra-ui&repository-name=with-chakra-ui)


Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
## Notes

Chakra has supported Gradients and RTL in `v1.1`. To utilize RTL, [add RTL direction and swap](https://chakra-ui.com/docs/features/rtl-support).

If you don't have multi-direction app, you should make `<Html lang="ar" dir="rtl">` inside `_document.js`.
