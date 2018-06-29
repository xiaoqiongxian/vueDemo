<template>
    <div class="header-container">
        <ul class="header-nav">
            <li v-for="item in headerNavList" :class="item.status" @click="changeLeft">{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                headerNavList:[
                    {text:"前端",status:"active"},
                    {text:"后端",status:""},
                    {text:"工具",status:""}
                ]
            }
        },

        methods:  {
            changeLeft: function(e) {
                var _self = this
                var selectedNav = $(event.currentTarget).text();
                _self.headerNavList.map((nav)=>{
                    if(nav.text === selectedNav){
                        nav.status = "active";
                    }else{
                         nav.status = "";
                    }
                })
                _self.$root.Bus.$emit('changeLeftMenu',selectedNav);
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
        list-style: none;
        cursor: pointer
    }

    .header-nav li.active{
        cursor: default;
        color: #eb0de2;
    }
</style>