document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("network-graph");
  if (!container) return;

  let network; // Define globally for theme updates

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
          label: "Ferio's\nWorld",
          group: "hub",
          value: 25,
          title: "Double click to enter secret area",
        },
        {
          id: "cv-node",
          label: "Curriculum\nVitae",
          group: "cv",
          value: 15,
          url: "/cv/",
          title: "View My CV",
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

      // Connect CV to Hub
      edges.push({ from: 0, to: "cv-node", length: 150 });

      // Connect Categories to Hub
      categories.forEach((cat) => {
        edges.push({ from: 0, to: `cat-${cat}` });
      });

      // Connect Posts to Categories
      publicPosts.forEach((post, index) => {
        edges.push({ from: `cat-${post.category}`, to: `post-${index}` });
      });

      // 3. Network Config (Initial Options)
      const netData = { nodes: nodes, edges: edges };

      const getThemeOptions = (theme) => {
          const isDark = theme === 'dark';
          const textColor = isDark ? "#e5e7eb" : "#1f2937"; // Gray-200 vs Gray-800

          return {
            nodes: {
              shape: "dot",
              font: {
                color: textColor,
                face: "system-ui",
              },
            },
            groups: {
              hub: {
                color: "#f97316", // Accent color (Orange)
                font: { size: 18, multi: "html" },
              },
              category: {
                color: "#3b82f6", // Blue
              },
              cv: {
                color: "#10b981", // Emerald Green
                font: { size: 14 },
              },
              post: {
                color: isDark ? "#94a3b8" : "#64748b", // Muted Slate-400 vs Slate-500
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
      };

      // 4. Initialize Network with current theme
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      network = new vis.Network(container, netData, getThemeOptions(currentTheme));

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
             window.location.href = "/private/";
          }
        }
      });

      // Responsive sizing
      window.addEventListener("resize", () => {
        network.fit();
      });

      // Listen for theme changes from other scripts
      window.addEventListener('theme-changed', (e) => {
          const newTheme = e.detail.theme;
          network.setOptions(getThemeOptions(newTheme));
      });

    })
    .catch((err) => console.error("Failed to load graph data", err));
});

// Theme Toggler Logic
document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById('theme-toggle');
    if(!toggleBtn) return;

    // Check saved preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Update button icon/text if needed (optional)

    toggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);

        // Dispatch event for the graph to update
        window.dispatchEvent(new CustomEvent('theme-changed', { detail: { theme: next } }));
    });
});
