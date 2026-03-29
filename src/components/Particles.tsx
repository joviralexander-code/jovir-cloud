"use client";
import { useEffect, useRef } from "react";

interface P { x:number; y:number; vx:number; vy:number; r:number; o:number }

export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    let W=0,H=0, pts:P[]=[], raf:number;

    const resize = () => {
      W = c.offsetWidth; H = c.offsetHeight;
      c.width = W; c.height = H;
    };

    const init = () => {
      pts = Array.from({length:90}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-.5)*.45, vy: (Math.random()-.5)*.45,
        r: Math.random()*1.5+.5, o: Math.random()*.5+.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0,0,W,H);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x<0||p.x>W) p.vx*=-1;
        if (p.y<0||p.y>H) p.vy*=-1;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(139,92,246,${p.o})`;
        ctx.fill();
      }
      for (let i=0;i<pts.length;i++) {
        for (let j=i+1;j<pts.length;j++) {
          const a=pts[i],b=pts[j];
          const d=Math.hypot(a.x-b.x,a.y-b.y);
          if (d<130) {
            const al=(1-d/130)*.2;
            const g=ctx.createLinearGradient(a.x,a.y,b.x,b.y);
            g.addColorStop(0,`rgba(59,130,246,${al})`);
            g.addColorStop(1,`rgba(139,92,246,${al})`);
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
            ctx.strokeStyle=g; ctx.lineWidth=.8; ctx.stroke();
          }
        }
      }
      raf=requestAnimationFrame(draw);
    };

    resize(); init(); draw();
    const ro = new ResizeObserver(()=>{resize();init()});
    ro.observe(c);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}
