import path from "path";
import vue from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import postcss from 'rollup-plugin-postcss';


export default [
    // "index",
    // "projector",
    // "merger",
    // "mappingViewer",
    "upload_model",
].map(entry => ({
    input: `./app/${entry}.js`,

    output: {
        format: "iife",
        file: path.posix.join("dist", `${entry}.bundle.js`),
    },

    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("development"),
            "process.env.VUE_ENV": JSON.stringify("browser"),
        }),
        commonjs(),
        resolve({
            preferBuiltins: false,
            browser: true,
        }),
        vue(),
        postcss({
            extensions: ['.css'],
        }),
    ],
}));
