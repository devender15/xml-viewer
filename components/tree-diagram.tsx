'use client';


import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface TreeDiagramProps {
  data: any;
}

const TreeDiagram: React.FC<TreeDiagramProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data) return;

    const width = 600;
    const height = 600;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const treeLayout = d3.tree().size([2 * Math.PI, 300]);

    const root = d3.hierarchy(data);
    treeLayout(root);

    const link = svg.selectAll('.link')
      .data(root.links())
      .enter().append('path')
      .attr('class', 'link')
      .attr('d', d3.linkRadial()
        .angle((d: any) => d.x)
        .radius((d: any) => d.y));

    const node = svg.selectAll('.node')
      .data(root.descendants())
      .enter().append('g')
      .attr('class', 'node')
      .attr('transform', (d: any) => `translate(${d.y},${d.x})`);

    node.append('circle')
      .attr('r', 4.5);

    node.append('text')
      .attr('dy', '0.31em')
      .attr('x', (d: any) => d.children ? -6 : 6)
      .attr('text-anchor', (d: any) => d.children ? 'end' : 'start')
      .text((d: any) => d.data.key);

    return () => {
      svg.selectAll('*').remove();
    };
  }, [data]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default TreeDiagram;
