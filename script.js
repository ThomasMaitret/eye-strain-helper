let phraseChanges = {
  sabre: "pénis",
  Boruto: "Burrito",
  pote: "reuf",
  coéquipier: "collègue",
  chakra: "mana",
  Konoha: "Carhaix",
  guerre: "bagarre",
  Mitsuki: "Mitsubishi",
  Hinata: "Piñata",
  crâne: "ciboulot",
  multiclonage: "antidopage",
  Multiclonage: "Antidopage",
  raiton: "raton",
  Raiton: "Raton",
  katon: "chaton",
  Katon: "Chaton",
  feu: "poil",
  tête: "caboche",
  combat: "conflit",
  duel: "match",
  épée: "algue",
  Sharingan: "Sida",
  Naruto: "Norauto™",
  père: "daron",
  kage: "cagole",
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
  const words = node.innerHTML.match(/\b(\w+)\b/g);
  // eslint-disable-next-line unicorn/prefer-spread
  let newText = node.innerHTML.slice();

  for (const word of words) {
    if (phraseChanges[word]) {
      newText = newText.replace(word, phraseChanges[word]);
    }
  }

  if (newText !== node.innerHTML) {
    node.innerHTML = newText;
  }
}

changeSubtitles();
