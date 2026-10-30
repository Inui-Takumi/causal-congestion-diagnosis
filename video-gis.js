"use strict";

pages.drones.title = "无人机状态";

pages.video = {
  title: "实时巡检",
  html: () => `
    <section class="video-gis-hero">
      <div>
        <p class="eyebrow">UAV VIDEO & GIS LOCATION</p>
        <h2>无人机视频与 GIS 协同巡检</h2>
        <p>将无人机实时图传、巡检位置与路段运行态势联动呈现，便于快速核查现场和调度资源。</p>
      </div>
      <div class="uav-live-state"><i></i><span>UAV-03 图传在线</span><b>延迟 68 ms</b></div>
    </section>

    <div class="uav-gis-grid">
      <section class="panel video-panel">
        <div class="panel-head">
          <div><small>LIVE VIDEO FEED</small><h2>无人机实时视频流</h2></div>
          <span class="live-badge"><i></i>实时</span>
        </div>
        <div class="video-stage">
          <img src="./assets/huayan-uav-feed.png" alt="华岩立交路段无人机航拍画面">
          <div class="stream-scan" aria-hidden="true"></div>
          <div class="video-hud video-hud-top"><span class="stream-live"><i></i>LIVE</span><span>UAV-03 · EO / 4K</span><span>CH-03 · 加密图传</span></div>
          <div class="stream-reticle" aria-hidden="true"><i></i><b></b><em></em><strong></strong></div>
          <div class="stream-telemetry" aria-label="无人机实时遥测"><span>ALT <b>118 m</b></span><span>SPD <b>12.4 m/s</b></span><span>HDG <b>184°</b></span></div>
          <div class="video-hud video-hud-bottom"><span>内环快速路 · 华岩寺路段</span><span>29.4990°N · 106.4480°E</span><span>30 FPS · 8.2 Mbps</span></div>
          <div class="video-corner corner-a"></div><div class="video-corner corner-b"></div><div class="video-corner corner-c"></div><div class="video-corner corner-d"></div>
        </div>
        <div class="video-meta">
          <div><span>巡检任务</span><b>华岩立交及内环快速路巡查</b></div>
          <div><span>当前告警</span><b class="warning">华岩寺路段异常占用待核查</b></div>
          <div><span>画面来源</span><b>UAV-03 航拍画面</b></div>
        </div>
      </section>

      <aside class="panel gis-panel">
        <div class="panel-head">
          <div><small>MAP POSITIONING</small><h2>地图软件定位</h2></div>
          <span class="gis-tag">WGS-84</span>
        </div>
        <div class="gis-canvas map-software huayan-map" aria-label="重庆市九龙坡区华岩立交地图软件定位视图">
          <img class="gis-map-image" src="./assets/huayan-gis-map.png" alt="重庆市九龙坡区华岩立交地图底图">
          <div class="map-toolbar" aria-label="地图工具"><button type="button" aria-label="放大">+</button><button type="button" aria-label="缩小">−</button><button type="button" aria-label="定位">⌖</button></div>
          <span class="map-layer-control">▱ 图层</span>
          <div class="map-location-chip"><i>●</i> RTK 定位已锁定 · 华岩立交</div>
          <div class="map-location-pin"><i>✦</i><span>UAV-03<br><b>内环快速路华岩寺路段</b></span></div>
          <div class="map-scale"><i></i><span>1 km</span></div>
        </div>
        <dl class="gis-details">
          <div><dt>行政区划</dt><dd>重庆市 · 九龙坡区华岩镇</dd></div>
          <div><dt>巡检路段</dt><dd>内环快速路 · 华岩寺路段</dd></div>
          <div><dt>经纬度</dt><dd>106.4480°E, 29.4990°N</dd></div>
          <div><dt>路段方向</dt><dd>北向南 · 双向多车道</dd></div>
        </dl>
        <p class="gis-note">地图中心为你圈选的华岩立交内环快速路点位（106.4480°E、29.4990°N）；接入实际 GIS 服务后可同步真实无人机点位与视频流。</p>
      </aside>
    </div>

    <section class="grid cols-3 video-kpis">
      <article class="panel video-stat"><i>◎</i><div><span>视频识别状态</span><b>正常</b><small>目标检测模型运行中</small></div></article>
      <article class="panel video-stat"><i>⌁</i><div><span>当前高度</span><b>118 m</b><small>距巡检航线 +3 m</small></div></article>
      <article class="panel video-stat"><i>⌖</i><div><span>定位精度</span><b>± 1.8 m</b><small>RTK 差分定位已锁定</small></div></article>
    </section>`,
};
