module.exports = {
    //@babel/plugin-syntax-jsx这个插件允许Babel解析JSX
    plugins: ["@babel/plugin-syntax-jsx", ["@babel/plugin-transform-react-jsx", { "pragma": "Copy.copyCreateElement" }]]
};