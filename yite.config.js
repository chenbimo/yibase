export const yiteConfig = {
    devtool: false,
    inspect: false,
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
                'pinia',
                'vue-router'
            ]
        }
    }
};
