webpackJsonp([1],{Y5V1:function(e,t){},YN1Y:function(e,t){},"cI+r":function(e,t){},poDy:function(e,t){},"xh/W":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[{size:["small",!1,"large"]},"bold","italic","underline","strike","blockquote",{script:"sub"},{script:"super"},{color:[]},{background:[]},"image",{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"},{align:[]}],i={props:{editorWidth:{type:String},disabled:{type:Boolean,default:!1},content1:{type:String}},data:function(){return{quillUpdateImg:!1,content:null,editorOption:{placeholder:"请输入品牌故事",theme:"snow",modules:{toolbar:{container:a,handlers:{image:function(e){e?document.querySelector(".avatar-uploader input").click():this.quill.format("image",!1)}}}}},serverUrl:"/manager/common/imgUpload",header:{}}},created:function(){this.content=this.content1},methods:{init:function(){this.content=""},onEditorChange:function(e){e.editor;var t=e.html;e.text;this.content=t,this.$emit("brandStore",t)},beforeUpload:function(){this.quillUpdateImg=!0},uploadSuccess:function(e,t){var l=this.$refs.myQuillEditor.quill;if(200===e.code){var a=l.getSelection().index;l.insertEmbed(a,"image",e.url),l.setSelection(a+1)}else this.$message.error("图片插入失败");this.quillUpdateImg=!1},uploadError:function(){this.quillUpdateImg=!1,this.$message.error("图片插入失败")}}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{style:{width:e.editorWidth},attrs:{id:"quilEditor"}},[l("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.serverUrl,name:"img",headers:e.header,"show-file-list":!1,"on-success":e.uploadSuccess,"on-error":e.uploadError,disabled:e.disabled,"before-upload":e.beforeUpload}}),e._v(" "),l("quill-editor",{ref:"myQuillEditor",attrs:{options:e.editorOption,disabled:e.disabled},on:{change:function(t){e.onEditorChange(t)}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)},staticRenderFns:[]};var o=l("VU/8")(i,r,!1,function(e){l("cI+r")},null,null).exports,s={name:"CdiaLog",props:{title:{type:String},size:{type:String,default:"small"},type:{type:String,default:"primary"},mr:{type:String},btnWidth:{type:Boolean,default:!1},typeFlag:{type:Number},detailBtn:{type:Boolean,default:!1},content1:{type:String,default:""}},components:{quillEditor:o},data:function(){return{hackReset:!0,dialogFormVisible:!1,imgClickIndex:0,form:{field:"",fieldName:"",number:"",value:"",imgUpLoad:"",pTitle:"",pExplain:"",brandStore:"",list:[{value:"",imageUrl:""}]},rules:{number:[{required:!0,message:"请输入枚举值编号",trigger:"blur"},{validator:function(e,t,l){"00"===t||"01"===t?l(new Error("枚举值编号不能重复")):l()},trigger:"blur"}],value:[{required:!0,message:"请输入枚举值",trigger:"blur"}],imgUpLoad:[{required:!0,message:"请上传图片",trigger:"change"}],pTitle:[{required:!0,message:"请输入图片标题",trigger:"blur"}],pExplain:[{required:!0,message:"请输入图片说明",trigger:"blur"}],brandStore:[{required:!0,message:"请输入品牌故事",trigger:"change"}]}}},methods:{init:function(){this.dialogFormVisible=!0,this.form={field:"",fieldName:"",number:"",value:"",imgUpLoad:"",pTitle:"",pExplain:"",brandStore:"",list:[{value:"",imageUrl:""}]}},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.dialogFormVisible=!1,t.$emit("dialogSuccess",{number:t.form.number,value:t.form.value})})},closeForm:function(){var e=this;this.$refs.form.resetFields(),this.dialogFormVisible=!1,this.hackReset=!1,this.$nextTick(function(){e.hackReset=!0})},addPicker:function(){this.form.list.push({value:"",imageUrl:"",key:Date.now()})},delPicker:function(e){var t=this.form.list.indexOf(e);-1!==t&&this.form.list.splice(t,1)},imgClick:function(e){this.imgClickIndex=e},handleAvatarSuccess:function(e,t,l){this.form.list[this.imgClickIndex].imageUrl=URL.createObjectURL(t.raw),this.$refs.imgUpload[this.imgClickIndex].clearValidate()},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,l=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),l||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&l},handleAvatar1Success:function(e,t){this.form.imgUpLoad=URL.createObjectURL(t.raw),this.$refs.upload.clearValidate()},beforeAvatar1Upload:function(e){var t="image/jpeg"===e.type||"image/png",l=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 jpg/jpeg/png 格式!"),l||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&l},brandStore:function(e){console.log(e),this.form.brandStore=e.trim(),this.$refs.brandStore.clearValidate()},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}}},n={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"cdiaLog",style:{"margin-right":"last"===e.mr?"0px":"10px"}},[l("el-button",{style:{width:e.btnWidth?"100%":"",height:e.btnWidth?"100%":""},attrs:{type:e.type,size:e.size},on:{click:e.init}},[e._v(e._s(e.title))]),e._v(" "),l("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,"append-to-body":!0,title:e.title,visible:e.dialogFormVisible,width:"600px",top:"0"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.closeForm}},[l("el-form",{ref:"form",staticClass:"formTopZidian",attrs:{inline:!0,model:e.form,size:"small",rules:e.rules,"label-width":"93px"}},[l("el-form-item",{attrs:{label:"字段",prop:"field"}},[l("el-input",{staticClass:"width250",attrs:{disabled:!0},model:{value:e.form.field,callback:function(t){e.$set(e.form,"field","string"==typeof t?t.trim():t)},expression:"form.field"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"字段名",prop:"fieldName"}},[l("el-input",{staticClass:"width250",attrs:{disabled:!0},model:{value:e.form.fieldName,callback:function(t){e.$set(e.form,"fieldName","string"==typeof t?t.trim():t)},expression:"form.fieldName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"枚举值编号",prop:"number"}},[l("el-input",{staticClass:"width250",attrs:{disabled:e.detailBtn,clearable:"",placeholder:"请输入枚举值编号"},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number","string"==typeof t?t.trim():t)},expression:"form.number"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"枚举值",prop:"value"}},[l("el-input",{staticClass:"width250",attrs:{disabled:e.detailBtn,clearable:"",placeholder:"请输入枚举值"},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value","string"==typeof t?t.trim():t)},expression:"form.value"}})],1),e._v(" "),e._l(e.form.list,function(t,a){return 1===e.typeFlag?l("el-form-item",{key:t.key,attrs:{label:"图片"+(a+1),prop:"list."+a+".value",rules:{required:!0,message:"请输入图片主题",trigger:"blur"}}},[l("el-input",{staticClass:"width300",attrs:{disabled:e.detailBtn,clearable:"",placeholder:"请输入图片主题"},model:{value:t.value,callback:function(l){e.$set(t,"value","string"==typeof l?l.trim():l)},expression:"item.value"}}),e._v(" "),l("el-form-item",{ref:"imgUpload",refInFor:!0,staticClass:"pickerUpLoad",attrs:{prop:"list."+a+".imageUrl",rules:{required:!0,message:"请上传图片",trigger:"change"}}},[l("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,disabled:e.detailBtn,"before-upload":e.beforeAvatarUpload}},[t.imageUrl?l("el-popover",{attrs:{placement:"right",width:"400",trigger:"hover"}},[l("img",{attrs:{src:t.imageUrl,width:"100%"}}),e._v(" "),l("img",{staticClass:"avatar1",attrs:{slot:"reference",src:t.imageUrl},slot:"reference"})]):l("el-button",{staticClass:"iconUp",attrs:{disabled:e.detailBtn,circle:"",icon:"el-icon-upload"},on:{click:function(t){e.imgClick(a)}}})],1),e._v(" "),t==e.form.list[e.form.list.length-1]?l("el-button",{staticClass:"iconAdd",attrs:{disabled:e.detailBtn,type:"primary",circle:"",icon:"el-icon-plus"},on:{click:e.addPicker}}):e._e(),e._v(" "),0!=a?l("el-button",{staticClass:"iconDel",attrs:{disabled:e.detailBtn,type:"danger",circle:"",icon:"el-icon-minus"},on:{click:function(l){e.delPicker(t)}}}):e._e()],1)],1):e._e()}),e._v(" "),3===e.typeFlag?l("el-form-item",{ref:"upload",staticClass:"imageUrl1",attrs:{label:"上传图片",prop:"imgUpLoad"}},[l("el-upload",{staticClass:"avatar-uploader1",attrs:{disabled:e.detailBtn,action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatar1Success,"before-upload":e.beforeAvatar1Upload}},[e.form.imgUpLoad?l("img",{staticClass:"avatar1",attrs:{src:e.form.imgUpLoad}}):e._e(),e._v(" "),l("span",{staticClass:"avatar-uploader-icon1"},[e._v("请点击上传图片")]),e._v(" "),l("div",{staticClass:"el-upload__tip1",attrs:{slot:"tip"},slot:"tip"},[e._v("请上传png、jpg及jpeg格式图片(大小2M以下)")])])],1):e._e(),e._v(" "),3===e.typeFlag?l("el-form-item",{attrs:{label:"图片标题",prop:"pTitle"}},[l("el-input",{staticStyle:{width:"450px"},attrs:{disabled:e.detailBtn,clearable:"",placeholder:"请输入图片标题"},model:{value:e.form.pTitle,callback:function(t){e.$set(e.form,"pTitle","string"==typeof t?t.trim():t)},expression:"form.pTitle"}})],1):e._e(),e._v(" "),3===e.typeFlag?l("el-form-item",{attrs:{label:"图片说明",prop:"pExplain"}},[l("el-input",{staticStyle:{width:"450px"},attrs:{disabled:e.detailBtn,clearable:"",placeholder:"请输入图片说明"},model:{value:e.form.pExplain,callback:function(t){e.$set(e.form,"pExplain","string"==typeof t?t.trim():t)},expression:"form.pExplain"}})],1):e._e(),e._v(" "),2===e.typeFlag?l("el-form-item",{ref:"brandStore",attrs:{label:"品牌故事",prop:"brandStore"}},[e.hackReset?l("quillEditor",{ref:"quillEditor",attrs:{editorWidth:"450px",disabled:e.detailBtn,content1:e.content1},on:{brandStore:e.brandStore}}):e._e()],1):e._e()],2),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"small"},on:{click:e.closeForm}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.detailBtn?e.closeForm():e.submitForm("form")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var c=l("VU/8")(s,n,!1,function(e){l("Y5V1")},null,null).exports,d={name:"DialogProDic",props:{title:{type:String},size:{type:String,default:"small"},type:{type:String,default:"primary"},mr:{type:String},typeFlag:{type:Number},detailBtn:{type:Boolean,default:!1}},components:{CdiaLog:c},data:function(){return{currentPage:2,dialogFormVisible:!1,form:{field:"",fieldName:""},tableData:[{number:"00",value:"鲜花"},{number:"01",value:"永生花礼盒"}]}},methods:{init:function(){this.dialogFormVisible=!0,this.tableData=[{number:"00",value:"鲜花",content1:"回显示11111"},{number:"01",value:"永生花礼盒",content1:"回显示22222"}]},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.dialogFormVisible=!1})},closeForm:function(){this.$refs.form.resetFields(),this.dialogFormVisible=!1},delTable:function(e){var t=this;this.$confirm('您确定要<span class="red">删除</span>这个枚举吗？',{type:"warning",dangerouslyUseHTMLString:!0}).then(function(l){t.tableData.splice(e,1),t.$message({type:"success",message:"删除枚举成功!"})}).catch(function(e){})},successCallback:function(e){this.tableData.push({number:e.number,value:e.value})},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}}},m={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"dialogProDic",style:{"margin-right":"last"===e.mr?"0px":"10px"}},[l("el-button",{attrs:{type:e.type,size:e.size},on:{click:e.init}},[e._v(e._s(e.title))]),e._v(" "),l("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:e.title,visible:e.dialogFormVisible,width:"700px",top:"0"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.closeForm}},[l("el-form",{ref:"form",staticClass:"formTop",attrs:{inline:!0,model:e.form,size:"small"}},[l("el-form-item",{attrs:{label:"字段",prop:"field"}},[l("el-input",{staticClass:"width250",attrs:{disabled:!0},model:{value:e.form.field,callback:function(t){e.$set(e.form,"field","string"==typeof t?t.trim():t)},expression:"form.field"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"字段名",prop:"fieldName"}},[l("el-input",{staticClass:"width250",attrs:{disabled:!0},model:{value:e.form.fieldName,callback:function(t){e.$set(e.form,"fieldName","string"==typeof t?t.trim():t)},expression:"form.fieldName"}})],1)],1),e._v(" "),l("div",{staticClass:"tableContainer"},[l("el-table",{ref:"multipleTable",attrs:{size:"medium",border:"",data:e.tableData,"tooltip-effect":"dark"}},[l("el-table-column",{attrs:{label:"枚举值编号",align:"center","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[l("div",[e._v(e._s(t.row.number))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"value",label:"枚举值",align:"center","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",align:"center",width:e.detailBtn?"80":"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("cdia-log",{attrs:{content1:t.row.content1,title:e.detailBtn?"详情":"编辑",type:e.detailBtn?"":"primary",size:"mini",typeFlag:e.typeFlag,detailBtn:e.detailBtn,mr:e.detailBtn?"last":""}}),e._v(" "),e.detailBtn?e._e():l("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(l){e.delTable(t.$index)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),e.detailBtn?e._e():l("cdia-log",{staticClass:"addBtn",attrs:{type:"",title:"添 加",typeFlag:e.typeFlag,size:"mini",btnWidth:!0},on:{dialogSuccess:e.successCallback}}),e._v(" "),l("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:2},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"small"},on:{click:e.closeForm}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var u={name:"ProductDictionaryMg",data:function(){return{searchData:{field:"",fieldName:""},tableData:[{field:"product_sort",fieldName:"产品分类",fieldType:"下拉列表",typeFlag:1},{field:"product_brand",fieldName:"产品品牌",fieldType:"下拉列表",typeFlag:2},{field:"Selected_sort",fieldName:"精选分类",fieldType:"下拉列表",typeFlag:3}],currentPage:2}},components:{DiaLog:l("VU/8")(d,m,!1,function(e){l("YN1Y")},"data-v-6f8e6a80",null).exports},methods:{resetForm:function(e){this.$refs[e].resetFields()},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}}},p={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"productDictionaryMg"},[l("el-form",{ref:"searchData",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchData,size:"small"}},[l("el-form-item",{attrs:{label:"字段",prop:"field"}},[l("el-input",{attrs:{placeholder:"请输入字段",clearable:""},model:{value:e.searchData.field,callback:function(t){e.$set(e.searchData,"field","string"==typeof t?t.trim():t)},expression:"searchData.field"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"字段名",prop:"fieldName"}},[l("el-input",{attrs:{placeholder:"请输入字段名",clearable:""},model:{value:e.searchData.fieldName,callback:function(t){e.$set(e.searchData,"fieldName","string"==typeof t?t.trim():t)},expression:"searchData.fieldName"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"}},[e._v("查询")]),e._v(" "),l("el-button",{on:{click:function(t){e.resetForm("searchData")}}},[e._v("重置")])],1)],1),e._v(" "),l("div",{staticClass:"divisionLine"}),e._v(" "),l("div",{staticClass:"tableBtn"}),e._v(" "),l("div",{staticClass:"tableContainer"},[l("el-table",{ref:"multipleTable",attrs:{size:"medium",border:"",data:e.tableData,"tooltip-effect":"dark"}},[l("el-table-column",{attrs:{type:"index",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"field",label:"字段",align:"center","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"fieldName",label:"字段名",align:"center","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"fieldType",label:"字段类型",align:"center","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("dia-log",{attrs:{title:"修改",size:"mini",typeFlag:t.row.typeFlag}}),e._v(" "),l("dia-log",{attrs:{title:"详情",size:"mini",type:"",mr:"last",typeFlag:t.row.typeFlag,detailBtn:!0}})]}}])})],1)],1),e._v(" "),l("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:2},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var f=l("VU/8")(u,p,!1,function(e){l("poDy")},null,null);t.default=f.exports}});
//# sourceMappingURL=1.8e76bd50b9e0503113e0.js.map