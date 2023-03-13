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
          camera={{ position: [-30, 35, -15], near: 30, far: 55, fov: 12 }}
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
          <mesh>
            <boxGeometry args={[15, 15, 15]} />
            <meshStandardMaterial />
          </mesh>

          <EffectComposer>
            <DepthOfField target={[0, 0, 0]} focusRange={0.55} bokehScale={8} />
          </EffectComposer>
          <OrbitControls
            autoRotate
            autoRotateSpeed={1}
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 4}
          />
        </Canvas>
      </div>
    </section>
  );
}
