<template>
    <div>
        <p>{{ $t("message.hello") }}</p>
        <p v-text="$t('message.hello')"></p>
        <el-button type="primary" v-on:click="testAlert">test</el-button>
        <el-button type="primary">主要按钮</el-button>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                page: 'vue-router'
            }
        },
        methods:{
           testAlert:function(){
                alert(this.$t('message.hello'));
           } 
        }
    }
</script>