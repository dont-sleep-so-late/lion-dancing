<script lang="ts" setup>
  import {
    onMounted,
    onUnmounted
  } from "vue";
  // import AMapLoader from "@amap/amap-jsapi-loader";

  let map = null;

  // onMounted(() => {
  //   window._AMapSecurityConfig = {
  //     securityJsCode: "ff4310e84e4987bf72b0c2cbb93d662d",
  //   };
  //   AMapLoader.load({
  //     key: "2198e11db9d26efd65e305e5109c2385", // 申请好的Web端开发者Key，首次调用 load 时必填
  //     version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  //     plugins: ["AMap.Scale", "AMap.ToolBar"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  //   })
  //     .then((AMap) => {
  //       map = new AMap.Map("container", {
  //         // 设置地图容器id
  //         viewMode: "3D", // 是否为3D地图模式
  //         zoom: 15, // 初始化地图级别
  //         center: [110.300111, 21.148347], // 初始化地图中心点位置
  //       });
  //       AMap.plugin(["AMap.MapType", "AMap.Scale", 'AMap.Geolocation',], function () {
  //         //地图类型切换
  //         var type = new AMap.MapType();
  //         var toolScale = new AMap.Scale(); //创建工具条插件实例
  //         const location = new AMap.Geolocation()
  //         map.addControl(toolScale); //添加工具条插件到页面
  //         map.addControl(type);
  //         map.addControl(location)
  //       });
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // });

  // onUnmounted(() => {
  //   map?.destroy();
  // });
</script>

<template>
  <TnNavbar fixed bg-color="transparent" :bottom-shadow="false" :placeholder="false" />
  <!-- 地图 -->
  <div id="container"></div>
  <!-- 位置内容 -->
  <view class="location-content tn-shadow">
    <view class="content-info">
      <view class="name">狮业有承有限公司 · 醒狮国际</view>
      <view class="desc">距离定位123.21km</view>
    </view>
    <view class="content-icon tn-flex-center" @click='getLocation'>
      <TnIcon name="location-fill" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
  @import './styles/index.scss';

  #container {
    width: 100%;
    height: 100vh;
  }
</style>