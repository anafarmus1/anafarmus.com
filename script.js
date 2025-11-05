new FinisherHeader({
  "count": 9,
  "size": {
    "min": 1300,
    "max": 1500,
    "pulse": 0
  },
  "speed": {
    "x": {
      "min": 0.6,
      "max": 2.5
    },
    "y": {
      "min": 0.6,
      "max": 2.5
    }
  },
  "colors": {
    "background": "#c5ad90",
    "particles": [
      "#ff9e1c",
      "#6fe3dd",
      "#836dcf",
      "#ea62b1"
    ]
  },
  "blending": "lighten",
  "opacity": {
    "center": 0.6,
    "edge": 0
  },
  "skew": 0,
  "shapes": [
    "c"
  ]
});

// --- Display "Last updated" timestamp ---
const updatedEl = document.getElementById("last-updated");

// Format the date and time neatly
const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
};

const lastUpdated = new Date(document.lastModified).toLocaleString("en-US", options);

// Show it on the page
updatedEl.textContent = `Last updated: ${lastUpdated}`;

