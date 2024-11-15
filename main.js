fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('sigma-container');
    const graph = new sigma.classes.graph();

    // Add nodes and edges
    data.nodes.forEach(node => graph.addNode(node.id, {
      label: node.label,
      x: node.x,
      y: node.y,
      size: node.size,
      color: node.color
    }));
    data.edges.forEach(edge => graph.addEdge(edge.id, edge.source, edge.target, {
      color: edge.color,
      size: edge.size
    }));

    // Configure and render graph
    new sigma({
      graph: graph,
      container: container,
      settings: {
        defaultNodeColor: '#ec5148',
        defaultEdgeColor: '#cccccc',
        edgeColor: 'default',
        minNodeSize: 8,
        maxNodeSize: 16,
        minEdgeSize: 0.5,
        maxEdgeSize: 4
      }
    });
  })
  .catch(error => console.error('Error loading graph data:', error));

