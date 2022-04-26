# Vite/Svelte-kit Sibling Directory Compile Error?

To reproduce:
- run `yarn` in the root, svelte-kit, and sibling directories.
- run `yarn dev` in the svelte-kit directory.

The code in `MobxSiblingPackageDemo` and `MobxNonSiblingDemo` is identical, but observing on one store works, and on the other doesn't.

I suspect that the "useDefineForClassFields" in tsconfig is somehow not being respected by Vite when it compiles code included via resolve.alias -- but am unsure.
