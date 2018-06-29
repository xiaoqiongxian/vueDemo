<template>
    <div class="appContainer">
    	<div class="header">
    		<app-header></app-header>
    	</div>
    	<div class="mainContainer">
    		<div class="mainLeft">
	    		<left-menu></left-menu>
	    	</div>
	    	<div class="mainRight">
	    		<router-view></router-view>
	    	</div>
    	</div>
    </div>
</template>

<script>
	import appHeader from './components/common/app-header.vue';
	import leftMenu from './components/common/left-menu.vue';
	import appFooter from './components/common/app-footer.vue';

	export default{
		data(){
			return {

			}
		},
		components:{
			"app-header":appHeader,
			"left-menu":leftMenu,
			"app-footer":appFooter
		},
		mounted:function(){

		},
		methods:{
			test(){

			}
		}

	}
</script>

<style>
	@import "./style/common.css"
</style>
