
# babel-preset-copy

Babel preset to transform JSX into Copy.copyCreateElement() calls


## Install

```bash
npm install babel-preset-copy --save-dev
```

## Use

with webpack loader

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