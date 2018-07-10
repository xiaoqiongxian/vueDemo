<template>
    <div class="header-container">
        <ul class="header-nav">
            <li v-for="item in headerNavList" :class="item.status" @click="changeLeft">{{item.text}}</li>
        </ul>
        <div class="header-right">{{weather}}</div>
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
                ],
                weather:""
            }
        },
        mounted:function(){
            this.getWeather();
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
            },
            getWeather(){
                let _self = this;
                this.axios.get('/data/sk/101290405.html')
                  .then(function (response) {
                    let weather = response.data.weatherinfo;
                    _self.weather = weather.city+":"+weather.temp+"°C";
                  })
                  .catch(function (error) {
                    _self.$message({
                        type: 'error',
                        message: '查询失败!'
                    });
                  });
            }
        }

    }
</script>

<style scoped>
    .header-container{
        height: 100%;
        display:flex;
    }

    .header-nav{
        flex:1;
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
    .header-right{
        flex:1;
        text-align: right;
        padding: 17px 50px 0 0;
    }
</style>