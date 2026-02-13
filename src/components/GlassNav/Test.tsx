import GlassSurface from "@/components/GlassNav/GlassNav";

export default function Test() {
    return (
// Custom displacement effects
    <GlassSurface
        displace={3.5}
        distortionScale={70}
        redOffset={9}
        greenOffset={10}
        blueOffset={20}
        brightness={50}
        opacity={0.93}
        mixBlendMode="screen"
    >
        <span>Advanced Glass Distortion</span>
    </GlassSurface>
)
}