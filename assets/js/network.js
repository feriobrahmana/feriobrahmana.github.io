document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("network-graph");
  if (!container) return;

  fetch("/graph-data.json")
    .then((response) => response.json())
    .then((data) => {
      // Filter out hidden posts for the public view
      const publicPosts = data.filter((post) => !post.hidden);

      // 1. Create Nodes
      // Central Node
      const nodes = [
        {
          id: 0,
          label: "Ferio's\nUniverse",
          group: "hub",
          value: 20,
          title: "Double click to enter secret area",
        },
      ];

      // Category Hubs
      const categories = [...new Set(publicPosts.map((p) => p.category))];
      categories.forEach((cat, index) => {
        nodes.push({
          id: `cat-${cat}`,
          label: cat.charAt(0).toUpperCase() + cat.slice(1),
          group: "category",
          value: 10,
        });
      });

      // Post Nodes
      publicPosts.forEach((post, index) => {
        nodes.push({
          id: `post-${index}`,
          label: post.title.length > 20 ? post.title.substring(0, 20) + "..." : post.title,
          group: "post",
          value: 5,
          url: post.url,
          title: post.title, // Tooltip
          categoryId: `cat-${post.category}`,
        });
      });

      // 2. Create Edges
      const edges = [];

      // Connect Categories to Hub
      categories.forEach((cat) => {
        edges.push({ from: 0, to: `cat-${cat}` });
      });

      // Connect Posts to Categories
      publicPosts.forEach((post, index) => {
        edges.push({ from: `cat-${post.category}`, to: `post-${index}` });
      });

      // 3. Network Config
      const netData = { nodes: nodes, edges: edges };
      const options = {
        nodes: {
          shape: "dot",
          font: {
            color: "#e5e7eb",
            face: "system-ui",
          },
        },
        groups: {
          hub: {
            color: "#f97316", // Accent color
            font: { size: 18, multi: "html" },
          },
          category: {
            color: "#3b82f6", // Blue
          },
          post: {
            color: "#94a3b8", // Muted
          },
        },
        edges: {
          color: { inherit: "from", opacity: 0.4 },
          smooth: { type: "continuous" },
          width: 1,
        },
        physics: {
          stabilization: false,
          barnesHut: {
            gravitationalConstant: -8000,
            springConstant: 0.04,
            springLength: 95,
          },
        },
        interaction: {
          hover: true,
          tooltipDelay: 200,
        },
      };

      // 4. Initialize Network
      const network = new vis.Network(container, netData, options);

      // 5. Events
      network.on("click", function (params) {
        if (params.nodes.length > 0) {
          const nodeId = params.nodes[0];
          const node = nodes.find((n) => n.id === nodeId);
          if (node && node.url) {
            window.location.href = node.url;
          }
        }
      });

      // Secret Door: Double click the central hub
      network.on("doubleClick", function (params) {
        if (params.nodes.length > 0) {
          const nodeId = params.nodes[0];
          if (nodeId === 0) {
            // Trigger secret door
            // Check if the user really wants to go there (simple "password" or just redirect)
            // For now, just redirect to the private index
             window.location.href = "/private/";
          }
        }
      });

      // Responsive sizing
      window.addEventListener("resize", () => {
        network.fit();
      });
    })
    .catch((err) => console.error("Failed to load graph data", err));
});
