// webgl.js

(function() {
  // シーンの作成 ------------------------------------------
  var scene = new THREE.Scene();

  // カメラの作成 ------------------------------------------
  // fov: 画角(視野角)
  var fov = 75;

  var height = 600; // 縦幅
  var width = 400; // 横幅
  // aspect: アスペクト比、カメラで撮影したものの縦横比
  var aspect = height/width;

  // near： ニアークリップ、 カメラからの撮影開始位置、これより近いものは撮影しない
  var near = 1;
  // far: ファークリップ カメラからの撮影終了位置、これより遠いものは撮影しない
  var far = 1000;

  // カメラ作成
  var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  // カメラ配置
  camera.position.set(0, 0, 70); // (x, y, z)

  // レンダラーの追加 ----------------------------------------
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(height, width); // Canvasのサイズ設定
  document.body.appendChild(renderer.domElement);

  // ライティングを設定する ------------------------------------------
  var color = 'white'; // 光の色
  // ライトオブジェクトの作成
  var directionalLight = new THREE.DirectionalLight(color);
  directionalLight.position.set(0, 7, 10); // 光源の角度を設定
  scene.add(directionalLight); // シーンに追加

  // 物体を追加する ----------------------------------------
  // ジオメトリーの作成
  var geometry = new THREE.CubeGeometry(20, 20, 20); // サイズ設定（x, y, z）
  // マテリアルの作成
  var material = new THREE.MeshPhongMaterial({color: 'orange'});
  // メッシュの作成
  cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 0, 0);  // 位置を設定(x, y, z)
  scene.add(cube); // シーンに追加

  // レンダリング ----------------------------------------
  function render() {
  // 回転アニメーションを追加
    requestAnimationFrame(render);
    cube.rotation.x += 0.01; // x軸に0.01加算
    cube.rotation.y += 0.01; // y軸に0.01加算

    // シーンとカメラを渡してレンダリング
    renderer.render(scene, camera);
  }
  render();

  // カメラコントロール ----------------------------------------
  var controls = new THREE.OrbitControls(camera);

})();
