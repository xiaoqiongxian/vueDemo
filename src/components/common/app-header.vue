
<template>
    <div class="header-container">
        <div class="header-nav">
            <li @click="changeLeft">基础</li>
            <li @click="changeLeft">前端独立</li>
            <li @click="changeLeft">插件</li>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                
            }
        },

        methods:  {
            changeLeft: function(e) {
                var _self = this
                var text = $(event.currentTarget).text();
                _self.$root.Bus.$emit('changeLeftMenu',text);
            }
        }

    }
</script>

<style scoped>
    .header-container{
        height: 100%;
    }

    .header-nav{
        display: flex;
        flex-direction: row;
        height: 100%;
        align-items: center;
    }

    .header-nav li{
        margin: 20px;
    }
</style>