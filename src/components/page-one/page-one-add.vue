<template>
    <div>
        <el-dialog title="新增" :visible.sync="visible" size="tiny">
		  <el-form ref="addForm" :model="addForm" :rules="addFormRules" label-width="100px">
		    <el-form-item label="名称" prop="name">
		      <el-input v-model="addForm.name"></el-input>
		    </el-form-item>
		    <el-form-item label="掌握程度" prop="status">
		      <el-input v-model="addForm.status"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="handelCancel">取 消</el-button>
		    <el-button type="primary" @click="handelConfirm">确 定</el-button>
		  </div>
		</el-dialog>
    </div>
</template>
<script>
    module.exports = {
    	props:{
			showAddFlag:{
				type:Boolean,
				default:false
			}
    	},
        data: function () {
            return {
                visible:false,
                addForm:{
                	name:"",
                	status:""
                },
                addFormRules:{
                	name:[
                		{required:true,message:"请输入名称",trigger:"blur"}
                	],
                	status:[
                		{required:true,message:"请输入掌握程度",trigger:"blur"}
                	]
                }
            }
        },
        created:function(){
        	this.visible = this.showAddFlag;
        },
        watch:{
        	showAddFlag(val){
        		this.visible = val;
        	}
        },
        components:{

        },
        mounted:function(){

        },
        methods:{
        	handelCancel(){
        		this.visible = false;
        	},
        	handelConfirm(){
        		let _self = this;
        		this.$refs["addForm"].validate((valid)=>{
        			if(valid){
        				this.visible = false;
        				let date = new Date();
        				let addData = {
        					id: date.getTime(),
        					name:_self.addForm.name,
        					status:_self.addForm.status
        				}
        				_self.$emit("handelSuccess",addData);
        			}
        		})
        	}
        }
    }
</script>
