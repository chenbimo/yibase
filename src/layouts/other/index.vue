<template>
    <div class="layout-default">
        other
        <div class="layout-bodyer">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
// 外部集

// 定义集
defineOptions({
    name: 'LayoutOther'
});

// 全局集
const { $GlobalData, $GlobalComputed, $GlobalMethod } = useGlobal();
const $Router = useRouter();

// 数据集
const $Data = $ref({
    // 显示和隐藏
    isShow: {}
});

// 方法集
const $Method = {
    async initData() {}
};

$Method.initData();
</script>

<style lang="scss" scoped>
.layout-default {
}
</style>
