webpackJsonp([8],{Ao6V:function(t,e){},"C/OS":function(t,e){},MEOT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={name:"DialogMinfoMg",props:{title:{type:String}},data:function(){return{dialogFormVisible:!1}},methods:{closeForm:function(){this.dialogFormVisible=!1},brush:function(){this.$emit("brush","传值")}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialogMinfoMg",staticStyle:{"margin-right":"0px"}},[a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v(t._s(t.title))]),t._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:t.title,visible:t.dialogFormVisible,width:"500px",top:"0"},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.closeForm}},[a("table",{attrs:{border:"1",width:"100%",cellspacing:"0",align:"center"}},[a("tbody",[a("tr",[a("td",{staticClass:"weight",attrs:{width:"80"}},[t._v("\n            昵称\n          ")]),t._v(" "),a("td",{attrs:{width:"112"}},[t._v("\n            Daisy\n          ")]),t._v(" "),a("td",{staticClass:"weight",attrs:{width:"80"}},[t._v("性别")]),t._v(" "),a("td",{attrs:{width:"100"}},[t._v("女")]),t._v(" "),a("td",{staticClass:"userImg",attrs:{rowspan:"2"}},[a("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543136214224&di=8461231c4bd4f6af0e4c75d353fe619d&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171207%2F60918cbd27fe4642b2b68668f450abed.jpeg",alt:""}})])]),t._v(" "),a("tr",[a("td",{staticClass:"weight"},[t._v("城市")]),t._v(" "),a("td",[t._v("北京")]),t._v(" "),a("td",{staticClass:"weight"},[t._v("\n            手机号\n          ")]),t._v(" "),a("td",[t._v("13888888888")])]),t._v(" "),a("tr",[a("td",{staticClass:"weight"},[t._v("等级")]),t._v(" "),a("td",[t._v("黑卡")]),t._v(" "),a("td",{staticClass:"weight"},[t._v("升级渠道")]),t._v(" "),a("td",{attrs:{colspan:"2"}},[t._v("特权")])]),t._v(" "),a("tr",[a("td",{staticClass:"weight"},[t._v("成长值(总)")]),t._v(" "),a("td",[t._v("6666")]),t._v(" "),a("td",{staticClass:"weight"},[t._v("成长值(刷)")]),t._v(" "),a("td",[t._v("9999")]),t._v(" "),a("td",[a("span",{staticClass:"brush",on:{click:t.brush}},[t._v("刷成长值")])])]),t._v(" "),a("tr",[a("td",{staticClass:"weight",attrs:{colspan:"3"}},[t._v("近12月累计消费")]),t._v(" "),a("td",{attrs:{colspan:"2"}},[t._v("￥188,888.88")])]),t._v(" "),a("tr",[a("td",{staticClass:"weight",attrs:{colspan:"3"}},[t._v("注册时间")]),t._v(" "),a("td",{attrs:{colspan:"2"}},[t._v("2018-11-28 17：04：43")])])])]),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:t.closeForm}},[t._v("关 闭")])],1)])],1)},staticRenderFns:[]};var n={name:"OperatorInforMg",data:function(){return{searchData:{phone:"",name:"",MGrade:"",channel:""},tableData:[{name:"Daisy",phone:"15010726635",growUp:"3333",grow:"金卡/Plus会员",channels:"特权",consumption:"188,888.88",currentTime:"2018-08-26 11:16:34"},{name:"Tidy",phone:"15010726635",growUp:"4444",grow:"黑卡",channels:"常规",consumption:"99,999.99",currentTime:"2018-08-26 11:16:34"}],currentPage:2,multipleSelection:[],delflag:!0}},components:{DiaLog:a("VU/8")(l,s,!1,function(t){a("C/OS")},"data-v-4590291e",null).exports},methods:{resetForm:function(t){this.$refs[t].resetFields()},handleSelectionChange:function(t){var e=this;this.multipleSelection=t,this.delflag=!1,this.multipleSelection.some(function(t){if("启用"===t.state)return e.delflag=!0,!1})},brush:function(t){var e=this;this.$prompt("","刷成长值",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^[1-9]\d*$/,inputPlaceholder:"请输入成长值",inputErrorMessage:"内容必须为数字且不能以0开头"}).then(function(t){t.value;e.$message({type:"success",message:"刷成长值成功"})}).catch(function(){})},handleEdit:function(t,e){alert(t,e)},handleDetail:function(t,e){alert(t,e)},cancel:function(){var t=this;this.$confirm('您确定要把被选中的用户<span class="red">取消黑卡</span>吗？',{type:"warning",dangerouslyUseHTMLString:!0}).then(function(e){t.$message({type:"success",message:"取消黑卡成功!"})}).catch(function(t){})},setUp:function(){var t=this;this.$confirm('您确定要把被选中的用户<span class="red">设置为黑卡</span>吗？',{type:"warning",dangerouslyUseHTMLString:!0}).then(function(e){t.$message({type:"success",message:"设置黑卡成功!"})}).catch(function(t){})},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"memberInforMg"},[a("el-form",{ref:"searchData",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.searchData,size:"small","label-width":"68px"}},[a("el-form-item",{attrs:{label:"昵称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入昵称",clearable:""},model:{value:t.searchData.name,callback:function(e){t.$set(t.searchData,"name","string"==typeof e?e.trim():e)},expression:"searchData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[a("el-input",{attrs:{placeholder:"请输入手机号",clearable:""},model:{value:t.searchData.phone,callback:function(e){t.$set(t.searchData,"phone","string"==typeof e?e.trim():e)},expression:"searchData.phone"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"会员等级",prop:"MGrade"}},[a("el-select",{attrs:{placeholder:"请选择会员等级",clearable:""},model:{value:t.searchData.MGrade,callback:function(e){t.$set(t.searchData,"MGrade","string"==typeof e?e.trim():e)},expression:"searchData.MGrade"}},[a("el-option",{attrs:{label:"全部",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"普卡",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"金卡",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"白金卡",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"钻石卡",value:"4"}}),t._v(" "),a("el-option",{attrs:{label:"黑卡",value:"5"}}),t._v(" "),a("el-option",{attrs:{label:"Plus会员",value:"6"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"升级渠道",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择升级渠道",clearable:""},model:{value:t.searchData.channel,callback:function(e){t.$set(t.searchData,"channel","string"==typeof e?e.trim():e)},expression:"searchData.channel"}},[a("el-option",{attrs:{label:"常规",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"购卡",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"特权",value:"2"}})],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"}},[t._v("查询")]),t._v(" "),a("el-button",{on:{click:function(e){t.resetForm("searchData")}}},[t._v("重置")])],1)],1),t._v(" "),a("div",{staticClass:"divisionLine"}),t._v(" "),a("div",{staticClass:"tableBtn"},[a("el-button",{attrs:{type:"primary",size:"small",disabled:0===t.multipleSelection.length},on:{click:t.brush}},[t._v("刷成长值")]),t._v(" "),a("el-button",{attrs:{size:"small",disabled:0===t.multipleSelection.length},on:{click:t.setUp}},[t._v("设为黑卡")]),t._v(" "),a("el-button",{attrs:{size:"small",disabled:0===t.multipleSelection.length},on:{click:t.cancel}},[t._v("取消黑卡")])],1),t._v(" "),a("div",{staticClass:"tableContainer"},[a("el-table",{ref:"multipleTable",attrs:{size:"medium",border:"",data:t.tableData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection","label-class-name":"checkboxSelect",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"昵称",align:"center","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机号",align:"center",width:"112","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"growUp",label:"成长值",align:"center",width:"70","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"grow",label:"等级",align:"center",width:"112","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"channels",label:"升级渠道",align:"center",width:"78","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"consumption",label:"近12月累计消费（元）",align:"center","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"currentTime",label:"最近登录时间",align:"center","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("dia-log",{attrs:{title:"详情"},on:{brush:t.brush}})]}}])})],1)],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:2},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},staticRenderFns:[]};var i=a("VU/8")(n,o,!1,function(t){a("Ao6V")},null,null);e.default=i.exports}});
//# sourceMappingURL=8.342034908179c2c17189.js.map