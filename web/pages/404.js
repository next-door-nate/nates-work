import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import {
  OrbitControls,
  Text,
  Text3D,
  Float,
  Center,
  Stars,
  Sparkles,
  useMatcapTexture,
} from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import client from "../utils/client";
import { globalConfigQuery } from "../utils/queries";
import Layout from "../components/Layout";
import Container from "../components/Container";
import styles from "./404.module.scss";

export default function Custom404({ globalConfig }) {
  var [initialScale, setInitialScale] = useState([7, 7, 7]);
  useEffect(() => {
    console.log(window.outerWidth);

    if (window.outerWidth < 1000 && window.outerWidth > 768) {
      setInitialScale = [8, 8, 8];
    } else if (window.outerWidth < 868) {
      setInitialScale = [10, 10, 10];
    }
  }, []);

  return (
    <Layout header={globalConfig.header} footer={globalConfig.footer}>
      <section className={styles.error}>
        <h1 hidden>404 page not found</h1>
        <Canvas camera={{ position: initialScale, fov: 30 }}>
          <color attach="background" args={["#fff"]} />
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.1}
            enableZoom={false}
            minAzimuthAngle={-0.75}
            maxAzimuthAngle={0.75}
            minPolarAngle={1}
            maxPolarAngle={2}
          />
          {/* <Stars
            radius={100}
            depth={100}
            count={4000}
            factor={4}
            saturation={1}
            fade
            speed={0.2}
            color="#0000ff"
          />
          <Sparkles count={300} size={2} speed={0.0} opacity={1} scale={10} color="#000" /> */}
          <Float floatIntensity={2} speed={2}>
            <Text color={"black"}>
              404
              {/* <meshBasicMaterial color="black" /> */}
            </Text>
            <Text fontSize=".5" position={[0, -0.8, 0]}>
              Page not found
            </Text>
          </Float>
        </Canvas>
        <Container>{/* <h1>404 - Page Not Found</h1> */}</Container>
      </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const globalConfig = await client.fetch(globalConfigQuery);

  return {
    props: {
      globalConfig,
    },
  };
}
