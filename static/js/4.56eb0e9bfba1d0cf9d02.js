webpackJsonp([4],{"89gq":function(e,t){},NqEB:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"Dialog",props:{title:{type:String},size:{type:String,default:"small"},type:{type:String,default:"primary"},mold:{type:String},mr:{type:String}},data:function(){return{dialogFormVisible:!1,form:{name:"",endTime:"",quanxian:[{id:1,label:"权限管理",children:[{id:3,label:"操作员基本管理"},{id:2,label:"操作员角色管理",disabled:!1}]}],user:""},formLabelWidth:"80px",rules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.dialogFormVisible=!1})},closeForm:function(){this.$refs.form.resetFields(),this.dialogFormVisible=!1}}},o={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"dialogRole",style:{"margin-right":"last"===e.mr?"0px":"10px"}},[l("el-button",{attrs:{type:e.type,size:e.size},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v(e._s(e.title))]),e._v(" "),l("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:e.title,visible:e.dialogFormVisible,width:"500px",top:"0"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.closeForm}},[l("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,size:"small","label-width":e.formLabelWidth}},[l("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[l("el-input",{attrs:{disabled:"2"===e.mold,clearable:!0,placeholder:"请输入角色名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"==typeof t?t.trim():t)},expression:"form.name"}})],1),e._v(" "),l("el-form-item",{ref:"upload",attrs:{label:"权限配置",prop:"quanxian"}},[l("el-tree",{attrs:{data:e.form.quanxian,"show-checkbox":"","node-key":"id","default-expanded-keys":[1],"default-checked-keys":[]}})],1),e._v(" "),"0"!==e.mold?l("el-form-item",{attrs:{label:"启用",prop:"startUp"}},[l("el-switch",{attrs:{disabled:"1"!==e.mold},model:{value:e.form.startUp,callback:function(t){e.$set(e.form,"startUp","string"==typeof t?t.trim():t)},expression:"form.startUp"}})],1):e._e(),e._v(" "),"0"!==e.mold&&"1"!==e.mold?l("el-form-item",{attrs:{label:"更新时间",prop:"endTime"}},[l("el-input",{attrs:{disabled:!0},model:{value:e.form.endTime,callback:function(t){e.$set(e.form,"endTime","string"==typeof t?t.trim():t)},expression:"form.endTime"}})],1):e._e(),e._v(" "),"0"!==e.mold&&"1"!==e.mold?l("el-form-item",{attrs:{label:"操作员",prop:"user"}},[l("el-input",{attrs:{disabled:!0},model:{value:e.form.user,callback:function(t){e.$set(e.form,"user","string"==typeof t?t.trim():t)},expression:"form.user"}})],1):e._e()],1),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"small"},on:{click:e.closeForm}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var r={name:"OperatorRoleMg",data:function(){return{searchData:{roleName:""},tableData:[{role:"超级管理员",roleType:"启用",upData:"2018-08-26 11:16:34",operator:"T000002"},{role:"超级管理员",roleType:"停用",upData:"2018-08-26 11:16:34",operator:"T000002"}],currentPage:2,multipleSelection:[],delflag:!0}},components:{DiaLog:l("VU/8")(a,o,!1,function(e){l("89gq")},"data-v-798b825a",null).exports},methods:{resetForm:function(e){this.$refs[e].resetFields()},handleSelectionChange:function(e){var t=this;this.multipleSelection=e,this.delflag=!1,this.multipleSelection.some(function(e){if("启用"===e.roleType)return t.delflag=!0,!1})},stop:function(){var e=this;this.$confirm('您确定要<span class="red">停用</span>被选中的用户吗？',{type:"warning",dangerouslyUseHTMLString:!0}).then(function(t){e.$message({type:"success",message:"停用用户成功!"})}).catch(function(e){})},startUp:function(){var e=this;this.$confirm('您确定要<span class="red">启用</span>被选中的用户吗？',{type:"warning",dangerouslyUseHTMLString:!0}).then(function(t){e.$message({type:"success",message:"启用用户成功!"})}).catch(function(e){})},delamin:function(){var e=this;this.$confirm('您确定要<span class="red">删除</span>被选中的用户吗？',{type:"warning",dangerouslyUseHTMLString:!0}).then(function(t){e.$message({type:"success",message:"删除用户成功!"})}).catch(function(e){})},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}}},i={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"operatorRoleMg"},[l("el-form",{ref:"searchData",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchData,size:"small"}},[l("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[l("el-input",{attrs:{placeholder:"请输入角色名称",clearable:""},model:{value:e.searchData.roleName,callback:function(t){e.$set(e.searchData,"roleName","string"==typeof t?t.trim():t)},expression:"searchData.roleName"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"}},[e._v("查询")]),e._v(" "),l("el-button",{on:{click:function(t){e.resetForm("searchData")}}},[e._v("重置")])],1)],1),e._v(" "),l("div",{staticClass:"divisionLine"}),e._v(" "),l("div",{staticClass:"tableBtn"},[l("dia-log",{attrs:{title:"新增",mold:"0"}}),e._v(" "),l("el-button",{attrs:{type:"danger",size:"small",disabled:0===e.multipleSelection.length||e.delflag},on:{click:e.delamin}},[e._v("删除")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"small",disabled:0===e.multipleSelection.length},on:{click:e.startUp}},[e._v("启用")]),e._v(" "),l("el-button",{attrs:{size:"small",disabled:0===e.multipleSelection.length},on:{click:e.stop}},[e._v("停用")])],1),e._v(" "),l("div",{staticClass:"tableContainer"},[l("el-table",{ref:"multipleTable",attrs:{size:"medium",border:"",data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection","label-class-name":"checkboxSelect",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"role",label:"角色名称",align:"center","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"roleType",label:"角色状态",align:"center","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"upData",label:"更新时间",align:"center","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"operator",label:"操作员",align:"center","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("dia-log",{attrs:{title:"修改",size:"mini",mold:"1"}}),e._v(" "),l("dia-log",{attrs:{title:"详情",size:"mini",type:"",mold:"2",mr:"last"}})]}}])})],1)],1),e._v(" "),l("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:2},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var s=l("VU/8")(r,i,!1,function(e){l("QSOU")},null,null);t.default=s.exports},QSOU:function(e,t){}});
//# sourceMappingURL=4.56eb0e9bfba1d0cf9d02.js.map