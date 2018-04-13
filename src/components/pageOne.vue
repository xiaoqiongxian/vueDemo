<template>
    <div>
        <p>{{ $t("message.hello") }}</p>
        <p v-text="$t('message.hello')"></p>
        <el-button type="primary" @click="testAlert">test</el-button>
        <el-button type="primary" @click="test">主要按钮</el-button>
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
            debugger
                alert(this.$t('message.hello'));
           } ,
           test(){
            this.commonUtil.test(this.$t('message.hello'));
           }
        }
    }
</script>