const phraseChanges = {
  sabre: "pénis",
  Boruto: "Burrito",
  pote: "reuf",
  coéquipier: "collègue",
  chakra: "mana",
  Hokage: "Bukkake",
  Konoha: "Carhaix",
  guerre: "bagarre",
  Mitsuki: "Mitsubishi",
  Hinata: "Piñata",
  crâne: "ciboulot",
  multiclonage: "antidopage",
  Multiclonage: "Antidopage",
  raiton: "raton",
  Raiton: "Raton",
  caton: "chaton",
  Caton: "Chaton",
  feu: "poil",
  tête: "caboche",
  combat: "conflit",
  duel: "match",
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
  const newText = node.innerHTML.replace(regex, function (matched) {
    return phraseChanges[matched];
  });

  if (newText !== node.innerHTML) {
    node.innerHTML = newText;
  }
}

changeSubtitles();
