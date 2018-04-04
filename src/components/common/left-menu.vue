<template>
    <div class="leftMenuContainer">  
        <li v-for="(item,key) in menuList">
            <span class="first-nav-item">{{item.name}}</span>
            <ul class="second-nav-group" v-for="(data,index) in item.menulist">
                <li>
                    <a :href="data.url" class=''>{{data.name}}</a>
                </li>
            </ul>
        </li>
    </div> 
</template>

<script>
    export default {
        data() {
            let _self = this;
            return {
                menuList:[
                            { "id": "M1", "name": "html", "url": "", "menulist":
                                [
                                    { "id": "M11", "name": _self.$t("message.hello"), "url": "#/pageOne", "menulist":""},
                                    { "id": "M12", "name": "布局", "url": "#/pageTwo", "menulist": "" },
                                    { "id": "M13", "name": "本地存储", "url": "", "menulist": "" }
                                ]
                            },
                            { "id": "M2", "name": "css", "url": "", "menulist": 
                                [
                                    { "id": "M21", "name": "动画", "url": "", "menulist":""},
                                    { "id": "M22", "name": "旋转", "url": "", "menulist": "" },
                                    { "id": "M23", "name": "3D", "url": "", "menulist": "" }
                                ]
                            },
                            { "id": "M3", "name": "js", "url": "", "menulist": 
                                [
                                    { "id": "M31", "name": "原生javascript", "url": "", "menulist":""},
                                    { "id": "M32", "name": "类库", "url": "", "menulist": "" },
                                    { "id": "M33", "name": "es6规范", "url": "", "menulist": "" }
                                ]
                            }
                       ],
                menu:
                    {
                        "基础":
                        [
                            { "id": "M1", "name": "html", "url": "", "menulist":
                                [
                                    { "id": "M11", "name": "语义化", "url": "#/pageOne", "menulist":""},
                                    { "id": "M12", "name": "布局", "url": "#/pageTwo", "menulist": "" },
                                    { "id": "M13", "name": "本地存储", "url": "", "menulist": "" }
                                ]
                            },
                            { "id": "M2", "name": "css", "url": "", "menulist": 
                                [
                                    { "id": "M21", "name": "动画", "url": "", "menulist":""},
                                    { "id": "M22", "name": "旋转", "url": "", "menulist": "" },
                                    { "id": "M23", "name": "3D", "url": "", "menulist": "" }
                                ]
                            },
                            { "id": "M3", "name": "js", "url": "", "menulist": 
                                [
                                    { "id": "M31", "name": "原生javascript", "url": "", "menulist":""},
                                    { "id": "M32", "name": "类库", "url": "", "menulist": "" },
                                    { "id": "M33", "name": "es6规范", "url": "", "menulist": "" }
                                ]
                            }
                       ],
                    
                        "前端独立":
                        [
                             { "id": "M4", "name": "vue", "url": "", "menulist":
                                 [
                                      { "id": "M41", "name": "vue-router", "url": "", "menulist":""},
                                      { "id": "M42", "name": "components", "url": "", "menulist": "" },
                                      { "id": "M43", "name": "ElementUI", "url": "", "menulist": "" },
                                      { "id": "M43", "name": "vuex", "url": "", "menulist": "" }
                                 ]
                             },
                             { "id": "M5", "name": "webpack", "url": "", "menulist": 
                                  [
                                      { "id": "M51", "name": "基础", "url": "", "menulist":""},
                                      { "id": "M52", "name": "插件", "url": "", "menulist": "" }
                                  ]
                              },
                             { "id": "M6", "name": "axios", "url": "", "menulist": 
                                  [
                                      { "id": "M61", "name": "基础", "url": "", "menulist":""}
                                  ]
                              }
                       ],
                    
                        "插件":
                        [
                             { "id": "M7", "name": "拓扑图", "url": "", "menulist":
                                 [
                                      { "id": "M71", "name": "canvas", "url": "", "menulist":""},
                                      { "id": "M72", "name": "twaver", "url": "", "menulist": "" }
                                 ]
                             },
                             { "id": "M9", "name": "统计图", "url": "", "menulist": 
                                  [
                                      { "id": "M91", "name": "echarts", "url": "", "menulist":""},
                                      { "id": "M92", "name": "highcharts", "url": "", "menulist": "" }
                                  ]
                              }
                       ]
                    }  
            }
        },
        created(){
            let _self = this;
            this.$root.Bus.$on("changeLeftMenu",data => {
                _self.menuList = _self.menu[data];
            });
        },
        mounted:function(){
             
        },
        computed: {
           
        },
        watch: {
            
        },
        methods:  { 
            
        }

    }
</script>

<style scoped>
    .leftMenuContainer ul,li{
        list-style: none; 
        margin-top: 10px;
    }
    .leftMenuContainer a{
        color: #eee;    
        text-decoration: none;
        margin-left: 5px;
    }
    .first-nav-item{
        padding-left: 20px;
    }
    .second-nav-group{
        padding-left: 40px;
    }
</style>