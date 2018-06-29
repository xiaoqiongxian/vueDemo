<template>
    <div class="leftMenuContainer">  
        <li v-for="(item,key) in menuList">
            <span class="first-nav-item">{{item.name}}</span>
            <ul @click="selectLeftNav(data.name)" 
                :class="selectedLeftNav===data.name?'active':''" 
                class="second-nav-group" 
                v-for="(data,index) in item.menulist">
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
                selectedLeftNav:"javascript",
                menuList:[
                            { "id": "M1", "name": _self.$t("message.leftNav.base"), "url": "", "menulist":
                                [
                                    { "id": "M11", "name": "javascript", "url": "#/pageOne", "menulist":""},
                                    { "id": "M12", "name": "HTML5", "url": "#/pageTwo", "menulist": "" },
                                    { "id": "M13", "name": "CSS3", "url": "", "menulist": "" }
                                ]
                            },
                            { "id": "M2", "name": "进阶", "url": "", "menulist": 
                                [
                                    { "id": "M21", "name": "vue.js", "url": "", "menulist":""},
                                    { "id": "M22", "name": "react.js", "url": "", "menulist": "" },
                                    { "id": "M23", "name": "angular.js", "url": "", "menulist": "" }
                                ]
                            }
                       ],
                menu:
                    {
                        "前端":
                        [
                            { "id": "M1", "name": _self.$t("message.leftNav.base"), "url": "", "menulist":
                                [
                                    { "id": "M11", "name": "javascript", "url": "#/pageOne", "menulist":""},
                                    { "id": "M12", "name": "HTML5", "url": "#/pageTwo", "menulist": "" },
                                    { "id": "M13", "name": "CSS3", "url": "", "menulist": "" }
                                ]
                            },
                            { "id": "M2", "name": "进阶", "url": "", "menulist": 
                                [
                                    { "id": "M21", "name": "vue.js", "url": "", "menulist":""},
                                    { "id": "M22", "name": "react.js", "url": "", "menulist": "" },
                                    { "id": "M23", "name": "angular.js", "url": "", "menulist": "" }
                                ]
                            }
                       ],
                    
                        "后端":
                        [
                             { "id": "M4", "name": "基础", "url": "", "menulist":
                                 [
                                      { "id": "M41", "name": "node.js", "url": "#/pageThree", "menulist":""},
                                      { "id": "M42", "name": "java", "url": "", "menulist": "" },
                                      { "id": "M43", "name": "python", "url": "", "menulist": "" }
                                 ]
                             }
                       ],
                    
                        "工具":
                        [
                             { "id": "M7", "name": "开发工具", "url": "", "menulist":
                                 [
                                      { "id": "M71", "name": "webstorm", "url": "", "menulist":""},
                                      { "id": "M72", "name": "sublime", "url": "", "menulist": "" },
                                      { "id": "M72", "name": "idea", "url": "", "menulist": "" }
                                 ]
                             },
                             { "id": "M9", "name": "协同工具", "url": "", "menulist": 
                                  [
                                      { "id": "M91", "name": "git", "url": "", "menulist":""},
                                      { "id": "M92", "name": "svn", "url": "", "menulist": "" }
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
                this.selectedLeftNav = _self.menu[data][0]["menulist"][0]["name"];
                window.location.href = window.location.href.split("#/")[0]+_self.menu[data][0]["menulist"][0]["url"];
            });
        },
        watch: {
            
        },
        methods:  { 
            selectLeftNav(selected){
              this.selectedLeftNav = selected;
            }
        }
    }
</script>

<style scoped>
    .leftMenuContainer ul{
        list-style: none; 
        margin-top: 10px;
    }
    .leftMenuContainer li{
        list-style: none; 
    }
    .leftMenuContainer a{
        color: #ffffff;    
        text-decoration: none;
        margin-left: 60px;
    }
    .first-nav-item{
        padding-left: 20px;
    }
    .second-nav-group{
        padding: 9px 0 10px 0;
    }
    .second-nav-group.active{
        background-color: rgba(206,155,192,.4);
    }
    .second-nav-group.active a{
        color:#eb0de2
    }
</style>