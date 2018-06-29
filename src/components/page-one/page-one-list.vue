<template>
    <div>
        <el-button type="primary" @click="showAddDialog" size="medium">新增</el-button>
        <div class="table-container">
          <el-table
            :data="tableList">
            <el-table-column
              label="名称"
              width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="掌握程度">
              <template slot-scope="scope">
                <span>{{ scope.row.status }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="showEditDialog(scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="showConfirmDelete(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <page-one-add :showAddFlag="showAdd" @handelSuccess="addSuccess"></page-one-add>
        <page-one-edit :showEditFlag="showEdit" :editData="editRow" @handelSuccess="editSuccess"></page-one-edit>
    </div>
</template>

<script>
    import pageOneAdd from "./page-one-add.vue";
    import pageOneEdit from "./page-one-edit.vue"

    module.exports = {
        data: function () {
            return {
                tableList: [
                  {id:"1",name:"ES5",status:"熟练"},
                  {id:"2",name:"ES6",status:"熟练"}
                ],
                showAdd:false,
                showEdit:false,
                editRow:{}
            }
        },
        components:{
          "page-one-add":pageOneAdd,
          "page-one-edit":pageOneEdit
        },
        mounted:function(){

        },
        methods:{
           test(){
            this.commonUtil.test(this.$t('message.hello'));
           },
           showAddDialog(){
            this.showAdd = true;
           },
           addSuccess(addResult){
              this.showAdd = false;
              this.tableList.push(addResult);
              this.$message({
                type: 'success',
                message: '新增成功!'
              });
           },
           showEditDialog(rowData){
            this.showEdit = true;
            this.editRow = rowData;
           },
           editSuccess(editResult){
              this.showEdit = false;
              this.tableList = this.tableList.filter((item)=>{
                return item.id !== editResult.id;
              });
              this.tableList.push(editResult);
              this.$message({
                type: 'success',
                message: '修改成功!'
              });
           },
           showConfirmDelete(deleteId){
              let _self = this;
              this.$confirm('此操作将删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                this.tableList = this.tableList.filter((item)=>{
                  return item.id !== deleteId;
                });
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              })
           }
        }
    }
</script>

<style scoped>
  .table-container{
    margin-top: 20px;
  }
</style>