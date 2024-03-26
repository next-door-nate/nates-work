import { useEffect, useRef } from "react";
import Container from "./Container";
import styles from "./BannerHome.module.scss";
import RichTextRenderer from "./RichTextRenderer";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { WaveMaterial } from "../shaders/bannerShader.js";
import { easing } from "maath";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import SparklingGrid from "./SparklingGrid.js";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [0, distance]);
}

function ShaderPlane() {
  const ref = useRef();
  const { viewport, size } = useThree();
  useFrame((state, delta) => {
    ref.current.time += delta;
    easing.damp3(ref.current.pointer, state.pointer, 0.2, delta);
  });
  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <waveMaterial
        ref={ref}
        key={WaveMaterial.key}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
      />
    </mesh>
  );
}

export default function BannerHome({ block }) {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);
  const y2 = useParallax(scrollYProgress, 400);
  const y3 = useParallax(scrollYProgress, 600);

  useEffect(() => {
    // setTimeout(() => {
    //   var loading = document.querySelector("[data-loading]");
    //   loading.offsetWidth;
    //   loading.setAttribute("data-loading", false);
    // }, 0);

    var loading = document.querySelector("[data-loading]");
    loading.offsetWidth;
    loading.setAttribute("data-loading", false);
  }, []);

  return (
    <section
      className={styles.banner + ` noise`}
      ref={ref}
      data-loading={true}
      data-block={block._type}
    >
      <SparklingGrid gridSpacing={24} maxIntensity={50} flickerSpeed={10} />
      <Container>
        <div className={styles.content}>
          <h1>{block.title}</h1>
          <RichTextRenderer blocks={block.subtitle} />
        </div>

        <motion.div style={{ y }} className={styles.name}>
          <span hidden>N</span>
          <span>A</span>
          <span hidden>T</span>
          <span>E</span>
          <span hidden>V</span>
          <span hidden>A</span>
          <span hidden>N</span>
          <span>D</span>
          <span>E</span>
          <span hidden>R</span>
          <span hidden>V</span>
          <span>I</span>
          <span hidden>S</span>
        </motion.div>

        <motion.div style={{ y2 }} ref={ref2} className={styles.name}>
          <span hidden>N</span>
          <span hidden>A</span>
          <span hidden>T</span>
          <span hidden>E</span>
          <span>V</span>
          <span hidden>A</span>
          <span>N</span>
          <span hidden>D</span>
          <span hidden>E</span>
          <span hidden>R</span>
          <span>V</span>
          <span hidden>I</span>
          <span hidden>S</span>
        </motion.div>

        <motion.div style={{ y3 }} ref={ref3} className={styles.name}>
          <span>N</span>
          <span hidden>A</span>
          <span>T</span>
          <span hidden>E</span>
          <span>V</span>
          <span>A</span>
          <span hidden>N</span>
          <span hidden>D</span>
          <span hidden>E</span>
          <span>R</span>
          <span hidden>V</span>
          <span hidden>I</span>
          <span>S</span>
        </motion.div>

        {/* <Canvas id="canvas" className={styles.canvas}>
          <ShaderPlane />
        </Canvas> */}

        {/* <div className={styles.gradient}>
          <div className={styles.blowout}>
            <div className={styles.blowout1}></div>
            <div className={styles.blowout2}></div>
            <div className={styles.blowout3}></div>
            <div className={styles.blowout4}></div>
          </div>
          <div className={styles.color}>
            <div className={styles.color1}></div>
            <div className={styles.color2}></div>
            <div className={styles.color3}></div>
            <div className={styles.color4}></div>
            <div className={styles.color5}></div>
            <div className={styles.color6}></div>
          </div>
          <div className={styles.target}>
            <div className={styles.target1}></div>
            <div className={styles.target2}>
              <svg
                width="1600"
                height="586"
                viewBox="0 0 1600 586"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M462.924 195.025L1462.92 0.524665L1671.42 96.525C1671.42 96.525 1521.11 516.388 1275.1 537.182C1029.1 557.976 863.605 408.182 701.605 355.725C539.605 303.268 -160.001 586.004 -160.001 586.004L462.924 195.025Z"
                  fill="#8D90DA"
                />
              </svg>
            </div>
            <div className={styles.target3}>
              <svg
                width="586"
                height="364"
                viewBox="0 0 586 364"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M64 293C336 271.244 392 245.212 522 64C449 259 408 321 64 293Z"
                    fill="#43D8C6"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div> */}
      </Container>
    </section>
  );
}
