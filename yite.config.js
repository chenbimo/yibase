export const yiteConfig = {
    devtool: true,
    inspect: true,
    // 自动导入
    autoImport: {
        resolvers: [],
        imports: []
    },
    // 自动组件
    autoComponent: {
        resolvers: []
    },
    viteConfig: {
        optimizeDeps: {
            include: [
                //
                'vue-i18n',
                'axios',
                'store2'
            ]
        }
    }
};

//#region 外层
//#region 内层
//#endregion
//#endregion
