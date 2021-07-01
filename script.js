const phraseChanges = {
  sabre: "pénis",
  Boruto: "Burrito",
  pote: "reuf",
  coéquipier: "collègue",
  chakra: "mana",
  Hokage: "Maire",
  Konoha: "Carhaix",
  guere: "bagarre",
  Mitsuki: "Jérémie",
  Hinata: "Piñata",
  crâne: "ciboulot",
};

function changeSubtitles() {
  const callback = () => {
    const subtitles = document.querySelector(".player-timedtext");

    if (subtitles) {
      const { firstChild } = subtitles;

      if (firstChild) {
        for (const subtitle of firstChild.childNodes) {
          replaceAll(subtitle);
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
function replaceAll(node) {
  const regex = new RegExp(Object.keys(phraseChanges).join("|"), "gi");
  const newText = node.textContent.replace(regex, function (matched) {
    return phraseChanges[matched];
  });

  if (newText !== node.textContent) {
    node.textContent = newText;
  }
}

changeSubtitles();
