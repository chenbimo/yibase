<template>
    <div @click="$Method.onJumpHome">news</div>
</template>
<script setup>
// 设置集
defineOptions({
    name: 'NewsIndex'
});

// 数据集
const $Method = {
    // 跳转到首页
    onJumpHome() {
        $Router.push('/');
    }
};
</script>
