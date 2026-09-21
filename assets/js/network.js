document.addEventListener("DOMContentLoaded", function () {
  var map = document.getElementById("systems-map");
  if (!map) return;

  var nodes = Array.prototype.slice.call(map.querySelectorAll(".map-node"));
  var edges = Array.prototype.slice.call(map.querySelectorAll("[data-edge]"));
  var inspectorKicker = document.getElementById("inspector-kicker");
  var inspectorTitle = document.getElementById("inspector-title");
  var inspectorBody = document.getElementById("inspector-body");
  var inspectorLink = document.getElementById("inspector-link");
  var core = map.querySelector('[data-node="core"]');
  var holdTimer = null;

  function relatedIds(node) {
    return (node.dataset.related || "")
      .split(",")
      .map(function (value) { return value.trim(); })
      .filter(Boolean);
  }

  function selectNode(node) {
    var id = node.dataset.node;
    var related = relatedIds(node);

    nodes.forEach(function (candidate) {
      var candidateId = candidate.dataset.node;
      candidate.classList.toggle("is-active", candidate === node);
      candidate.classList.toggle("is-related", related.indexOf(candidateId) !== -1);
      candidate.setAttribute("aria-pressed", candidate === node ? "true" : "false");
    });

    edges.forEach(function (edge) {
      var endpoints = edge.dataset.edge.split(",");
      edge.classList.toggle("is-active", endpoints.indexOf(id) !== -1);
    });

    inspectorKicker.textContent = node.dataset.kicker || "System node";
    inspectorTitle.textContent = node.dataset.title || "Untitled node";
    inspectorBody.textContent = node.dataset.body || "";

    if (node.dataset.link) {
      inspectorLink.hidden = false;
      inspectorLink.href = node.dataset.link;
      inspectorLink.textContent = node.dataset.linkLabel || "Open node →";

      if (/^https?:\/\//.test(node.dataset.link)) {
        inspectorLink.target = "_blank";
        inspectorLink.rel = "noopener noreferrer";
      } else {
        inspectorLink.removeAttribute("target");
        inspectorLink.removeAttribute("rel");
      }
    } else {
      inspectorLink.hidden = true;
      inspectorLink.removeAttribute("href");
    }
  }

  nodes.forEach(function (node) {
    node.setAttribute("aria-pressed", node.classList.contains("is-active") ? "true" : "false");
    node.addEventListener("click", function () { selectNode(node); });
  });

  function enterTunnel() {
    document.body.classList.add("entering-tunnel");
    window.setTimeout(function () { window.location.assign("/private/"); }, 260);
  }

  function cancelHold() {
    if (holdTimer !== null) {
      window.clearTimeout(holdTimer);
      holdTimer = null;
    }
  }

  if (core) {
    core.addEventListener("dblclick", function (event) {
      event.preventDefault();
      enterTunnel();
    });

    core.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "mouse") return;
      cancelHold();
      holdTimer = window.setTimeout(enterTunnel, 850);
    });

    ["pointerup", "pointercancel", "pointerleave"].forEach(function (eventName) {
      core.addEventListener(eventName, cancelHold);
    });

    core.addEventListener("keydown", function (event) {
      if (event.shiftKey && event.key === "Enter") {
        event.preventDefault();
        enterTunnel();
      }
    });
  }

  selectNode(core || nodes[0]);
});
