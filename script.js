const phraseChanges = {
  sabre: "pénis",
  Boruto: "Burrito",
  pote: "reuf",
  coéquipier: "collègue",
  chakra: "mana",
  Hokage: "Bukkake",
  Konoha: "Carhaix",
  guere: "bagarre",
  Mitsuki: "Mitsubishi",
  Hinata: "Piñata",
  crâne: "ciboulot",
  multiclonage: "multi-moi",
  Multiclonage: "Multi-moi",
};

function changeSubtitles() {
  const callback = () => {
    const subtitles = document.querySelector(".player-timedtext");

    if (subtitles) {
      const { firstChild } = subtitles;

      if (firstChild) {
        for (const subtitle of firstChild.childNodes) {
          replaceText(subtitle);
        }
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(document.body, {
    subtree: true,
    attributes: false,
    childList: true,
  });
}

/**
 * @param {ChildNode} node
 */
function replaceText(node) {
  const regex = new RegExp(Object.keys(phraseChanges).join("|"), "gi");
  const newText = node.textContent.replace(regex, function (matched) {
    return phraseChanges[matched];
  });

  if (newText !== node.textContent) {
    node.textContent = newText;
    node.style.display = "block";
  }
}

changeSubtitles();
