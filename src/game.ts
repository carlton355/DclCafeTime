const stream = new VideoRealtimeStream("https://stream.decentralandlive.net:5443/WebRTCAppEE/", "898681913277907905407347", "AntMediaEnterprise");
const videoTexture = new VideoRealtimeTexture(stream);

const material = new Material();
const entity = new Entity();

const bar = new Entity();
bar.addComponent(new GLTFShape("models/scene.glb"))

bar.addComponent(new Transform({
  position: new Vector3(8,-0.2,8),
  rotation: Quaternion.Euler(0, 270, 0),
  scale: new Vector3(1.9, 1.9, 1.9)
}))

material.albedoTexture = videoTexture;
material.roughness = 1;
material.specularIntensity = 0;
material.metallic = 0;

const planeShape = new PlaneShape();
entity.addComponent(planeShape);
entity.addComponent(material);

entity.addComponent(new Transform({
  position: new Vector3(8.5, 2.2, 8),
  scale: new Vector3(5, 4.2, 1),
  rotation: Quaternion.Euler(0, 270, 0)
}));

engine.addEntity(entity);
engine.addEntity(bar);

const myEntity = new Entity()
myEntity.addComponent(new BoxShape())

myEntity.addComponent(
  new OnPointerDown((e) => {
    log("myEntity was clicked", e)
    videoTexture.play();
  })
)

myEntity.addComponent(new Transform({
  position: new Vector3(8, 0.5, 3)
}));

engine.addEntity(myEntity);
