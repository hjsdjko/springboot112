"use strict";(self["webpackChunkvue3_nb0"]=self["webpackChunkvue3_nb0"]||[]).push([[723],{14723:(e,l,n)=>{n.r(l),n.d(l,{default:()=>y});n(14580),n(59075),n(61781);var a=n(44401),t=n(94899),u=n(71066),o=n(35320),r=function(e){return(0,a.dD)("data-v-671ba334"),e=e(),(0,a.Cn)(),e},i=r((function(){return(0,a._)("canvas",{id:"canvas",style:{background:"url(http://clfile.zggen.cn/20231120/5c406dea56f94e7a8862ce254a053b09.jpg) no-repeat center center / cover"}},null,-1)})),s={class:"login_view"},c=r((function(){return(0,a._)("div",{class:"title_view"},"家校合作平台登录",-1)})),v={key:0,class:"list_item"},d=r((function(){return(0,a._)("div",{class:"list_label"}," 账号： ",-1)})),f={key:1,class:"list_item"},p=r((function(){return(0,a._)("div",{class:"list_label"}," 密码： ",-1)})),m=["onKeydown"],g={key:2,class:"list_type"},_=r((function(){return(0,a._)("div",{class:"list_label"}," 用户类型： ",-1)})),w={class:"btn_view"};const h={__name:"login",setup:function(e){var l,n=(0,u.iH)([]),r=(0,u.iH)([]),h=(0,u.iH)({role:"",username:"",password:""}),k=(0,u.iH)(""),b=(0,u.iH)(1),y=null===(l=(0,a.FN)())||void 0===l?void 0:l.appContext.config.globalProperties,U=function(e){null===y||void 0===y||y.$router.push("/".concat(e,"Register"))},$=function(){if(h.value.username)if(h.value.password){if(n.value.length>1){if(!h.value.role)return null===y||void 0===y||y.$toolUtil.message("请选择角色","error"),void verifySlider.value.reset();for(var e=0;e<r.value.length;e++)r.value[e].roleName==h.value.role&&(k.value=r.value[e].tableName)}else k.value=n.value[0].tableName,h.value.role=n.value[0].roleName;N()}else null===y||void 0===y||y.$toolUtil.message("请输入密码","error");else null===y||void 0===y||y.$toolUtil.message("请输入用户名","error")},N=function(){null===y||void 0===y||y.$http({url:"".concat(k.value,"/login?username=").concat(h.value.username,"&password=").concat(h.value.password),method:"post"}).then((function(e){null===y||void 0===y||y.$toolUtil.storageSet("Token",e.data.token),null===y||void 0===y||y.$toolUtil.storageSet("role",h.value.role),null===y||void 0===y||y.$toolUtil.storageSet("sessionTable",k.value),null===y||void 0===y||y.$toolUtil.storageSet("adminName",h.value.username),null===y||void 0===y||y.$router.push("/")}),(function(e){}))},S=function(){var e={page:1,limit:1,sort:"id"};null===y||void 0===y||y.$http({url:"menu/list",method:"get",params:e}).then((function(e){r.value=JSON.parse(e.data.data.list[0].menujson);for(var l=0;l<r.value.length;l++)"是"==r.value[l].hasBackLogin&&n.value.push(r.value[l]);h.value.role=n.value[0].roleName,null===y||void 0===y||y.$toolUtil.storageSet("menus",JSON.stringify(r.value))}))},C=function(){S()};return(0,a.bv)((function(){C(),(0,o.Z)()})),function(e,l){var u=(0,a.up)("el-option"),o=(0,a.up)("el-select"),r=(0,a.up)("el-button"),k=(0,a.up)("el-form"),y=(0,a.up)("Vcode");return(0,a.wg)(),(0,a.iD)("div",null,[i,(0,a._)("div",s,[(0,a.Wm)(k,{model:h.value,class:"login_form"},{default:(0,a.w5)((function(){return[c,1==b.value?((0,a.wg)(),(0,a.iD)("div",v,[d,(0,a.wy)((0,a._)("input",{class:"list_inp","onUpdate:modelValue":l[0]||(l[0]=function(e){return h.value.username=e}),placeholder:"请输入账号"},null,512),[[t.nr,h.value.username]])])):(0,a.kq)("",!0),1==b.value?((0,a.wg)(),(0,a.iD)("div",f,[p,(0,a.wy)((0,a._)("input",{class:"list_inp","onUpdate:modelValue":l[1]||(l[1]=function(e){return h.value.password=e}),type:"password",placeholder:"请输入密码",onKeydown:(0,t.D2)($,["enter","native"])},null,40,m),[[t.nr,h.value.password]])])):(0,a.kq)("",!0),n.value.length>1?((0,a.wg)(),(0,a.iD)("div",g,[_,(0,a.Wm)(o,{modelValue:h.value.role,"onUpdate:modelValue":l[2]||(l[2]=function(e){return h.value.role=e}),placeholder:"请选择用户类型"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.value,(function(e,l){return(0,a.wg)(),(0,a.j4)(u,{label:e.roleName,value:e.roleName},null,8,["label","value"])})),256))]})),_:1},8,["modelValue"])])):(0,a.kq)("",!0),(0,a._)("div",w,[1==b.value?((0,a.wg)(),(0,a.j4)(r,{key:0,class:"login",type:"success",onClick:$},{default:(0,a.w5)((function(){return[(0,a.Uk)("登录")]})),_:1})):(0,a.kq)("",!0),(0,a.Wm)(r,{class:"register",type:"primary",onClick:l[3]||(l[3]=function(e){return U("xuesheng")})},{default:(0,a.w5)((function(){return[(0,a.Uk)("注册学生")]})),_:1}),(0,a.Wm)(r,{class:"register",type:"primary",onClick:l[4]||(l[4]=function(e){return U("jiazhang")})},{default:(0,a.w5)((function(){return[(0,a.Uk)("注册家长")]})),_:1}),(0,a.Wm)(r,{class:"register",type:"primary",onClick:l[5]||(l[5]=function(e){return U("jiaoshi")})},{default:(0,a.w5)((function(){return[(0,a.Uk)("注册教师")]})),_:1})])]})),_:1},8,["model"])]),(0,a.Wm)(y,{show:e.isShow,onSuccess:e.success,onClose:e.close,onFail:e.fail},null,8,["show","onSuccess","onClose","onFail"])])}}};var k=n(51059);const b=(0,k.Z)(h,[["__scopeId","data-v-671ba334"]]),y=b}}]);
//# sourceMappingURL=723.25b64207.js.map