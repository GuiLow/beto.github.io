window.jsPDF = window.jspdf.jsPDF;

function validar() {
  const b = document.getElementById("bInput").value;
  const e = document.getElementById("eInput").value;
  const t = document.getElementById("tInput").value;
  const o = document.getElementById("oInput").value;
  const tA = document.getElementById("tAInput").value;
  const tS = document.getElementById("tSInput").value;
  const tH = document.getElementById("tHInput").value;

  if (
    b == "" ||
    e == "" ||
    t == "" ||
    o == "" ||
    tA == "" ||
    tS == "" ||
    tH == ""
  ) {
    alert("Por favor preencha todos os campos");
    return false;
  }

  return true;
}

function splice() {
  if (validar()) {
    const co = document.getElementById("coInput").value;
    const cm = document.getElementById("cmInput").value;
    const pc = document.getElementById("pcInput").value;
    const b = document.getElementById("bInput").value;
    const e = document.getElementById("eInput").value;
    const t = document.getElementById("tInput").value;
    const o = document.getElementById("oInput").value;
    const tA = document.getElementById("tAInput").value;
    const tS = document.getElementById("tSInput").value;
    const tH = document.getElementById("tHInput").value;
    const teste = document.getElementById("betoTeste");

    if (document.getElementById("betoTeste").innerHTML != "") {
      document.getElementById("betoTeste").innerHTML = "";
    }

    const corray = co.split("\n");
    const cmrray = cm.split("\n");
    const pcrray = pc.split("\n");
    const brray = b.split("\n");
    const erray = e.split("\n");
    const trray = t.split("\n");
    const orray = o.split("\n");
    const tArray = tA.split("\n");
    const tSrray = tS.split("\n");
    const tHrray = tH.split("\n");

    let coLi = "<ul>";
    let cmLi = "<ul>";
    let pcLi = "<ul>";
    let bLi = "<ul>";
    let eLi = "<ul>";
    let tLi = "<ul>";
    let oLi = "<ul>";
    let tALi = "<ul>";
    let tSLi = "<ul>";
    let tHLi = "<ul>";

    for (let index = 0; index < corray.length; index++) {
      if (corray[index] !== "") {
        coLi += `<li>${corray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < cmrray.length; index++) {
      if (cmrray[index] !== "") {
        cmLi += `<li>${cmrray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < pcrray.length; index++) {
      if (pcrray[index] !== "") {
        pcLi += `<li>${pcrray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < brray.length; index++) {
      if (brray[index] !== "") {
        bLi += `<li>${brray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < erray.length; index++) {
      if (erray[index] !== "") {
        eLi += `<li>${erray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < trray.length; index++) {
      if (trray[index] !== "") {
        tLi += `<li>${trray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < orray.length; index++) {
      if (orray[index] !== "") {
        oLi += `<li>${orray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < tArray.length; index++) {
      if (tArray[index] !== "") {
        tALi += `<li>${tArray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < tSrray.length; index++) {
      if (tSrray[index] !== "") {
        tSLi += `<li>${tSrray[index]}</li><br>`;
      }
    }
    for (let index = 0; index < tHrray.length; index++) {
      if (tHrray[index] !== "") {
        tHLi += `<li>${tHrray[index]}</li><br>`;
      }
    }

    coLi += "</ul>";
    cmLi += "</ul>";
    pcLi += "</ul>";
    bLi += "</ul>";
    eLi += "</ul>";
    tLi += "</ul>";
    oLi += "</ul>";
    tALi += "</ul>";
    tSLi += "</ul>";
    tHLi += "</ul>";

    if (co != "") {
      document.getElementById("betoTeste").innerHTML = `
    <strong>Costumer Overview:</strong>
    <p>${coLi}</p>`;
    }
    if (cm != "") {
      document.getElementById("betoTeste").innerHTML += `
    <strong>Costumer Mission:</strong>
    <p>${cmLi}</p>`;
    }
    if (pc != "") {
      document.getElementById("betoTeste").innerHTML += `
    <strong>Project Contacts:</strong>
    <p>${pcLi}</p>`;
    }

    document.getElementById("betoTeste").innerHTML += `
    <strong>Business:</strong>
    <p>${bLi}</p>
    <strong>Environment:</strong>
    <p>${eLi}</p>
    <strong>Technical:</strong>
    <p>${tLi}</p>
    <strong>Architecture:</strong>
    <p>${oLi}</p>
    <strong>Storage:</strong>
    <p>${tSLi}</p>
    <strong>HA:</strong>
    <p>${tHLi}</p>
    <strong>Outcome:</strong>
    <p>${oLi}</p>
  `;
  }
}

function autoResize(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

$(document).ready(function () {
  const textAreas = document.getElementsByClassName("textAreas");
  autosize($(textAreas));

  $(textAreas).on("input", function () {
    autosize.update($(".textAreas"));
  });

  $(".textAreas").on("paste", function () {
    setTimeout(function () {
      autosize.update($(".textAreas"));
    }, 0);
  });
});

function show() {
  splice();
}

function refazer() {
  document.getElementById("bInput").value = "";
  document.getElementById("eInput").value = "";
  document.getElementById("tInput").value = "";
  document.getElementById("oInput").value = "";
  document.getElementById("tAInput").value = "";
  document.getElementById("tSInput").value = "";
  document.getElementById("tHInput").value = "";
  document.getElementById("coInput").value = "";
  document.getElementById("cmInput").value = "";
  document.getElementById("pcInput").value = "";
  document.getElementById("betoTeste").innerText = "";
}

function copy() {
  const modalT = document.getElementById("modal-translate")
  const modalD = document.getElementById("modal-download")
  const modal = document.getElementById("modal-copy")
  const betoTeste = document.getElementById("betoTeste");
  const textToCopy = betoTeste.innerText;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {

      modal.style.display = "block"
      if (modalT.style.display == "block" || modalD.style.display == "block") {
        modalD.style.display = "none"
        modalT.style.display = "none"
      }
      setTimeout(()=>{
       modal.style.display = "none"
      }, 3000)
      
    })
    .catch((error) => {
      console.error("Erro ao copiar o texto: ", error);
      alert("Erro ao copiar o texto. Por favor, tente novamente.");
    });
}

function download() {
  const modalT = document.getElementById("modal-translate")
  const modalC = document.getElementById("modal-copy")
  const modal = document.getElementById("modal-download")
  const betoTeste = document.getElementById("betoTeste");
  const doc = new jsPDF();

  // Capturar estilos do elemento HTML
  const styles = window.getComputedStyle(betoTeste);

  // Configurar o estilo no PDF
  doc.setFontSize(parseInt(styles.fontSize));
  doc.setFont("times", "normal");
  doc.setTextColor(styles.color);

  // Dividir o texto em linhas
  const textLines = doc.splitTextToSize(betoTeste.innerText, doc.internal.pageSize.width - 30);

  // Iniciar a posição de Y
  let yPosition = 15;

  // Função para adicionar uma nova página se necessário
  const addNewPageIfNeeded = () => {
      if (yPosition > doc.internal.pageSize.height - 15) {
          doc.addPage();
          yPosition = 15; // Reiniciar a posição de Y na nova página
      }
  };

  // Adicionar cada linha ao PDF
  for (let i = 0; i < textLines.length; i++) {
      // Adicionar uma nova linha apenas se não for a primeira
      if (i > 0) {
          yPosition += parseInt(styles.lineHeight) || 10;
          addNewPageIfNeeded(); // Verificar se é necessário adicionar uma nova página
      }
      doc.text(15, yPosition, textLines[i]);
      addNewPageIfNeeded(); // Verificar novamente após adicionar o texto
  }

  // Salvar o arquivo PDF
  doc.save('beto.pdf');
  modal.style.display = "block"

    if (modalC.style.display == "block" ||  modalT.style.display == "block" ) {
      modalC.style.display = "none"
      modalT.style.display = "none"
      
    }

  setTimeout(()=>{
    modal.style.display = "none"
  }, 3000)

 
}
