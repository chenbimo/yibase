<template>
    <div class="page-index">
        这是页面的内容
        <div @click="$Method.onJumpHome">
            <img :src="utilGetAssets('logo.png')" />
        </div>
        <div class="text-red-5 mt-100px">{{ $t('name') }}</div>
        <div class="language">
            <div class="box" :class="{ active: $I18n.global.locale === 'zh' }" @click="$Method.onChangeLang('zh')">
                <div class="radio"></div>
                中文
            </div>
            <div class="box" :class="{ active: $I18n.global.locale === 'en' }" @click="$Method.onChangeLang('en')">
                <div class="radio"></div>
                English
            </div>
        </div>
    </div>
</template>
<script setup>
// 数据集
const $Data = $ref({
    lang: 'zh'
});

console.log('$I18n.global.locale');
console.log($I18n.global.locale);

// 方法集
const $Method = {
    // 切换语言
    onChangeLang(value) {
        console.log('🚀 ~ onChangeLang ~ $I18n:', $I18n);

        $I18n.global.locale = value;
    }
};
</script>

<style lang="scss" scoped>
.page-index {
    .language {
        display: flex;
        margin-top: 10px;
        .box {
            border: 1px solid #ddd;
            display: flex;
            align-items: center;
            padding: 5px;
            border-radius: 4px;
            margin-right: 10px;
            cursor: pointer;
            &.active {
                .radio {
                    background-color: #356cf2;
                }
            }
            .radio {
                height: 14px;
                width: 14px;
                border: 1px solid #ddd;
                border-radius: 7px;
                margin-right: 4px;
            }
        }
    }
}
</style>
