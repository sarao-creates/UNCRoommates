(this["webpackJsonpunc-roommates"]=this["webpackJsonpunc-roommates"]||[]).push([[0],{122:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},153:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(15),c=a.n(s),i=a(32),r=a(19),o=a(16),l=a.n(o),d=a(22),u=a(49),j=a(40),h=a(14),m=a(211),p=a(202),b=a(216),f=a(214),O=a(44);a(165),a(120);O.a.initializeApp({apiKey:"AIzaSyB_elxSfuS69iB-JZVhVlxWd0oJ4QT0ep4",authDomain:"unc-roommates.firebaseapp.com",projectId:"unc-roommates",storageBucket:"unc-roommates.appspot.com",messagingSenderId:"752133887022",appId:"1:752133887022:web:c017e5ce4f53eefdc23bbf",measurementId:"G-67FM5MRBR4"});var x=O.a.auth,g=O.a.firestore(),v=O.a.auth(),k=(a(122),a(96)),w=a.n(k),N=a(97),C=a.n(N),y=a(95),S=a.n(y),I=a(94),A=a.n(I),P=a(3);var T=function(){var e=Object(r.f)(),t=Object(n.useState)({email:"",firstName:"",lastName:"",instagram:"",twitter:"",tiktok:"",group:"",requests:[]}),a=Object(h.a)(t,2),s=a[0],c=a[1],o=Object(n.useState)(""),O=Object(h.a)(o,2),k=O[0],N=O[1],y=Object(n.useState)({status:!1,message:""}),I=Object(h.a)(y,2),T=I[0],q=I[1],R=function(e){return function(t){c(Object(j.a)(Object(j.a)({},s),{},Object(u.a)({},e,t.target.value)))}},E=function(t){v.signInWithPopup(t).then(function(){var t=Object(d.a)(l.a.mark((function t(a){var n,s,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.user.displayName.split(" ").slice(0,-1).join(" "),s=a.user.displayName.split(" ").slice(-1).join(" "),e.push("/home"),c=g.collection("users").doc(a.user.uid),t.next=6,c.get().then((function(e){if(!e.exists){var t={email:a.user.email,firstName:n,lastName:s,instagram:"",twitter:"",tiktok:"",group:"",requests:[]};return g.collection("users").doc(a.user.uid).set(t)}}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){var t=e.code,a=e.message;q({status:!0,message:"".concat(t," - ").concat(a)}),console.log("".concat(t," - ").concat(a))}))};return Object(P.jsx)("div",{className:"signup-main",children:Object(P.jsxs)("div",{className:"signup-conainer",children:[Object(P.jsx)("h1",{className:"title-text",children:"UNC Roommates"}),Object(P.jsxs)("form",{children:[Object(P.jsxs)("div",{className:"form-size",children:[Object(P.jsxs)("div",{className:"nameInput input",children:[Object(P.jsx)("div",{className:"firstNameInput inlineInput",children:Object(P.jsx)(m.a,{label:"First name",autoFocus:!0,fullWidth:!0,required:!0,variant:"filled",onChange:R("firstName")})}),Object(P.jsx)("div",{className:"lastNameInput inlineInput",children:Object(P.jsx)(m.a,{label:"Last name",autoFocus:!0,fullWidth:!0,placeholder:"Last name",required:!0,variant:"filled",onChange:R("lastName")})})]}),Object(P.jsx)("div",{className:"emailInput input",children:Object(P.jsx)(m.a,{label:"Email",autoFocus:!0,fullWidth:!0,placeholder:"Email",required:!0,variant:"filled",onChange:R("email")})}),Object(P.jsx)("div",{className:"pwdInput input",children:Object(P.jsx)(m.a,{type:"password",label:"Password",fullWidth:!0,placeholder:"Password",required:!0,variant:"filled",onChange:function(e){N(e.target.value)}})}),Object(P.jsxs)("div",{className:"socialsInput input",children:[Object(P.jsx)("div",{className:"instagramInput inlineInput",children:Object(P.jsx)(m.a,{label:"Instagram handle",fullWidth:!0,placeholder:"Instagram handle",required:!1,variant:"filled",onChange:R("instagram")})}),Object(P.jsx)("div",{className:"twitterInput inlineInput",children:Object(P.jsx)(m.a,{label:"Twitter handle",fullWidth:!0,placeholder:"Twitter handle",required:!1,variant:"filled",onChange:R("twitter")})}),Object(P.jsx)("div",{className:"tiktokInput inlineInput",children:Object(P.jsx)(m.a,{label:"TikTok handle",fullWidth:!0,placeholder:"TikTok handle",required:!1,variant:"filled",onChange:R("tiktok")})})]})]}),Object(P.jsx)("br",{}),Object(P.jsx)("div",{children:Object(P.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){v.createUserWithEmailAndPassword(s.email,k).then((function(t){return e.push("/home"),g.collection("users").doc(t.user.uid).set(s)})).catch((function(e){var t=e.code,a=e.message;q({status:!0,message:"".concat(t," - ").concat(a)}),console.log("".concat(t," - ").concat(a))}))},children:"Signup"})}),Object(P.jsxs)("div",{className:"oauth-login",children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"oauth-inline",children:Object(P.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){var e=new x.GoogleAuthProvider;E(e)},children:Object(P.jsx)(A.a,{})})}),Object(P.jsx)("div",{className:"oauth-inline second-button",children:Object(P.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){var e=new x.FacebookAuthProvider;E(e)},children:Object(P.jsx)(S.a,{})})})]}),Object(P.jsxs)("div",{className:"oauth-second",children:[Object(P.jsx)("div",{className:"oauth-inline",children:Object(P.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){var e=new x.TwitterAuthProvider;E(e)},children:Object(P.jsx)(w.a,{})})}),Object(P.jsx)("div",{className:"oauth-inline second-button",children:Object(P.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){var e=new x.GithubAuthProvider;E(e)},children:Object(P.jsx)(C.a,{})})})]})]}),Object(P.jsx)(i.b,{to:"/signin",children:Object(P.jsx)(p.a,{children:"Already have an account? Sign in here."})})]}),Object(P.jsx)(b.a,{open:T.status,autoHideDuration:7500,onClose:function(){return q({status:!1})},children:Object(P.jsx)(f.a,{severity:"info",children:T.message})})]})})};a(129);var q=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),o=Object(h.a)(c,2),l=o[0],d=o[1],u=Object(n.useState)({status:!1,message:""}),j=Object(h.a)(u,2),O=j[0],x=j[1],g=Object(r.f)();return Object(P.jsx)("div",{className:"signup-main",children:Object(P.jsxs)("div",{className:"signin-conainer",children:[Object(P.jsx)("h1",{className:"title-text",children:"UNC Roommates"}),Object(P.jsxs)("form",{children:[Object(P.jsxs)("div",{className:"form-size",children:[Object(P.jsx)("div",{className:"emailInput",children:Object(P.jsx)(m.a,{id:"email",autoFocus:!0,fullWidth:!0,placeholder:"onyen@live.unc.edu",required:!0,variant:"filled",onChange:function(e){s(e.target.value)}})}),Object(P.jsx)("div",{className:"pwdInput",children:Object(P.jsx)(m.a,{type:"password",fullWidth:!0,placeholder:"password",required:!0,variant:"filled",onChange:function(e){d(e.target.value)}})})]}),Object(P.jsx)("br",{}),Object(P.jsx)("div",{className:"signin-button",children:Object(P.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){v.signInWithEmailAndPassword(a,l).then((function(e){console.log("Sign in successful"),g.push("/home")})).catch((function(e){var t=e.code,a=e.message;x({status:!0,message:"".concat(t," - ").concat(a)}),console.log("".concat(t," - ").concat(a))}))},children:"Sign in"})}),Object(P.jsx)("div",{className:"reset-password",children:Object(P.jsx)(p.a,{variant:"contained",color:"secondary",onClick:function(){if(""!==a){var e=a;v.sendPasswordResetEmail(e).then((function(){x({status:!0,message:"Check your email to change your password."})})).catch((function(e){x({status:!0,message:"".concat(e.code," - ").concat(e.message)})}))}else x({status:!0,message:"Please enter your email in the field and retry."})},children:"Reset Password"})}),Object(P.jsx)("div",{children:Object(P.jsx)(i.b,{to:"/signup",children:Object(P.jsx)(p.a,{children:"Need an account? Signup here."})})})]}),Object(P.jsx)(b.a,{open:O.status,autoHideDuration:7500,onClose:function(){return x({status:!1})},children:Object(P.jsx)(f.a,{severity:"info",children:O.message})})]})})},R=a(205),E=a(206),W=a(207),H=a(217),U=a(203),L=a(98),M=a.n(L),B=(a(130),a(204));var D=function(e){var t=Object(B.a)((function(e){return{blue:{color:e.palette.getContrastText("#81d4fa"),backgroundColor:"#81d4fa"}}})),a=function(){var t=Object(d.a)(l.a.mark((function t(){var a,n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((a=v.currentUser).uid!==e.postObj.uid){t.next=4;break}return console.log("Cannot send a roommate request to yourself!"),t.abrupt("return");case 4:return n=[],s=g.collection("users").doc(e.postObj.uid),t.next=8,s.get().then((function(e){e.exists&&(n=e.data().requests)}));case 8:n.unshift(a.uid),g.collection("users").doc(e.postObj.uid).update({requests:n});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=t();return Object(P.jsx)("div",{className:"post-main",children:Object(P.jsx)(R.a,{children:Object(P.jsx)(E.a,{children:Object(P.jsxs)(W.a,{children:[Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{className:"top-level",children:[Object(P.jsx)("div",{className:"avatar",children:Object(P.jsxs)(H.a,{className:n.blue,children:[e.postObj.author.substring(0,1),e.postObj.author.substring(1,2)]})}),Object(P.jsx)("h1",{className:"author",children:e.postObj.author}),Object(P.jsx)("div",{className:"roommate-request",children:Object(P.jsx)(U.a,{children:Object(P.jsx)(M.a,{onClick:a,color:"primary",size:"medium"})})})]}),Object(P.jsx)("h1",{children:e.postObj.title}),Object(P.jsx)("h3",{children:e.postObj.budget})]}),Object(P.jsx)("p",{className:"body",children:e.postObj.body})]})})})})};a(131);var z=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],s=t[1],c=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s([]),t=[],e.next=4,g.collection("posts").get().then((function(e){e.forEach((function(e){t.unshift(e.data())}))}));case 4:if(a=[],t.length<30)for(n=0;n<t.length;n++)a.unshift(Object(P.jsx)(D,{postObj:t[n]},n));else for(c=0;c<30;c++)a.unshift(Object(P.jsx)(D,{postObj:t[c]},c));s(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),Object(P.jsx)("div",{className:"feed-main",children:a})},F=a(213),_=a(212),G=a(101),J=a.n(G),V=(a(132),a(218)),$=a(104),Y=a(208),K=a(209),Q=a(210),Z=a(99),X=a.n(Z);var ee=function(e){var t=Object(n.useState)(),a=Object(h.a)(t,2),s=a[0],c=a[1];Object(n.useEffect)((function(){g.collection("users").doc(e.rid).get().then((function(e){e.exists&&c(e.data().firstName+" "+e.data().lastName)}))}),[]);var i=function(){var t=Object(d.a)(l.a.mark((function t(){var a,n,s,c,i,r,o,d,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=!1,n=!1,s="",c="",i=g.collection("users").doc(e.cid),t.next=7,i.get().then((function(e){e.exists&&(a=""!==e.data().group,s=e.data().group)}));case 7:return i=g.collection("users").doc(e.rid),t.next=10,i.get().then((function(e){e.exists&&(n=""!==e.data().group,c=e.data().group)}));case 10:if(r=[],o=[],c!==s){t.next=16;break}console.log("Already roommates with this user!"),t.next=46;break;case 16:if(!a||!n){t.next=20;break}console.log("Cannot join group, both of you are already in roommate groups."),t.next=46;break;case 20:if(!a||n){t.next=29;break}return g.collection("users").doc(e.rid).update({group:s}),i=g.collection("groups").doc(s),t.next=25,i.get().then((function(e){e.exists&&(r=e.data().users)}));case 25:r.push(e.rid),g.collection("groups").doc(s).update({users:r}),t.next=46;break;case 29:if(a||!n){t.next=38;break}return g.collection("users").doc(e.cid).update({group:c}),i=g.collection("groups").doc(c),t.next=34,i.get().then((function(e){e.exists&&(r=e.data().users)}));case 34:r.push(e.cid),g.collection("groups").doc(c).update({users:r}),t.next=46;break;case 38:if(a||n){t.next=46;break}return d="",t.next=42,g.collection("groups").add({users:[e.cid,e.rid]}).then((function(e){d=e.id}));case 42:return t.next=44,g.collection("users").doc(e.cid).update({group:d});case 44:return t.next=46,g.collection("users").doc(e.rid).update({group:d});case 46:return i=g.collection("users").doc(e.cid),t.next=49,i.get().then((function(e){e.exists&&(o=e.data().requests)}));case 49:for(u=0;u<o.length;u++)o[u]===e.rid&&o.splice(u,1);g.collection("users").doc(e.cid).update({requests:o}),e.handleClose();case 52:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(P.jsxs)("div",{className:"request-main",children:[Object(P.jsxs)("p",{children:[s," wants to be roommates!"]}),Object(P.jsx)(p.a,{color:"primary",onClick:i,children:"Accept"}),Object(P.jsx)(p.a,{color:"secondary",onClick:function(){},children:"Reject"})]})};a(133);var te=function(e){var t=Object(n.useState)(null),a=Object(h.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)([]),o=Object(h.a)(r,2),u=o[0],j=o[1],m=function(){c(null)};return Object(P.jsx)("div",{children:Object(P.jsx)(Y.a,{position:"static",children:Object(P.jsxs)(K.a,{children:[Object(P.jsxs)("div",{children:[Object(P.jsx)(i.b,{to:"/home",children:Object(P.jsx)(p.a,{children:Object(P.jsx)("span",{className:"nav-button",children:"Home"})})}),Object(P.jsx)(i.b,{to:"/donate",children:Object(P.jsx)(p.a,{children:Object(P.jsx)("span",{className:"nav-button",children:"Donate"})})})]}),Object(P.jsx)(U.a,{onClick:function(e){c(e.currentTarget)},children:Object(P.jsx)(Q.a,{badgeContent:e.count,color:"secondary",children:Object(P.jsxs)("span",{className:"nav-button",children:[Object(P.jsx)(X.a,{})," "]})})}),function(){var t=[];if(!(e.count<=0))return v.onAuthStateChanged(function(){var e=Object(d.a)(l.a.mark((function e(a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return n=g.collection("users").doc(a.uid),e.next=4,n.get().then((function(e){if(e.exists){for(var n=0;n<e.data().requests.length;n++)t.unshift(Object(P.jsx)(V.a,{children:Object(P.jsx)(ee,{rid:e.data().requests[n],cid:a.uid,handleClose:m})},n));j(t)}}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(P.jsx)($.a,{anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:m,children:u})}(),Object(P.jsx)(i.b,{to:"/signup",children:Object(P.jsx)(p.a,{onClick:function(){v.signOut().then((function(){console.log("Signout successful!")})).catch((function(e){console.log("".concat(e.code," - ").concat(e.message))}))},children:Object(P.jsx)("span",{className:"nav-button",children:"Sign Out"})})})]})})})},ae=(a(134),a(100)),ne=(a(135),a.p+"static/media/flat.49ba957b.svg");var se=function(e){var t=[{lat:35.9187282664347,lng:-79.05353261319675},{lat:35.91030141879442,lng:-79.05729551122378},{lat:35.94718524329469,lng:-79.06117744008112},{lat:35.92010498435601,lng:-79.0539347070598},{lat:35.911840512603995,lng:-79.06111620605373},{lat:35.91864466139889,lng:-79.05528848272199},{lat:35.91299970506669,lng:-79.05971757602687},{lat:35.92198215488461,lng:-79.05425064988167},{lat:35.91222581276119,lng:-79.05737823600079}],a=e.coordinates,s=Object(ae.a)("AIzaSyBdJmgZiBlrkmjJl_1ZQ9xclX76j-IsGjE",{zoom:15,center:{lat:35.9132,lng:-79.0558}}),c=s.ref,i=s.map,r=s.google;return Object(n.useEffect)((function(){if(console.log(e.coordinates),i&&r)for(var a=0;a<t.length;a++)new r.maps.Marker({map:i,position:t[a],icon:ne})}),[i,r,a,e.coordinates]),Object(P.jsx)("div",{className:"map-size",ref:c})},ce=a(70),ie=a.n(ce);var re=function(e){var t=Object(n.useState)([]),a=Object(h.a)(t,2),s=a[0],c=a[1],i=function(){var t=Object(d.a)(l.a.mark((function t(){var a,n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=[],n=0;case 2:if(!(n<e.housing.length)){t.next=9;break}return s={method:"GET",url:"https://google-maps-geocoding.p.rapidapi.com/geocode/json",params:{address:"".concat(e.housing[n].address),language:"en"},headers:{"x-rapidapi-key":"7873e050d5msh73bea27da2029f7p1bdff1jsn8408468afdbd","x-rapidapi-host":"google-maps-geocoding.p.rapidapi.com"}},t.next=6,ie.a.request(s).then((function(e){a.push({lat:e.data.results[0].geometry.location.lat,lng:e.data.results[0].geometry.location.lng})}));case 6:n++,t.next=2;break;case 9:c(a);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){i(e.housing)})),Object(P.jsx)("div",{className:"dashboard-main",children:Object(P.jsx)("div",{className:"map-main",children:Object(P.jsx)(se,{coordinates:s})})})},oe=a.p+"static/media/granville.401870d4.jpeg",le=a.p+"static/media/cridge.895d7f2a.jpeg",de=a.p+"static/media/millcreek.e325632b.jpeg",ue=a.p+"static/media/warehouse.a99534fe.jpeg",je=a.p+"static/media/csquare.57377470.jpeg",he=a.p+"static/media/univ.d167e847.jpeg",me=a.p+"static/media/shortbread.3f73a0ba.jpeg",pe=a.p+"static/media/union.524078c7.jpeg",be=a.p+"static/media/lark.85749eee.jpeg",fe=a.p+"static/media/unc.d47b3ec8.jpeg";var Oe=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),i=Object(h.a)(c,2),r=i[0],o=i[1],b=Object(n.useState)(!0),f=Object(h.a)(b,2),x=f[0],k=f[1],w=Object(n.useState)({}),N=Object(h.a)(w,2),C=N[0],y=N[1],S=Object(n.useState)(0),I=Object(h.a)(S,2),A=I[0],T=I[1],q=Object(n.useState)(null),R=Object(h.a)(q,2),E=R[0],W=R[1],H=Object(n.useState)([{name:"Lark Chapel Hill",address:"602 M.L.K. Jr Blvd, Chapel Hill, NC 27514",price:""},{name:"Union Chapel Hill",address:"425 Hillsborough St, Chapel Hill, NC 27514",price:""},{name:"Shortbread Lofts",address:"333 W Rosemary St, Chapel Hill, NC 27516",price:""},{name:"University Apartments",address:"600 M.L.K. Jr Blvd, Chapel Hill, NC 27514",price:""},{name:"Carolina Square",address:"133 W Franklin St #100, Chapel Hill, NC 27516",price:""},{name:"The Warehouse Apartments",address:"316 W Rosemary St, Chapel Hill, NC 27516",price:""},{name:"Mill Creek Condominiums",address:"710 M.L.K. Jr Blvd, Chapel Hill, NC 27514",price:""},{name:"Chapel Ridge Apartments",address:"101 Legacy Terrace, Chapel Hill, NC 27516",price:""},{name:"Granville Towers",address:"Granville Towers South Building, 2100, Chapel Hill, NC 27514",price:""}]),L=Object(h.a)(H,2),M=L[0],B=(L[1],Object(n.useState)({name:"Select a housing option for more details",walk:"",avgPrice:"",photo:fe})),D=Object(h.a)(B,2),G=D[0],V=D[1],$=function(){o(!1)},Y=function(){k(!1)},K=function(e){return function(t){y(Object(j.a)(Object(j.a)({},C),{},Object(u.a)({},e,t.target.value)))}},Q=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.currentUser,a=g.collection("users").doc(t.uid),n=O.a.firestore.Timestamp.fromDate(new Date),(s=C).numberOfLikes=0,s.numberOfComments=0,s.datePosted=n,s.uid=t.uid,e.next=10,a.get().then((function(e){e.exists&&(s.author="".concat(e.data().firstName," ").concat(e.data().lastName))}));case 10:return a=g.collection("count").doc("posts"),e.next=13,a.get().then((function(e){e.exists&&(s.id=e.data().postCount)}));case 13:y(Object.assign({},s)),g.collection("posts").doc("".concat(t.uid,"-").concat(s.id)).set(C),a.update({postCount:s.id+1}),$();case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){ie.a.request({method:"GET",url:"https://quotes15.p.rapidapi.com/quotes/random/",headers:{"x-rapidapi-key":"7873e050d5msh73bea27da2029f7p1bdff1jsn8408468afdbd","x-rapidapi-host":"quotes15.p.rapidapi.com"}}).then((function(e){s(e.data.content)})).catch((function(e){console.log(e)}))}),[]);var Z=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.onAuthStateChanged((function(e){e&&g.collection("users").doc(e.uid).get().then((function(e){e.exists&&T(e.data().requests.length)}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){Z()}),[]),Object(P.jsxs)("div",{className:"main",children:[Object(P.jsx)("div",{children:Object(P.jsx)(te,{count:A})}),Object(P.jsxs)("div",{className:"content",children:[Object(P.jsxs)("div",{className:"feed",children:[Object(P.jsx)(U.a,{children:Object(P.jsx)(J.a,{onClick:function(){o(!0)},size:"large",color:"primary"})}),Object(P.jsx)(z,{})]}),Object(P.jsxs)("div",{className:"roommate",children:[Object(P.jsx)("h1",{children:"Housing Dashboard"}),Object(P.jsx)("div",{children:Object(P.jsx)(re,{housing:M})}),Object(P.jsx)("div",{className:"autocomplete",children:Object(P.jsx)(_.a,{value:E,onChange:function(e,t){W("string"===typeof t?{name:t}:t)},onInputChange:function(e,t){var a;"Lark Chapel Hill"===(a=t)?V({name:"Lark Chapel Hill",walk:"20 minute walk to campus",avgPrice:"$900",photo:be}):"Union Chapel Hill"===a?V({name:"Union Chapel Hill",walk:"23 minute walk to campus",avgPrice:"$1000",photo:pe}):"Shortbread Lofts"===a?V({name:"Shortbread Lofts",walk:"18 minute walk to campus",avgPrice:"$1000",photo:me}):"University Apartments"===a?V({name:"University Apartments",walk:"14 minute walk to campus",avgPrice:"$850",photo:he}):"Carolina Square"===a?V({name:"Carolina Square",walk:"13 minute walk to campus",avgPrice:"$1500",photo:je}):"The Warehouse Apartments"===a?V({name:"The Warehouse Apartments",walk:"17 minute walk to campus",avgPrice:"$1100",photo:ue}):"Mill Creek Condominiums"===a?V({name:"Mill Creek Condominiums",walk:"27 minute walk to campus",avgPrice:"$700",photo:de}):"Chapel Ridge Apartments"===a?V({name:"Chapel Ridge Apartments",walk:"63 minute walk to campus",avgPrice:"$600",photo:le}):"Granville Towers"===a&&V({name:"Granville Towers",walk:"12 minute walk to campus",avgPrice:"$1200",photo:oe})},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,options:M,getOptionLabel:function(e){return"string"===typeof e?e:e.name},renderOption:function(e){return e.name},style:{width:750},freeSolo:!0,renderInput:function(e){return Object(P.jsx)(m.a,Object(j.a)(Object(j.a)({},e),{},{label:"Search housing options",variant:"outlined"}))}})}),Object(P.jsxs)("div",{className:"info-card",children:[Object(P.jsx)("h1",{children:G.name}),Object(P.jsx)("h3",{children:G.walk}),Object(P.jsxs)("h3",{children:["Average Price ",G.avgPrice]}),Object(P.jsx)("img",{alt:"apartment",src:G.photo,width:"700px",height:"500px"})]})]})]}),Object(P.jsxs)("form",{children:[Object(P.jsx)(F.a,{open:r,onClose:$,children:Object(P.jsxs)("div",{className:"modal-style",children:[Object(P.jsx)("h1",{className:"modal-label",children:"Create a post!"}),Object(P.jsx)("div",{className:"modal-title",children:Object(P.jsx)(m.a,{label:"Post title",fullWidth:!0,placeholder:"Post title",required:!0,variant:"filled",onChange:K("title")})}),Object(P.jsx)("div",{className:"modal-body",children:Object(P.jsx)(m.a,{label:"Post body",placeholder:"Post body",required:!0,variant:"filled",fullWidth:!0,rows:7,multiline:!0,onChange:K("body")})}),Object(P.jsxs)("div",{className:"modal-footer",children:[Object(P.jsx)("div",{className:"cancel-button",children:Object(P.jsx)(p.a,{variant:"contained",onClick:$,children:"Cancel"})}),Object(P.jsx)("div",{className:"submit-button",children:Object(P.jsx)(p.a,{variant:"contained",color:"primary",onClick:Q,children:"Post"})})]})]})}),Object(P.jsx)(F.a,{open:x,onClose:Y,children:Object(P.jsxs)("div",{className:"modal-style",children:[Object(P.jsx)("h1",{className:"modal-label",children:"Welcome to UNC Roommates!"}),Object(P.jsxs)("div",{className:"modal-title",children:[Object(P.jsx)("p",{children:"UNC Roommates is a community that will help you find your next roommates! I made this website since some friends and I had a tough time finding a fourth roommate this past year. I realized that there's really no obvious place to look for roommates...what are transfer students, freshman, and those looking for a change to do?"}),Object(P.jsx)("p",{children:"This website is designed with a feed to your left and a housing dashboard to your right, to look for housing within your budget. We currently support 9 apartments but will be expanding soon!"}),Object(P.jsxs)("p",{children:["Hope this quote makes your day: ",a]})]}),Object(P.jsx)("div",{className:"modal-footer",children:Object(P.jsx)("div",{className:"cancel-button",children:Object(P.jsx)(p.a,{color:"primary",variant:"contained",onClick:Y,children:"Awesome"})})})]})})]})]})},xe=(a(153),a(103)),ge=a.n(xe);var ve=function(){var e=Object(n.useState)(0),t=Object(h.a)(e,2),a=t[0],s=t[1],c=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.onAuthStateChanged((function(e){e&&g.collection("users").doc(e.uid).get().then((function(e){e.exists&&s(e.data().requests.length)}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),Object(P.jsxs)("div",{className:"main",children:[Object(P.jsx)("div",{children:Object(P.jsx)(te,{count:a})}),Object(P.jsx)("div",{className:"content",children:Object(P.jsxs)("div",{className:"content-main",children:[Object(P.jsx)("div",{className:"picture"}),Object(P.jsx)("div",{className:"text",children:Object(P.jsxs)("div",{className:"text-content",children:[Object(P.jsx)("h1",{children:"Hello, I'm Sameer."}),Object(P.jsx)("p",{className:"para",children:"I'm the creator of UNC Roommates! This is a project I created for COMP 426 Modern Web Programming at UNC. The inspiration behind this projet is...well, I couldn't find a roommate! My friends and I were looking for a place to live post COVID and we needed to find a 4th roommate. We asked all of our friends to send us any referals of people and to send friends our way if they were looking for roommates. We posted on Facebook 3-4 times in different UNC goups trying to get someone to reply. After months of posting we finally found a roommate but it had me thinking...why isn't there a place for people to just find roommates or meet new people? Facebook groups isn't the first thing people think of when they ask 'Where can I find someone to room with...' So, I created UNC roommates!"}),Object(P.jsxs)("p",{className:"para",children:["I hope you've found this website useful for you :) and if so feel free to ",Object(P.jsx)("strong",{children:"donate"})," to below!"]}),Object(P.jsx)("p",{className:"para",children:"You can contact me at sameer_rao@kenan-flalger.unc.edu or on my socials below"}),Object(P.jsxs)("ul",{children:[Object(P.jsx)("li",{children:Object(P.jsx)("a",{href:"https://www.instagram.com/sameer__rao",rel:"noopener noreferrer",target:"_blank",children:"Instagram"})}),Object(P.jsx)("li",{children:Object(P.jsx)("a",{href:"https://www.twitter.com/SameerRaoVC",rel:"noopener noreferrer",target:"_blank",children:"Twitter"})}),Object(P.jsx)("li",{children:Object(P.jsx)("a",{href:"https://www.linkedin.com/in/sameer-r/",rel:"noopener noreferrer",target:"_blank",children:"LinkedIn"})})]})]})}),Object(P.jsx)("div",{children:Object(P.jsx)(ge.a,{buttonColor:"default",buttonType:"donate",environment:"TEST",paymentRequest:{apiVersion:2,apiVersionMinor:0,allowedPaymentMethods:[{type:"CARD",parameters:{allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],allowedCardNetworks:["AMEX","DISCOVER","INTERAC","JCB","MASTERCARD","VISA"]},tokenizationSpecification:{type:"PAYMENT_GATEWAY",parameters:{gateway:"stripe","stripe:version":"2018-10-31","stripe:publishableKey":"pk_live_51IoiRPEkBo27Ca6pbkXWA8vh6vtkQwPu9RFgvAQLrm9IiTgnaI94ePz0SFoQ0OaEOsHjWIzdxsLTJfi2ftBQJAwV00eo4lhU17"}}}],merchantInfo:{merchantId:"BCR2DN6TV7U2PTYD",merchantName:"Sameer Rao"},transactionInfo:{totalPriceStatus:"FINAL",totalPriceLabel:"TOTAL",totalPrice:"5.00",currencyCode:"USD",countryCode:"US"},shippingAddressRequired:!1,callbackIntents:["PAYMENT_AUTHORIZATION"]},onLoadPaymentData:function(e){console.log("Success",e)},onPaymentAuthorized:function(e){return console.log("Payment Authorized Success",e),{transactionState:"SUCCESS"}},existingPaymentMethodRequired:"false"})})]})})]})};var ke=function(){return Object(P.jsxs)(i.a,{children:[Object(P.jsx)(r.b,{exact:!0,path:"/",children:Object(P.jsx)(r.a,{to:"/signup"})}),Object(P.jsx)(r.b,{path:"/signup",component:T}),Object(P.jsx)(r.b,{path:"/signin",component:q}),Object(P.jsx)(r.b,{path:"/home",component:Oe}),Object(P.jsx)(r.b,{path:"/donate",component:ve})]})};c.a.render(Object(P.jsx)(ke,{}),document.getElementById("root"))}},[[164,1,2]]]);
//# sourceMappingURL=main.6d42a69a.chunk.js.map