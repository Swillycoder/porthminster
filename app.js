let selectedBed = null;

const bedData = {
    B01: { crop: "Flowers", plant: "March", harvest: "All Summer", label: "BED 1" },
    B02: { crop: "Broad Beans", plant: "October",harvest: "April", label: "BED 2" },
    B03: { crop: "Broad Beans", plant: "October",harvest: "April", label: "BED 3" },
    B04: { crop: "Broad Beans", plant: "October",harvest: "April", label: "BED 4" },
    B05: { crop: "EMPTY", plant: "March", harvest: "Unknown", label: "BED 5" },
    B06: { crop: "Broad Beans", plant: "October",harvest: "April", label: "BED 6" },
    B07: { crop: "EMPTY", plant: "March",harvest: "Unknown", label: "BED 7" },
    B08a: { crop: "Jerusalem Artichokes", plant: "N/A", harvest: "October", label: "BED 8a" },
    B08b: { crop: "EMPTY", plant: "March", harvest: "Unknown", label: "BED 8b" },
    B09: { crop: "Rhubarb", plant: "N/A",harvest: "March", label: "BED 9" },
    
};

const infoPanel = document.getElementById("info");

document.querySelectorAll("rect").forEach(bed => {
  bed.addEventListener("click", () => {
    const id = bed.dataset.bed;
    const data = bedData[id];

    if (selectedBed) {
      selectedBed.classList.remove("selected-bed");
    }

    bed.classList.add("selected-bed");
    selectedBed = bed;

    infoPanel.innerHTML = `
      <strong>${data.label}</strong><br>
      Crop: ${data.crop}<br>
      Plant: ${data.plant}<br>
      Harvest: ${data.harvest}
    `;
  });
});


const svg = document.getElementById("garden");

Object.keys(bedData).forEach(id => {
    const bed = document.getElementById(id);
    if (!bed) return;

    const data = bedData[id];

    const x = parseFloat(bed.getAttribute("x"));
    const y = parseFloat(bed.getAttribute("y"));
    const w = parseFloat(bed.getAttribute("width"));
    const h = parseFloat(bed.getAttribute("height"));

    const centerX = x + w / 2;
    const centerY = y + h / 2;

    const label = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
    );

    label.setAttribute("x", centerX);
    label.setAttribute("y", centerY);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("dominant-baseline", "middle");
    label.setAttribute("font-size", "12");

    label.textContent = data.label;

    svg.appendChild(label);
});
