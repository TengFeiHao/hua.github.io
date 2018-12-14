webpackJsonp([21],{DNZd:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("mvHQ"),s=r.n(o),i={name:"ProductDetail",components:{quillEditor:r("oEbJ").a},data:function(){return{videoFlag:!1,productPicturesVisible:!1,dialogVisible:!1,form:{productClass:"",productName:"",productBrand:"",productDescribe:"",coverMap:"",productPictures:"",recommendationReason:"",specificationParameter:"",maintenanceInstructions:"",originalPrice:"",discount:"",exclusivePrice:"",projectStock:"",remarks:"",transportRemarks:"",retreatRemarks:"",freight:0},formLabelWidth:"90px",rules:{productClass:[{required:!0,message:"请选择产品分类",trigger:"change"}],productName:[{required:!0,message:"请输入产品名称",trigger:"blur"}],productBrand:[{required:!0,message:"请选择产品品牌",trigger:"change"}],productDescribe:[{required:!0,message:"请输入产品描述",trigger:"blur"}],coverMap:[{required:!0,message:"请上传封面图",trigger:"change"}],productPictures:[{required:!0,message:"请上传产品图片或视频",trigger:"change"}],originalPrice:[{required:!0,message:"请输入产品原价",trigger:"blur"}],projectStock:[{required:!0,message:"请输入产品库存数量",trigger:"blur"}],freight:[{required:!0,message:"请输入产品运费",trigger:"blur"}]}}},computed:{presentPrice:function(){return this.form.originalPrice*(this.form.discount/100?this.form.discount/100:1)}},created:function(){},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.closeForm()})},closeForm:function(){this.$refs.form.resetFields();var e=JSON.parse(sessionStorage.getItem("tags")),t=e.findIndex(function(e,t){return"/addProduct"===e.path});e.splice(t,1),sessionStorage.setItem("tags",s()(e)),this.$router.push("/productUpperMg")},coverMapBeforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type||"image/jpg"===e.type,r=e.size/1024/1024<2;return t||this.$message.error("上传产品图片只能是 jpg/jpeg/png 格式!"),r||this.$message.error("上传产品图片大小不能超过 500KB!"),t&&r},coverMapRemove:function(e,t){t.length||(this.form.coverMap="")},coverMapPictureCardPreview:function(e){this.form.coverMap=e.url,this.dialogVisible=!0,this.$refs.coverMap.clearValidate()},exceedFuc:function(){this.$message.error("产品封面图只允许上传一张!")},coverMapSuccess:function(e,t){this.form.coverMap=URL.createObjectURL(t.raw),this.$refs.coverMap.clearValidate()},coverMapError:function(){this.$message.error("产品封面上传失败!")},productPicturesUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type||"image/jpg"===e.type||"video/mp4"===e.type,r=null;return r="video/mp4"===e.type?e.size/1024/1024<2:e.size/1024<500,t||this.$message.error("上传产品图片只能是 jpg/jpeg/png 格式! 视频只能是MP4格式!"),"video/mp4"!==e.type||r?r||this.$message.error("上传产品图片大小不能超过 500KB!"):this.$message.error("上传产品视频大小不能超过 2MB!"),t&&r},productPicturesRemove:function(e,t){t.length||(this.form.productPictures="")},productPicturesPreview:function(e){this.form.productPictures=e.url,this.videoFlag="video/mp4"===e.raw.type,this.productPicturesVisible=!0,this.$refs.productPictures.clearValidate()},productPicturesSuccess:function(e,t){this.form.productPictures=URL.createObjectURL(t.raw),this.$refs.productPictures.clearValidate()},productPicturesError:function(e,t){"video/mp4"===t.raw.type?this.$message.error("产品视频上传失败!"):this.$message.error("产品图片上传失败!")},productPictureseExceedFuc:function(){this.$message.error("产品视图最多只允许上传8张!")}}},a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"productDetail"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,size:"small","label-width":e.formLabelWidth}},[r("el-form-item",{attrs:{label:"产品分类",prop:"productClass"}},[r("el-select",{staticClass:"selectWidth",attrs:{clearable:!0,placeholder:"请选择产品分类"},model:{value:e.form.productClass,callback:function(t){e.$set(e.form,"productClass","string"==typeof t?t.trim():t)},expression:"form.productClass"}},[r("el-option",{attrs:{label:"为你推荐",value:"1"}}),e._v(" "),r("el-option",{attrs:{label:"鲜花系列",value:"2"}}),e._v(" "),r("el-option",{attrs:{label:"干花系列",value:"3"}}),e._v(" "),r("el-option",{attrs:{label:"礼品系列",value:"4"}}),e._v(" "),r("el-option",{attrs:{label:"绿植多肉",value:"5"}}),e._v(" "),r("el-option",{attrs:{label:"花器耗材",value:"6"}}),e._v(" "),r("el-option",{attrs:{label:"专属定制",value:"7"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"产品名称",prop:"productName"}},[r("el-input",{staticClass:"inputWidth",attrs:{clearable:!0,placeholder:"请输入产品名称"},model:{value:e.form.productName,callback:function(t){e.$set(e.form,"productName",t)},expression:"form.productName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"产品品牌",prop:"productBrand"}},[r("el-select",{staticClass:"selectWidth",attrs:{placeholder:"请选择产品品牌",clearable:""},model:{value:e.form.productBrand,callback:function(t){e.$set(e.form,"productBrand","string"==typeof t?t.trim():t)},expression:"form.productBrand"}},[r("el-option",{attrs:{label:"HTF_HZH",value:"1"}}),e._v(" "),r("el-option",{attrs:{label:"NIUBINHJ",value:"2"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"产品描述",prop:"productDescribe"}},[r("el-input",{staticClass:"inputWidth",attrs:{clearable:!0,placeholder:"请输入产品描述"},model:{value:e.form.productDescribe,callback:function(t){e.$set(e.form,"productDescribe","string"==typeof t?t.trim():t)},expression:"form.productDescribe"}})],1),e._v(" "),r("el-form-item",{ref:"coverMap",staticClass:"coverMap",attrs:{label:"封面图",prop:"coverMap"}},[r("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",accept:"image/png, image/jpeg, image/jpg","list-type":"picture-card",limit:1,"on-exceed":e.exceedFuc,"on-preview":e.coverMapPictureCardPreview,"on-success":e.coverMapSuccess,"on-error":e.coverMapError,"before-upload":e.coverMapBeforeUpload,"on-remove":e.coverMapRemove}},[r("i",{staticClass:"el-icon-plus"}),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("请上传png、jpg及jpeg格式图片(大小500KB以下)")])]),e._v(" "),r("el-dialog",{staticStyle:{padding:"0"},attrs:{visible:e.dialogVisible,"show-close":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("img",{staticClass:"coverMap",attrs:{width:"100%",src:e.form.coverMap}})])],1),e._v(" "),r("el-form-item",{ref:"productPictures",staticClass:"productPictures",staticStyle:{width:"71%"},attrs:{label:"产品视图",prop:"productPictures"}},[r("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card",limit:8,accept:"image/png, image/jpeg, image/jpg, video/mp4","on-exceed":e.productPictureseExceedFuc,"on-preview":e.productPicturesPreview,"on-success":e.productPicturesSuccess,"on-error":e.productPicturesError,"before-upload":e.productPicturesUpload,"on-remove":e.productPicturesRemove}},[r("i",{staticClass:"el-icon-plus"}),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("请上传png、jpg及jpeg格式图片(大小500KB以下)   请上传mp4文件(大小2MB以下)")])]),e._v(" "),r("el-dialog",{attrs:{visible:e.productPicturesVisible,"show-close":!1},on:{"update:visible":function(t){e.productPicturesVisible=t}}},[e.videoFlag?r("video",{attrs:{width:"100%",src:e.form.productPictures,controls:"controls"}},[e._v("您的浏览器不支持视频播放")]):r("img",{staticClass:"productPictures",attrs:{width:"100%",src:e.form.productPictures}})])],1),e._v(" "),r("el-form-item",{attrs:{label:"原价",prop:"originalPrice"}},[r("el-input",{staticClass:"inputWidth",attrs:{clearable:!0,placeholder:"请输入原价"},model:{value:e.form.originalPrice,callback:function(t){e.$set(e.form,"originalPrice","string"==typeof t?t.trim():t)},expression:"form.originalPrice"}}),e._v("  元\n    ")],1),e._v(" "),r("el-form-item",{attrs:{label:"折扣值",prop:"discount"}},[r("el-input",{staticClass:"inputWidth",attrs:{clearable:!0,placeholder:"请输入折扣值"},model:{value:e.form.discount,callback:function(t){e.$set(e.form,"discount","string"==typeof t?t.trim():t)},expression:"form.discount"}}),e._v("  %\n    ")],1),e._v(" "),r("el-form-item",{attrs:{label:"现价"}},[r("el-input",{staticClass:"inputWidth",attrs:{clearable:!0,disabled:!0},model:{value:e.presentPrice,callback:function(t){e.presentPrice="string"==typeof t?t.trim():t},expression:"presentPrice"}}),e._v("  元\n    ")],1),e._v(" "),r("el-form-item",{attrs:{label:"会员专享价",prop:"exclusivePrice"}},[r("el-input",{staticClass:"inputWidth",attrs:{clearable:!0,placeholder:"请输入会员专享价"},model:{value:e.form.exclusivePrice,callback:function(t){e.$set(e.form,"exclusivePrice","string"==typeof t?t.trim():t)},expression:"form.exclusivePrice"}}),e._v("  元\n    ")],1),e._v(" "),r("el-form-item",{attrs:{label:"库存数量",prop:"projectStock"}},[r("el-input",{staticClass:"inputWidth",attrs:{clearable:!0,placeholder:"请输入库存数量"},model:{value:e.form.projectStock,callback:function(t){e.$set(e.form,"projectStock","string"==typeof t?t.trim():t)},expression:"form.projectStock"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"特别提醒",prop:"remarks"}},[r("el-input",{staticClass:"textarea",attrs:{clearable:!0,resize:"none",type:"textarea",rows:3,placeholder:"请输入特别提醒"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks","string"==typeof t?t.trim():t)},expression:"form.remarks"}})],1),e._v(" "),r("el-form-item",{ref:"recommendationReason",attrs:{label:"推荐理由",prop:"recommendationReason"}},[r("quillEditor",{ref:"quillEditor",attrs:{placeholder:"请输入推荐理由"}})],1),e._v(" "),r("el-form-item",{ref:"specificationParameter",attrs:{label:"规格参数",prop:"specificationParameter"}},[r("quillEditor",{ref:"quillEditor",attrs:{placeholder:"请输入规格参数"}})],1),e._v(" "),r("el-form-item",{ref:"maintenanceInstructions",attrs:{label:"保养说明",prop:"maintenanceInstructions"}},[r("quillEditor",{ref:"quillEditor",attrs:{placeholder:"请输入保养说明"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"运输说明",prop:"transportRemarks"}},[r("el-input",{staticClass:"textarea",attrs:{clearable:!0,resize:"none",type:"textarea",rows:3,placeholder:"请输入运输说明"},model:{value:e.form.transportRemarks,callback:function(t){e.$set(e.form,"transportRemarks","string"==typeof t?t.trim():t)},expression:"form.transportRemarks"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"退换货说明",prop:"retreatRemarks"}},[r("el-input",{staticClass:"textarea",attrs:{clearable:!0,resize:"none",type:"textarea",rows:3,placeholder:"请输入退换货说明"},model:{value:e.form.retreatRemarks,callback:function(t){e.$set(e.form,"retreatRemarks","string"==typeof t?t.trim():t)},expression:"form.retreatRemarks"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"运费",prop:"freight"}},[r("el-input",{staticClass:"inputWidth",attrs:{clearable:!0,placeholder:"请输入运费"},model:{value:e.form.freight,callback:function(t){e.$set(e.form,"freight","string"==typeof t?t.trim():t)},expression:"form.freight"}}),e._v("  元\n    ")],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:e.closeForm}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("确 定")])],1),e._v(" "),e._m(0)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"iphoneContainer"},[t("div",{staticClass:"iphone"},[t("div",{staticClass:"iphoneTop"}),this._v(" "),t("div",{staticClass:"content"})])])}]};var l=r("VU/8")(i,a,!1,function(e){r("Dq7N")},null,null);t.default=l.exports},Dq7N:function(e,t){}});
//# sourceMappingURL=21.fa95c8026129972854c1.js.map