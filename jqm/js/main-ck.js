function initialize(){var e={zoom:13,center:new google.maps.LatLng(51.05,3.7167),mapTypeId:google.maps.MapTypeId.ROADMAP};map=new google.maps.Map(document.getElementById("map_canvas"),e)}function MVCfun(){var e=new DistanceWidget(map);google.maps.event.addListener(e,"distance_changed",function(){displayInfo(e)});google.maps.event.addListener(e,"position_changed",function(){displayInfo(e)})}function displayInfo(e){var t=document.getElementById("info");t.innerHTML="Position: "+e.get("position")+", distance: "+e.get("distance")}function geolocation(){Modernizr.geolocation?navigator.geolocation.getCurrentPosition(geoSuccess,geoError,{timeout:1e4,enableHighAccuracy:!0}):alert("You have an ancient browser. Please upgrade to Chrome.")}function geoSuccess(e){var t=e.coords;myGeoMarker=new google.maps.Marker({position:new google.maps.LatLng(t.latitude,t.longitude),map:map,title:"My location"});centermap()}function centermap(){var e=myGeoMarker.getPosition();map.setCenter(e)}function geoError(e){console.log(e)}function getParking(){$.getJSON(parkingurl,function(e){infowindow=new google.maps.InfoWindow({content:""});var t="img/parking.png";$.each(e.Parkings.parkings,function(e,n){n.availableCapacity>=500?t="img/4+.png":n.availableCapacity>=200?t="img/2+.png":t="img/2.png";marker=new google.maps.Marker({position:new google.maps.LatLng(n.latitude,n.longitude),title:n.description,map:map,icon:t});mParking.push(marker);google.maps.event.addListener(marker,"click",function(){var e=n.description,t=n.address,r=n.contactInfo;$("#parking-content h1").html(e);$("#parking-content p").html(t);$("#parking-content a").html(r)});bindInfoWindow(marker,map,infowindow,"<h1>"+this.description+"</h1>"+"<p>Places left: "+this.availableCapacity+'</p><a href="#parking" data-transition="slide">go</a>')})})}function bindInfoWindow(e,t,n,r){google.maps.event.addListener(e,"click",function(){n.setContent(r);n.open(t,e)})}function getSport(){$.getJSON(sportnurl,function(e){var t="img/weights.png";$.each(e.sportgent,function(e,n){marker=new google.maps.Marker({position:new google.maps.LatLng(n.lat,n.long),map:map,title:"Sport centra",icon:t});mSport.push(marker)})})}function getCellen(){$.getJSON(telefooncellenurl,function(e){var t="img/telephone.png";$.each(e.telefooncellen,function(e,n){marker=new google.maps.Marker({position:new google.maps.LatLng(n.lat,n.long),map:map,title:"Telefoon cellen",icon:t});mCellen.push(marker)});mcCellen=new MarkerClusterer(map,mCellen)})}function getApotheken(){$.getJSON(apothekenurl,function(e){var t="img/drugstore.png";$.each(e.apotheken,function(e,n){marker=new google.maps.Marker({position:new google.maps.LatLng(n.lat,n.long),map:map,title:"Apotheken",icon:t});mApo.push(marker)});mcApo=new MarkerClusterer(map,mApo)})}function getSani(){$.getJSON(sanitairurl,function(e){var t="img/toilets.png";$.each(e.publieksanitair,function(e,n){var r=new google.maps.LatLng(n.lat,n.long);marker=new google.maps.Marker({position:r,map:map,title:"Publiek sanitair",icon:t});mSani.push(marker)});mcSani=new MarkerClusterer(map,mSani)})}function getBios(){$.getJSON(bioscopenurl,function(e){var t="img/cinema.png";$.each(e.bioscopen,function(e,n){marker=new google.maps.Marker({position:new google.maps.LatLng(n.lat,n.long),map:map,title:"Bioscopen",icon:t});mBios.push(marker)})})}function getBib(){$.getJSON(bibliothekenurl,function(e){var t="img/book.png";$.each(e.bibliotheken,function(e,n){marker=new google.maps.Marker({position:new google.maps.LatLng(n.lat,n.long),map:map,title:"Bibliotheken",icon:t});mBib.push(marker)})})}function getArts(){$.getJSON(huisartsenwachtposturl,function(e){var t="img/medicine.png";$.each(e.huisartsenwachtposten,function(e,n){marker=new google.maps.Marker({position:new google.maps.LatLng(n.lat,n.long),map:map,title:"Huisartsenwachtposten",icon:t});mArts.push(marker)})})}function getSchool(){$.getJSON(schoolennurl,function(e){var t="img/cramschool.png";$.each(e.secundairescholen,function(e,n){marker=new google.maps.Marker({position:new google.maps.LatLng(n.lat,n.long),map:map,title:"Schoolen",icon:t});mSchool.push(marker)});mcSchool=new MarkerClusterer(map,mSchool)})}function getZiekenhuis(){$.getJSON(ziekenhuizenurl,function(e){var t="img/firstaid.png";$.each(e.ziekenhuizen,function(e,n){marker=new google.maps.Marker({position:new google.maps.LatLng(n.lat,n.long),map:map,title:"Ziekenhuizen",icon:t});mZiek.push(marker)})})}function removeMarkers(){if(mParking){for(i in mParking)mParking[i].setMap(null);mParking.length=0}if(mApo){for(i in mApo)mApo[i].setMap(null);mApo.length=0}if(mSchool){for(i in mSchool)mSchool[i].setMap(null);mSchool.length=0}if(mSani){for(i in mSani)mSani[i].setMap(null);mSani.length=0}if(mSport){for(i in mSport)mSport[i].setMap(null);mSport.length=0}if(mZiek){for(i in mZiek)mZiek[i].setMap(null);mZiek.length=0}if(mArts){for(i in mArts)mArts[i].setMap(null);mArts.length=0}if(mBib){for(i in mBib)mBib[i].setMap(null);mBib.length=0}if(mBios){for(i in mBios)mBios[i].setMap(null);mBios.length=0}if(mCellen){for(i in mCellen)mCellen[i].setMap(null);mCellen.length=0}mcSchool&&mcSchool.clearMarkers();mcCellen&&mcCellen.clearMarkers();mcApo&&mcApo.clearMarkers();mcSani&&mcSani.clearMarkers()}function checkState(){if(localStorage.apo==="checked"){$("#apo").attr("checked","checked");$(".apo").addClass("ui-checkbox-on");$(".apo span").addClass("ui-icon-checkbox-on");getApotheken()}else removeMarkers();if(localStorage.arts==="checked"){$("#arts").attr("checked","checked");$(".arts").addClass("ui-checkbox-on");$(".arts span").addClass("ui-icon-checkbox-on");getArts()}else removeMarkers();if(localStorage.bib==="checked"){$("#bib").attr("checked","checked");$(".bib").addClass("ui-checkbox-on");$(".bib span").addClass("ui-icon-checkbox-on");getBib()}else removeMarkers();if(localStorage.bios==="checked"){$("#bios").attr("checked","checked");$(".bios").addClass("ui-checkbox-on");$(".bios span").addClass("ui-icon-checkbox-on");getBios()}else removeMarkers();if(localStorage.cellen==="checked"){$("#cellen").attr("checked","checked");$(".cellen").addClass("ui-checkbox-on");$(".cellen span").addClass("ui-icon-checkbox-on");getCellen()}else removeMarkers();if(localStorage.school==="checked"){$("#school").attr("checked","checked");$(".school").addClass("ui-checkbox-on");$(".school span").addClass("ui-icon-checkbox-on");getSchool()}else removeMarkers();if(localStorage.parking==="checked"){$("#parking").attr("checked","checked");$(".parking").addClass("ui-checkbox-on");$(".parking span").addClass("ui-icon-checkbox-on");getParking()}else removeMarkers();if(localStorage.sport==="checked"){$("#sport").attr("checked","checked");$(".sport").addClass("ui-checkbox-on");$(".sport span").addClass("ui-icon-checkbox-on");getSport()}else removeMarkers();if(localStorage.sani==="checked"){$("#sani").attr("checked","checked");$(".sani").addClass("ui-checkbox-on");$(".sani span").addClass("ui-icon-checkbox-on");getSani()}else removeMarkers();if(localStorage.ziek==="checked"){$("#ziek").attr("checked","checked");$(".ziek").addClass("ui-checkbox-on");$(".ziek span").addClass("ui-icon-checkbox-on");getZiekenhuis()}else removeMarkers()}function DistanceWidget(e){this.set("map",e);this.set("position",e.getCenter());var t=new google.maps.Marker({draggable:!0,title:"Move me!"});t.bindTo("map",this);t.bindTo("position",this);var n=new RadiusWidget;n.bindTo("map",this);n.bindTo("center",this,"position");this.bindTo("distance",n);this.bindTo("bounds",n)}function RadiusWidget(){var e=new google.maps.Circle({strokeweight:1});this.set("distance",2);this.bindTo("bounds",e);e.bindTo("center",this);e.bindTo("map",this);e.bindTo("radius",this);this.addSizer_()}var map,infowindow,mcCellen,mcApo,mcSani,mcSchool,mParking=[],mSport=[],mZiek=[],mApo=[],mBib=[],mBios=[],mArts=[],mSchool=[],mSani=[],mCellen=[],parkingurl="http://datatank.gent.be/Mobiliteitsbedrijf/Parkings.json",sportnurl="http://data.appsforghent.be/poi/sportgent.json",ziekenhuizenurl="http://data.appsforghent.be/poi/ziekenhuizen.json",apothekenurl="http://data.appsforghent.be/poi/apotheken.json",bibliothekenurl="http://data.appsforghent.be/poi/bibliotheken.json",bioscopenurl="http://data.appsforghent.be/poi/bioscopen.json",huisartsenwachtposturl="http://data.appsforghent.be/poi/huisartsenwachtposten.json",schoolennurl="http://data.appsforghent.be/poi/secundairescholen.json",sanitairurl="http://data.appsforghent.be/poi/publieksanitair.json",telefooncellenurl="http://data.appsforghent.be/poi/telefooncellen.json";DistanceWidget.prototype=new google.maps.MVCObject;RadiusWidget.prototype=new google.maps.MVCObject;RadiusWidget.prototype.distance_changed=function(){this.set("radius",this.get("distance")*1e3)};RadiusWidget.prototype.addSizer_=function(){var e=new google.maps.Marker({draggable:!0,title:"Drag me"});e.bindTo("map",this);e.bindTo("position",this,"sizer_position");var t=this;google.maps.event.addListener(e,"drag",function(){t.setDistance()})};RadiusWidget.prototype.center_changed=function(){var e=this.get("bounds");if(e){var t=e.getNorthEast().lng(),n=new google.maps.LatLng(this.get("center").lat(),t);this.set("sizer_position",n)}};RadiusWidget.prototype.distanceBetweenPoints_=function(e,t){if(!e||!t)return 0;var n=6371,r=(t.lat()-e.lat())*Math.PI/180,i=(t.lng()-e.lng())*Math.PI/180,s=Math.sin(r/2)*Math.sin(r/2)+Math.cos(e.lat()*Math.PI/180)*Math.cos(t.lat()*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),o=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)),u=n*o;return u};RadiusWidget.prototype.setDistance=function(){var e=this.get("sizer_position"),t=this.get("center"),n=this.distanceBetweenPoints_(t,e);this.set("distance",n)};$(function(){initialize();geolocation();checkState();$("input[type=checkbox]").change(function(){localStorage[$(this).attr("id")]=$(this).attr("checked");checkState()})});