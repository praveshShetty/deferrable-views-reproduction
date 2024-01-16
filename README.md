# Steps to Reproduce Deferrable Views Issue

1. Run `npm i`
2. Run `npm run build-replace-lib`
3. Run `npm start`
4. open the localhost url in the browser and open chrome dev tools
5. view the content in mobile view as the defer trigger is, on viewport

## Issues

1. Code associated with DeferredComponent is not split into a separate bundle.
2. DeferredComponent does not render properly. Cannot see the content inside it in dev tools
