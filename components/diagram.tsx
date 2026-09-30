// Static architecture diagram primitives. No hooks, no motion: safe for server
// components on functional pages. The landing signature reuses NodeShape and
// arrowPath and adds its own motion.
import {
  type Diagram,
  type DiagramGroup,
  type DiagramLayout,
  type DiagramNode,
  type Direction,
  NODE_H,
  NODE_W,
} from "@/content/diagrams";

export type PartState = "idle" | "active" | "done";

export function arrowPath([x, y]: [number, number], dir: Direction) {
  const a = 7;
  const b = 4.5;
  switch (dir) {
    case "right":
      return `M${x - a} ${y - b} L${x} ${y} L${x - a} ${y + b}`;
    case "left":
      return `M${x + a} ${y - b} L${x} ${y} L${x + a} ${y + b}`;
    case "down":
      return `M${x - b} ${y - a} L${x} ${y} L${x + b} ${y - a}`;
    case "up":
      return `M${x - b} ${y + a} L${x} ${y} L${x + b} ${y + a}`;
  }
}

export function NodeShape({ node, state = "done" }: { node: DiagramNode; state?: PartState }) {
  const w = node.w ?? NODE_W;
  const h = node.h ?? NODE_H;
  const pad = w < 140 ? 12 : 16;
  const labelTop = node.y + 29;
  const subTop = labelTop + (node.label.length - 1) * 18 + 20;
  return (
    <g className="dg-node" data-state={state}>
      <rect x={node.x + 0.5} y={node.y + 0.5} width={w - 1} height={h - 1} rx={9} />
      <text className="dg-label" x={node.x + pad}>
        {node.label.map((line, i) => (
          <tspan key={line} x={node.x + pad} y={labelTop + i * 18}>
            {line}
          </tspan>
        ))}
      </text>
      {node.sub && (
        <text className="dg-sub" x={node.x + pad}>
          {node.sub.map((line, i) => (
            <tspan key={line} x={node.x + pad} y={subTop + i * 16}>
              {line}
            </tspan>
          ))}
        </text>
      )}
    </g>
  );
}

export function GroupShape({ group, state = "done" }: { group: DiagramGroup; state?: PartState }) {
  return (
    <g className="dg-group" data-state={state}>
      <rect x={group.x + 0.5} y={group.y + 0.5} width={group.w - 1} height={group.h - 1} rx={12} />
      <text x={group.x} y={group.y - 10}>
        {group.label}
      </text>
    </g>
  );
}

function StaticLayout({ layout, className }: { layout: DiagramLayout; className: string }) {
  return (
    <svg
      viewBox={`0 0 ${layout.width} ${layout.height}`}
      className={`dg h-auto w-full ${className}`}
      style={{ maxWidth: layout.width }}
      aria-hidden
    >
      {layout.groups?.map((g) => (
        <GroupShape key={g.id} group={g} />
      ))}
      {layout.edges.map((e) => (
        <g key={e.id} className="dg-edge" data-state="done">
          <path d={e.d} />
          <path d={arrowPath(e.end, e.dir)} />
        </g>
      ))}
      {layout.nodes.map((n) => (
        <NodeShape key={n.id} node={n} />
      ))}
    </svg>
  );
}

export function StaticDiagram({ diagram }: { diagram: Diagram }) {
  return (
    <div role="img" aria-label={diagram.title} className="flex justify-center">
      <StaticLayout layout={diagram.wide} className="hidden min-[75rem]:block" />
      <StaticLayout layout={diagram.narrow} className="max-w-[400px]! min-[75rem]:hidden" />
    </div>
  );
}
