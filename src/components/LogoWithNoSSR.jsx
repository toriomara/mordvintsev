// "use client";
import dynamic from "next/dynamic";

const LogoWithNoSSR = dynamic(() => import("./Logo"), {
  ssr: false,
});

// export default () => <LogoWithNoSSR />

export default function LogoWithNoSSR2() {
  <LogoWithNoSSR />;
}
