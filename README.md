
# bable-plugin-transform-copy

Babel preset to transform JSX into Copy.copyCreateElement() calls


Install

```bash
npm install bable-plugin-transform-copy --save-dev
```

Use


```js
{
    test: /\.copy$/,
    exclude: /node_modules/,
    include: [joinPath('src'), joinPath('example')],
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['babel-preset-copy']
        }
    }
}
```