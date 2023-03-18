import Container from "./Container";
import styles from "./BannerHome.module.scss";
import RichTextRenderer from "./RichTextRenderer";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  Lightformer,
  Stage,
} from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

export default function BannerHome({ block }) {
  return (
    <section className={styles.banner}>
      <Container>
        <h1>{block.title}</h1>
        <RichTextRenderer blocks={block.subtitle} />
      </Container>
      <div className={styles.canvas}>
        <Canvas
          shadows
          gl={{ antialias: false }}
          camera={{ position: [-30, 35, -15], near: 30, far: 155, fov: 30 }}
        >
          <color attach="background" args={["#efffaf"]} />
          <ambientLight intensity={0.5} />

          <directionalLight
            position={[-10, 10, 5]}
            shadow-mapSize={[256, 256]}
            shadow-bias={-0.0001}
            castShadow
          >
            <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10]} />
          </directionalLight>
          <Environment resolution={32}>
            <Lightformer position={[10, 10, 10]} scale={10} intensity={4} />
            <Lightformer position={[10, 0, -10]} scale={10} color="red" intensity={6} />
            <Lightformer position={[-10, -10, -10]} scale={10} intensity={4} />
          </Environment>
          <AccumulativeShadows
            temporal
            frames={Infinity}
            alphaTest={1}
            blend={200}
            limit={1500}
            scale={25}
            position={[0, -0.05, 0]}
          >
            <RandomizedLight
              amount={1}
              mapSize={512}
              radius={5}
              ambient={0.5}
              position={[-10, 10, 5]}
              size={10}
              bias={0.001}
            />
          </AccumulativeShadows>
          <Stage
            intensity={0.5}
            environment="city"
            shadows={{ type: "accumulative", bias: -0.001 }}
            adjustCamera={false}
          >
            <mesh>
              <boxGeometry args={[15, 15, 15]} />
              <meshBasicMaterial color={"#e1f789"} wireframe />
            </mesh>
          </Stage>

          <EffectComposer>
            <DepthOfField target={[0, 0, 0]} focusRange={1} bokehScale={0} />
          </EffectComposer>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>
    </section>
  );
}
