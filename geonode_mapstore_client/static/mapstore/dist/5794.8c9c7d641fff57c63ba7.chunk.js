(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5794],{2400:(e,t,o)=>{"use strict";o.d(t,{Z:()=>T});var r=o(67294),n=o.n(r),i=o(19690),a=o.n(i),s=o(27418),p=o.n(s),c=o(45697),u=o.n(c),l=o(14293),f=o.n(l),y=o(52259);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?h(Object(o),!0).forEach((function(t){_(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(c,e);var t,o,r,i,s=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(i){var o=E(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return O(this,e)});function c(){var e;v(this,c);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return _(P(e=s.call.apply(s,[this].concat(o))),"updateZIndex",(function(t){var o=t||e.props.position,r=e.props.map.imageryLayers._layers.reduce((function(t,o,r){return e.provider===o?r:t}),-1),n=e.props.map.imageryLayers._layers.reduce((function(e,t,r){return-1===e&&o<t._position?r:e}),-1);-1===n&&(n=r);var i=n-r;0!==i&&Array.apply(null,{length:Math.abs(i)}).map(Number.call,Number).forEach((function(){e.props.map.imageryLayers[i>0?"raise":"lower"](e.provider)}))})),_(P(e),"setLayerVisibility",(function(t){var o=e.getVisibilityOption(e.props),r=e.getVisibilityOption(t);r!==o&&(r?(e.addLayer(t),e.updateZIndex()):e.removeLayer())})),_(P(e),"getVisibilityOption",(function(e){var t=e.options,o=void 0===t?{}:t,r=e.zoom,n=e.resolutions,i=void 0===n?(0,y.getResolutions)():n,a=o||{},s=a.visibility,p=a.minResolution,c=void 0===p?-1/0:p,u=a.maxResolution,l=void 0===u?1/0:u;if(!a.disableResolutionLimits&&!f()(i[r])){var m=i[r];if(!(m<l&&m>=c))return!1}return!1!==s})),_(P(e),"setLayerOpacity",(function(t){t!==(e.props.options&&void 0!==e.props.options.opacity?e.props.options.opacity:1)&&e.layer&&e.provider&&(e.provider.alpha=t)})),_(P(e),"createLayer",(function(t,o,r,n,i){if(t){var s=p()({},o,r?{zIndex:r}:null,{securityToken:i});e.layer=a().createLayer(t,s,n),e.layer&&(e.layer.layerName=o.name,e.layer.layerId=o.id),null===e.layer&&e.props.onCreationError(o)}})),_(P(e),"updateLayer",(function(t,o){var r=a().updateLayer(t.type,e.layer,d(d({},t.options),{},{securityToken:t.securityToken}),d(d({},o.options),{},{securityToken:o.securityToken}),e.props.map);r&&(e.removeLayer(),e.layer=r,e.addLayer(t))})),_(P(e),"addLayerInternal",(function(t){t.options.useForElevation?e.props.map.terrainProvider=e.layer:(e.provider=e.props.map.imageryLayers.addImageryProvider(e.layer),e.provider._position=e.props.position,void 0!==t.options.opacity&&(e.provider.alpha=t.options.opacity))})),_(P(e),"addLayer",(function(t){if(e.layer&&!e.layer.detached&&(e.addLayerInternal(t),e.props.options.refresh&&e.layer.updateParams)){var o=0;e.refreshTimer=setInterval((function(){var r=e.layer.updateParams(p()({},e.props.options.params,{_refreshCounter:o++}));e.removeLayer(),e.layer=r,e.addLayerInternal(t)}),e.props.options.refresh)}})),_(P(e),"removeLayer",(function(t){var o=t||e.provider;o&&e.props.map.imageryLayers.remove(o)})),e}return t=c,(o=[{key:"componentDidMount",value:function(){this.createLayer(this.props.type,this.props.options,this.props.position,this.props.map,this.props.securityToken),this.props.options&&this.layer&&this.getVisibilityOption(this.props)&&(this.addLayer(this.props),this.updateZIndex())}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;this.setLayerVisibility(e);var o=e.options&&void 0!==e.options.opacity?e.options.opacity:1;if(this.setLayerOpacity(o),e.position!==this.props.position&&(this.updateZIndex(e.position),this.provider&&(this.provider._position=e.position)),this.props.options&&this.props.options.params&&this.layer.updateParams&&e.options.visibility&&Object.keys(this.props.options.params).reduce((function(o,r){return e.options.params[r]!==t.props.options.params[r]||o}),!1)){var r=this.provider,n=this.layer.updateParams(e.options.params);this.layer=n,this.addLayer(e),setTimeout((function(){t.removeLayer(r)}),1e3)}this.updateLayer(e,this.props)}},{key:"componentWillUnmount",value:function(){this.layer&&this.props.map&&!this.props.map.isDestroyed()&&(this.layer.detached?this.layer.remove():(this.layer.destroy&&this.layer.destroy(),this.props.map.imageryLayers.remove(this.provider)),this.refreshTimer&&clearInterval(this.refreshTimer))}},{key:"render",value:function(){var e=this;if(this.props.children){var t=this.layer,o=t?n().Children.map(this.props.children,(function(o){return o?n().cloneElement(o,{container:t,styleName:e.props.options&&e.props.options.styleName}):null})):null;return n().createElement(n().Fragment,null,o)}return a().renderLayer(this.props.type,this.props.options,this.props.map,this.props.map.id,this.layer)}}])&&g(t.prototype,o),c}(n().Component);_(S,"propTypes",{map:u().object,type:u().string,options:u().object,onCreationError:u().func,position:u().number,securityToken:u().string,zoom:u().number});const T=S},72892:(e,t,o)=>{"use strict";o.d(t,{Z:()=>M});var r=o(13842),n=o.n(r),i=o(45697),a=o.n(i),s=o(89255),p=o(67294),c=o.n(p),u=o(73935),l=o.n(u),f=o(37275),y=o(33353),m=o.n(y),h=o(52259),d=o(90183),v=o(27418),g=o.n(v),b=o(96486);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(p,e);var t,o,r,i,a=(r=p,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(i){var o=w(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return T(this,e)});function p(){var e;E(this,p);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return C(k(e=a.call.apply(a,[this].concat(o))),"state",{}),C(k(e),"onClick",(function(t,o){if(e.props.onClick&&null!==o.position){var r=t.camera.pickEllipsoid(o.position,t.scene.globe.ellipsoid),i=m().getMouseXYZ(t,o)||r&&n().Cartographic.fromCartesian(r);if(i){var a=180*i.latitude/Math.PI,s=180*i.longitude/Math.PI,p=(90-a)/180*e.props.standardHeight*(e.props.zoom+1),c=(180+s)/360*e.props.standardWidth*(e.props.zoom+1);e.props.onClick({pixel:{x:c,y:p},height:e.props.mapOptions&&e.props.mapOptions.terrainProvider?i.height:void 0,cartographic:i,latlng:{lat:a,lng:s},crs:"EPSG:4326"})}}})),C(k(e),"onMouseMove",(function(t){if(e.props.onMouseMove&&t.endPosition){var o=e.map.camera.pickEllipsoid(t.endPosition,e.map.scene.globe.ellipsoid),r=m().getMouseXYZ(e.map,t)||o&&n().Cartographic.fromCartesian(o);if(r){var i=Math.round(r.height);e.props.onMouseMove({y:180*r.latitude/Math.PI,x:180*r.longitude/Math.PI,z:i,crs:"EPSG:4326"})}}})),C(k(e),"getDocument",(function(){return e.props.document||document})),C(k(e),"getMapOptions",(function(e){var t={};if(e.terrainProvider){var o=e.terrainProvider,r=o.type,i=P(o,["type"]);switch(r){case"cesium":t.terrainProvider=new(n().CesiumTerrainProvider)(i);break;case"ellipsoid":t.terrainProvider=new(n().EllipsoidTerrainProvider)}}return g()({},e,t)})),C(k(e),"getCenter",(function(){var t=e.map.camera.positionCartographic;return{longitude:180*t.longitude/Math.PI,latitude:180*t.latitude/Math.PI,height:t.height}})),C(k(e),"getZoomFromHeight",(function(t){return Math.log2(e.props.zoomToHeight/t)+1})),C(k(e),"getHeightFromZoom",(function(t){return e.props.zoomToHeight/Math.pow(2,t-1)})),C(k(e),"gestureStartListener",(function(e){e.preventDefault()})),C(k(e),"setMousePointer",(function(t){e.map&&(l().findDOMNode(k(e)).getElementsByClassName("cesium-viewer")[0].style.cursor=t||"auto")})),C(k(e),"_updateMapPositionFromNewProps",(function(t){var o=e.getCenter(),r=e.getZoomFromHeight(o.height),i=function(e,t){return void 0!==e&&void 0!==t&&e.toFixed(12)-t.toFixed(12)<=1e-12},a=!i(t.center.x,o.longitude)||!i(t.center.y,o.latitude),s=t.zoom!==r;if(a||s){var p={destination:n().Cartesian3.fromDegrees(t.center.x,t.center.y,e.getHeightFromZoom(t.zoom)),orientation:t.viewerOptions.orientation};e.setView(p)}})),C(k(e),"setView",(function(t){e.props.mapOptions&&e.props.mapOptions.flyTo?e.map.camera.flyTo(t,e.props.mapOptions.defaultFlightOptions):e.map.camera.setView(t)})),C(k(e),"subscribeClickEvent",(function(t){var o={LEFT_UP:n().ScreenSpaceEventType.LEFT_UP,LEFT_DOWN:n().ScreenSpaceEventType.LEFT_DOWN,LEFT_CLICK:n().ScreenSpaceEventType.LEFT_CLICK,PINCH_START:n().ScreenSpaceEventType.PINCH_START,PINCH_END:n().ScreenSpaceEventType.PINCH_END,PINCH_MOVE:n().ScreenSpaceEventType.PINCH_MOVE},r=new s.Subject,i=new s.Subject;Object.keys(o).forEach((function(t){return e.hand.setInputAction((function(e){i.next({type:o[t],movement:e}),r.next({type:o[t],movement:e})}),o[t])})),i.filter((function(e){return e.type===o.PINCH_END})).switchMap((function(){return s.Observable.of(!0).concat(s.Observable.of(!1).delay(500))})).startWith(!1).switchMap((function(e){return e?s.Observable.never():r})).filter((function(e){return e.type===o.LEFT_DOWN})).switchMap((function(e){var t=e.movement;return r.filter((function(e){return e.type===o.LEFT_CLICK})).takeUntil(s.Observable.timer(500).merge(r.filter((function(e){return e.type!==o.LEFT_UP&&e.type!==o.LEFT_CLICK||e.type===o.LEFT_UP&&(r=t&&t.position,n=e.movement&&e.movement.position,!(r&&n&&r.x===n.x&&r.y===n.y));var r,n}))))})).subscribe((function(o){var r=o.movement;return e.onClick(t,r)})),e.clickStream$=r,e.pauserStream$=i})),C(k(e),"registerHooks",(function(){e.props.hookRegister.registerHook(h.GET_PIXEL_FROM_COORDINATES_HOOK),e.props.hookRegister.registerHook(h.GET_COORDINATES_FROM_PIXEL_HOOK),e.props.hookRegister.registerHook(h.ZOOM_TO_EXTENT_HOOK,(function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=o.crs,i=o.duration,a=(0,d.reprojectBbox)(t,r,"EPSG:4326");if(e.map.camera.flyTo){var s=n().Rectangle.fromDegrees(a[0],a[1],a[2],a[3]);e.map.camera.flyTo({destination:s,duration:i,complete:e.updateMapInfoState})}}))})),C(k(e),"updateMapInfoState",(function(){var t=e.getCenter(),o=e.getZoomFromHeight(t.height),r={height:Math.round(e.props.standardWidth*(o+1)),width:Math.round(e.props.standardHeight*(o+1))};e.props.onMapViewChanges({x:t.longitude,y:t.latitude,crs:"EPSG:4326"},o,{bounds:{minx:-180,miny:-90,maxx:180,maxy:90},crs:"EPSG:4326",rotation:0},r,e.props.id,e.props.projection,{orientation:{heading:e.map.camera.heading,pitch:e.map.camera.pitch,roll:e.map.camera.roll}},(0,h.getResolutions)()[o])})),e}return t=p,(o=[{key:"UNSAFE_componentWillMount",value:function(){this.getDocument().addEventListener("gesturestart",this.gestureStartListener)}},{key:"componentDidMount",value:function(){var e=new(n().Viewer)(this.getDocument().getElementById(this.props.id),g()({baseLayerPicker:!1,animation:!1,fullscreenButton:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,timeline:!1,navigationHelpButton:!1,navigationInstructionsInitiallyVisible:!1},this.getMapOptions(this.props.mapOptions)));e.scene.globe.baseColor=n().Color.WHITE,e.imageryLayers.removeAll(),e.camera.moveEnd.addEventListener(this.updateMapInfoState),this.hand=new(n().ScreenSpaceEventHandler)(e.scene.canvas),this.subscribeClickEvent(e),this.hand.setInputAction((0,b.throttle)(this.onMouseMove.bind(this),500),n().ScreenSpaceEventType.MOUSE_MOVE),e.camera.setView({destination:n().Cartesian3.fromDegrees(this.props.center.x,this.props.center.y,this.getHeightFromZoom(this.props.zoom))}),this.setMousePointer(this.props.mousePointer),this.map=e,this.forceUpdate(),this.props.mapOptions.navigationTools&&(this.cesiumNavigation=window.CesiumNavigation,this.cesiumNavigation&&this.cesiumNavigation.navigationInitialization(this.props.id,e)),this.props.registerHooks&&this.registerHooks()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){return e.mousePointer!==this.props.mousePointer&&this.setMousePointer(e.mousePointer),e.mapStateSource!==this.props.id&&this._updateMapPositionFromNewProps(e),!1}},{key:"componentWillUnmount",value:function(){this.clickStream$.complete(),this.pauserStream$.complete(),this.hand.destroy(),this.getDocument().removeEventListener("gesturestart",this.gestureStartListener),this.map.destroy()}},{key:"render",value:function(){var e=this,t=this.map,o=this.props.projection,r=t?c().Children.map(this.props.children,(function(r){return r?c().cloneElement(r,{map:t,projection:o,onCreationError:e.props.onCreationError,zoom:e.props.zoom}):null})):null;return c().createElement("div",{id:this.props.id},r)}}])&&_(t.prototype,o),p}(c().Component);C(L,"propTypes",{id:a().string,document:a().object,center:f.ZP.PropTypes.center,zoom:a().number.isRequired,mapStateSource:f.ZP.PropTypes.mapStateSource,projection:a().string,onMapViewChanges:a().func,onCreationError:a().func,onClick:a().func,onMouseMove:a().func,mapOptions:a().object,standardWidth:a().number,standardHeight:a().number,mousePointer:a().string,zoomToHeight:a().number,registerHooks:a().bool,hookRegister:a().object,viewerOptions:a().object}),C(L,"defaultProps",{id:"map",onMapViewChanges:function(){},onClick:function(){},onCreationError:function(){},projection:"EPSG:3857",mapOptions:{},standardWidth:512,standardHeight:512,zoomToHeight:8e7,registerHooks:!0,hookRegister:{registerHook:h.registerHook},viewerOptions:{orientation:{heading:0,pitch:-1*Math.PI/2,roll:0}}});const M=L},33353:(e,t,o)=>{var r=o(13842);e.exports={getMouseXYZ:function(e,t){var o=e.scene,n=t.position||t.endPosition;if(!n)return null;var i=e.camera.getPickRay(n),a=e.scene.globe.pick(i,e.scene),s=o._globe.ellipsoid;if(r.defined(a)){var p=s.cartesianToCartographic(a),c=function(e,t){if(null!==t.position){var o=e.scene,r=o._globe.ellipsoid;return o._camera.pickEllipsoid(t.position||t.endPosition,r)}return null}(e,t);return c&&(p.height=o._globe.getHeight(p),p.cartesian=c,p.position=a),p}return null},getMouseTile:function(e,t){var o=e.scene;if(!t.position)return null;var r=e.camera.getPickRay(t.position);return e.scene.globe.pickTile(r,o)}}}}]);