<template>
    <div>
        <el-dialog title="修改" :visible.sync="visible" size="tiny">
		  <el-form ref="editForm" :model="editForm" :rules="editFormRules" label-width="100px">
		    <el-form-item label="名称" prop="name">
		      <el-input v-model="editForm.name"></el-input>
		    </el-form-item>
		    <el-form-item label="掌握程度" prop="status">
		      <el-input v-model="editForm.status"></el-input>
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
			showEditFlag:{
				type:Boolean,
				default:false
			},
			editData:{
				type:Object,
				default:{}
			}
    	},
        data: function () {
            return {
                visible:false,
                editForm:{
                	id:"",
                	name:"",
                	status:""
                },
                editFormRules:{
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
        	this.visible = this.showEditFlag;
        },
        watch:{
        	showEditFlag(val){
        		this.visible = val;
        	},
        	editData(val){
        		this.editForm.id = val.id;
        		this.editForm.name = val.name;
        		this.editForm.status = val.status
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
        		this.$refs["editForm"].validate((valid)=>{
        			if(valid){
        				this.visible = false;
        				_self.$emit("handelSuccess",_self.editForm);
        			}
        		})
        	}
        }
    }
</script>
