<template>
    <div @click="$Method.onJumpHome">news</div>
</template>
<script setup>
// 数据集
const $Method = {
    // 跳转到首页
    onJumpHome() {
        $Router.push('/');
    }
};
</script>
