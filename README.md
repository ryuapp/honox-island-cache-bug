# Honox island cache bug

- honox: v0.1.59

1. `bun i --linker=isolated`
2. `bun run build`
3. `bun run preview`
4. `grep -c "__importing_islands" dist/index.js`
5. The result of Step 4 should be 7, but there are cases where this does not happen. Since this occurs randomly, please try a few times if the result is 7. If the value is less than 7, there are counters that cannot be executed via the `/a` through `/f` routes.
