import{n as m,k as v,s as w,_ as t,h as d}from"./vendor.js";import{S as _}from"./SettingsInfoTooltip.js";const x={name:"ReportInfobox",components:{SettingsInfoTooltip:_},props:{title:String,value:{default:"0",type:String},id:String,days:Number,tooltip:String,change:Number,color:{default:"green",type:String},direction:{default:"up",type:String}},computed:{compare(){return v("vs. Previous Day",w("vs. Previous %s Days",this.days),this.days,"google-analytics-dashboard-for-wp")},changeClass(){let a="exactmetrics-reports-infobox-prev ";return typeof this.change>"u"?a+" exactmetrics-prev-nochange":a+" exactmetrics-"+this.color},changeText(){return this.change?this.direction===""?this.change+"%":'<span class="exactmetrics-arrow exactmetrics-'+this.direction+" exactmetrics-"+this.color+'"></span> '+this.change+"%":t("No change","google-analytics-dashboard-for-wp")}}};var C=function(){var e=this,o=e._self._c;return o("div",{staticClass:"exactmetrics-reports-infobox",attrs:{id:e.id}},[e.title?o("div",{staticClass:"exactmetrics-report-title",domProps:{textContent:e._s(e.title)}}):e._e(),e.tooltip?o("settings-info-tooltip",{attrs:{content:e.tooltip}}):e._e(),e.value!==""?o("div",{staticClass:"exactmetrics-reports-infobox-number",attrs:{title:e.value},domProps:{textContent:e._s(e.value)}}):e._e(),e.value===""?o("div",{staticClass:"exactmetrics-reports-infobox-number",attrs:{title:e.value},domProps:{textContent:e._s(0)}}):e._e(),o("div",{class:e.changeClass,domProps:{innerHTML:e._s(e.changeText)}}),e.days?o("div",{staticClass:"exactmetrics-reports-infobox-compare",domProps:{textContent:e._s(e.compare)}}):e._e()],1)},T=[],R=m(x,C,T,!1,null,null,null,null);const E=R.exports,S={name:"ReportReAuth",data(){return{text_no_auth:t("ExactMetrics encountered an error loading your report data","google-analytics-dashboard-for-wp"),text_auth_label:t("There is an issue with your Google Account authentication. Please use the button below to fix it by re-authenticating.","google-analytics-dashboard-for-wp"),text_button_reconnect:t("Reconnect ExactMetrics","google-analytics-dashboard-for-wp")}},methods:{doReAuth:function(a){a.preventDefault();const e=this;this.$swal({type:"info",title:t("Re-Authenticating","google-analytics-dashboard-for-wp"),allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,onOpen:function(){e.$swal.showLoading()}}),this.$store.dispatch("$_auth/doReAuth",this.is_network).then(function(o){o.data.redirect?window.location=o.data.redirect:e.$swal({type:"error",title:t("Error","google-analytics-dashboard-for-wp"),text:o.data.message,confirmButtonText:t("Ok","google-analytics-dashboard-for-wp")})})}}};var L=function(){var e=this,o=e._self._c;return o("div",{staticClass:"exactmetrics-not-authenticated-notice"},[o("h3",{domProps:{textContent:e._s(e.text_no_auth)}}),o("p",{domProps:{textContent:e._s(e.text_auth_label)}}),o("p",[o("button",{staticClass:"exactmetrics-button",domProps:{textContent:e._s(e.text_button_reconnect)},on:{click:e.doReAuth}})])])},P=[],k=m(S,L,P,!1,null,null,null,null);const $=k.exports,O={install(a){const e=this;a.prototype.$miOverviewTooltips=function(o){if(!o.title)return document.querySelectorAll(".exactmetrics-line-chart-tooltip").forEach(function(y){y.style.opacity=0}),!1;let i=o.title[0],g=o.title[1],r=parseInt(o.title[2]),n=o.title[3],c=o.title[4]?o.title[4]:o.title[2],h=o.title[5]?o.title[5]:[],s=document.getElementById("exactmetrics-chartjs-line-"+c+"-tooltip");if(s===null&&(s=document.createElement("div"),document.body.appendChild(s),s.setAttribute("id","exactmetrics-chartjs-line-"+c+"-tooltip"),s.classList.add("exactmetrics-line-chart-tooltip")),!o.opacity){s.style.opacity=0;return}s.classList.remove("above"),s.classList.remove("below"),s.classList.remove("no-transform"),o.yAlign?s.classList.add(o.yAlign):s.classList.add("no-transform");let p="";r&&(r===0?p+="0%":r>0?p+='<span class="exactmetrics-green"><span class="exactmetrics-arrow exactmetrics-up"></span>&nbsp;'+r+"%</span>":p+='<span class="exactmetrics-red"><span class="exactmetrics-arrow exactmetrics-down"></span>&nbsp;'+Math.abs(r)+"%</span>");let l='<div class="exactmetrics-reports-overview-datagraph-tooltip-container exactmetrics-reports-tooltip">';l+='<div class="exactmetrics-reports-overview-datagraph-tooltip-number">'+g+"</div>",l+='<div class="exactmetrics-reports-overview-datagraph-tooltip-trend">'+p+"</div>",n&&(l+='<div class="exactmetrics-reports-overview-datagraph-tooltip-descriptor">'+n+"</div>"),l+='<div class="exactmetrics-reports-overview-datagraph-tooltip-title">'+i+"</div>",h&&(l+="<hr>",h.forEach(f=>{f.title&&(l+=f.title+"<br>")})),l+="</div>",s.innerHTML=l;const u=this._chart.canvas.getBoundingClientRect();s.style.opacity="1",s.style.left=u.left+window.pageXOffset+o.x+"px",s.style.top=u.top+window.pageYOffset+o.y+"px",s.style.fontFamily="Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;",s.style.fontSize=o.fontSize,s.style.fontStyle=o._fontStyle,s.style.padding=o.yPadding+"px "+o.xPadding+"px",s.style.zIndex=99999,s.style.pointerEvents="none"},a.prototype.$miPieTooltips=function(o){if(!o.title)return document.querySelectorAll(".exactmetrics-pie-chart-tooltip").forEach(function(s){s.style.opacity=0}),!1;let i=o.title[0],g=o.title[1],r=o.title[2],n=document.getElementById("exactmetrics-chartjs-pie-"+r+"-tooltip");n===null&&(n=document.createElement("div"),document.body.appendChild(n),n.setAttribute("id","exactmetrics-chartjs-pie-"+r+"-tooltip")),n.classList.remove("above"),n.classList.remove("below"),n.classList.remove("no-transform"),o.yAlign?n.classList.add(o.yAlign):n.classList.add("no-transform");let c='<div class="exactmetrics-reports-overview-datagraph-tooltip-container exactmetrics-reports-doughnut-tooltip">';c+='<div class="exactmetrics-reports-overview-datagraph-tooltip-title">'+g+"%</div>",c+='<div class="exactmetrics-reports-overview-datagraph-tooltip-number">'+i+"</div>",c+="</div>",n.innerHTML=c,n.style.opacity=1,n.style.padding=o.yPadding+"px "+o.xPadding+"px",n.style.zIndex="99999"},a.prototype.$mi_loading_toast=function(o){let i="exactmetrics-swal exactmetrics-swal-loading";window.scrollY>0&&(i+=" exactmetrics-swal-full-height"),a.prototype.$swal({customContainerClass:i,type:"info",title:o||t("Loading new report data","google-analytics-dashboard-for-wp"),html:t("Please wait...","google-analytics-dashboard-for-wp"),allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,animation:!1,onOpen:function(){a.prototype.$swal.showLoading(),e.addCustomLoader()}})},a.prototype.$mi_success_toast=function(o){let{animation:i=!1,toast:g=!0,position:r="top-end",showConfirmButton:n=!1,type:c="success",timer:h=3e3,customClass:s="mi-success",showCloseButton:p=!0,title:l=t("Settings Updated","google-analytics-dashboard-for-wp"),showCancelButton:u=!1,confirmButtonText:f="",cancelButtonText:y="",text:b=""}=o;return a.prototype.$swal({customContainerClass:"exactmetrics-swal",animation:i,toast:g,position:r,showConfirmButton:n,type:c,customClass:s,showCloseButton:p,title:l,timer:h,showCancelButton:u,confirmButtonText:f,cancelButtonText:y,text:b})},a.prototype.$mi_error_toast=function(o){let i=t("Continue %s","google-analytics-dashboard-for-wp"),{type:g="error",customContainerClass:r="exactmetrics-swal exactmetrics-swal-succcess",allowOutsideClick:n=!1,allowEscapeKey:c=!1,allowEnterKey:h=!1,title:s=t("Error","google-analytics-dashboard-for-wp"),html:p=t("Please try again.","google-analytics-dashboard-for-wp"),confirmButtonText:l=w(i,'<i class="monstericon-long-arrow-right-light"></i>'),showCancelButton:u=!1,cancelButtonText:f="Cancel",footer:y=!1}=o;return a.prototype.$swal({type:g,customContainerClass:r,allowOutsideClick:n,allowEscapeKey:c,allowEnterKey:h,title:s,html:'<div class="exactmetrics-swal-icons"><i class="monstericon-exclamation-em-solid"></i><i class="monstericon-exclamation-em-solid"></i><i class="monstericon-exclamation-em-solid"></i><i class="monstericon-exclamation-em-solid"></i></div><p>'+p+"</p>",footer:y,showCancelButton:u,cancelButtonText:f,confirmButtonText:l,onOpen:function(){a.prototype.$swal.hideLoading()}})},a.prototype.$mi_get_upsell_content=function(o){let i={};const g={overview:{mainheading:t("Publishers Report","google-analytics-dashboard-for-wp"),title:t("Improve Your Conversion Rate With Insights Into Which Content Works Best.","google-analytics-dashboard-for-wp"),subtitle:t("Stop guessing about what content your visitors are interested in. ExactMetrics Publisher Report shows you exactly which content gets the most visits, so you can analyze and optimize it for higher conversions.","google-analytics-dashboard-for-wp"),features:[t("Top Landing Pages","google-analytics-dashboard-for-wp"),t("Top Affilliate Links","google-analytics-dashboard-for-wp"),t("Top Exit Pages","google-analytics-dashboard-for-wp"),t("Top Download Links","google-analytics-dashboard-for-wp"),t("Top Outbound Links","google-analytics-dashboard-for-wp"),t("Scroll Depth","google-analytics-dashboard-for-wp")]},publisher:{mainheading:t("Publishers Report","google-analytics-dashboard-for-wp"),title:t("Improve Your Conversion Rate With Insights Into Which Content Works Best.","google-analytics-dashboard-for-wp"),features:[t("Top Landing Pages","google-analytics-dashboard-for-wp"),t("Top Affilliate Links","google-analytics-dashboard-for-wp"),t("Top Exit Pages","google-analytics-dashboard-for-wp"),t("Top Download Links","google-analytics-dashboard-for-wp"),t("Top Outbound Links","google-analytics-dashboard-for-wp"),t("Scroll Depth","google-analytics-dashboard-for-wp")]},ecommerce:{mainheading:t("eCommerce Report","google-analytics-dashboard-for-wp"),title:t("Increase Sales and Make More Money With Enhanced eCommerce Insights.","google-analytics-dashboard-for-wp"),features:[t("10+ eCommerce Integrations","google-analytics-dashboard-for-wp"),t("Average Order Value","google-analytics-dashboard-for-wp"),t("Total Revenue","google-analytics-dashboard-for-wp"),t("Sessions to Purchase","google-analytics-dashboard-for-wp"),t("Top Conversion Sources","google-analytics-dashboard-for-wp"),t("Top Products","google-analytics-dashboard-for-wp"),t("Number of Transactions","google-analytics-dashboard-for-wp"),t("Time to Purchase","google-analytics-dashboard-for-wp")]},dimensions:{mainheading:t("Dimensions Report","google-analytics-dashboard-for-wp"),title:t("Increase Engagement and Unlock New Insights About Your Site.","google-analytics-dashboard-for-wp"),features:[t("Author Tracking","google-analytics-dashboard-for-wp"),t("User ID Tracking","google-analytics-dashboard-for-wp"),t("Post Types","google-analytics-dashboard-for-wp"),t("Tag Tracking","google-analytics-dashboard-for-wp"),t("Categories","google-analytics-dashboard-for-wp"),t("SEO Scores","google-analytics-dashboard-for-wp"),t("Publish Times","google-analytics-dashboard-for-wp"),t("Focus Keywords","google-analytics-dashboard-for-wp")]},forms:{mainheading:t("Forms Report","google-analytics-dashboard-for-wp"),title:t("Track Every Type of Web Form and Gain Visibility Into Your Customer Journey.","google-analytics-dashboard-for-wp"),columns:1,features:[t("Conversion Counts","google-analytics-dashboard-for-wp"),t("Impression Counts","google-analytics-dashboard-for-wp"),t("Conversion Rates","google-analytics-dashboard-for-wp")]},queries:{mainheading:t("Search Console Report","google-analytics-dashboard-for-wp"),title:t("See Exactly How Visitors Find Your Website From Google.","google-analytics-dashboard-for-wp"),columns:1,features:[t("Top Google Search Terms","google-analytics-dashboard-for-wp"),t("Number of Clicks","google-analytics-dashboard-for-wp"),t("Click-through Ratio","google-analytics-dashboard-for-wp"),t("Average Results Position","google-analytics-dashboard-for-wp")]},realtime:{mainheading:t("Realtime Report","google-analytics-dashboard-for-wp"),title:t("See Who And What is Happening on Your Website in Realtime.","google-analytics-dashboard-for-wp"),features:[t("Top Page Views","google-analytics-dashboard-for-wp"),t("Current Active Users","google-analytics-dashboard-for-wp"),t("Top Referral Sources","google-analytics-dashboard-for-wp"),t("Pageviews Per Minute","google-analytics-dashboard-for-wp"),t("Top Countries","google-analytics-dashboard-for-wp"),t("Top Cities","google-analytics-dashboard-for-wp")]},sitespeed:{mainheading:t("Site Speed Report","google-analytics-dashboard-for-wp"),title:t("Improve Your User Experience and Improve Search Engine Rankings.","google-analytics-dashboard-for-wp"),features:[t("Overall Site Speed Score","google-analytics-dashboard-for-wp"),t("Server Response Times","google-analytics-dashboard-for-wp"),t("Mobile and Desktop Scores","google-analytics-dashboard-for-wp"),t("First Contentful Paint","google-analytics-dashboard-for-wp"),t("Automatic Recommendations","google-analytics-dashboard-for-wp"),t("Total Blocking Time","google-analytics-dashboard-for-wp"),t("On-Demand Audits","google-analytics-dashboard-for-wp"),t("Time to Interactive","google-analytics-dashboard-for-wp")]}};return g[o]&&(i=g[o]),i},a.prototype.$mi_intervals=function(){return{today:{text:t("Today","google-analytics-dashboard-for-wp"),start:d(),end:d(),interval:"today"},yesterday:{text:t("Yesterday","google-analytics-dashboard-for-wp"),start:d().subtract(1,"days"),end:d().subtract(1,"days"),interval:"yesterday"},lastweek:{text:t("Last Week","google-analytics-dashboard-for-wp"),end:d().startOf("week"),start:d().startOf("week").subtract(6,"days"),interval:"lastweek"},lastmonth:{text:t("Last Month","google-analytics-dashboard-for-wp"),end:d().startOf("month").subtract(1,"days"),start:d().startOf("month").subtract(1,"month"),interval:"lastmonth"},last7days:{text:t("Last 7 days","google-analytics-dashboard-for-wp"),end:d().subtract(1,"days"),start:d().subtract(7,"days"),interval:"last7days"},last30days:{text:t("Last 30 days","google-analytics-dashboard-for-wp"),end:d().subtract(1,"days"),start:d().subtract(30,"days"),interval:"last30days"}}}},addCustomLoader(){let a='<div class="exactmetrics-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';document.querySelector(".swal2-actions.swal2-loading").innerHTML=a}};export{O as M,E as R,$ as a};
