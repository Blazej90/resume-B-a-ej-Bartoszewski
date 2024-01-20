function pobierzCV() {
  // Zbierz treść z elementów HTML i przekształć na strukturę dla pdfMake
  const content = [];
  const sections = document.querySelectorAll("main > section");

  sections.forEach(function (section) {
    const sectionTitle = section.querySelector("h2").innerText;
    const sectionContent = [];

    // Dodaj tytuł sekcji do treści PDF
    sectionContent.push({ text: sectionTitle, style: "sectionTitle" });

    // Dodaj treść każdej sekcji do treści PDF
    const paragraphs = section.querySelectorAll("p");
    paragraphs.forEach(function (paragraph) {
      sectionContent.push(paragraph.innerText);
    });

    content.push(sectionContent);
  });

  // Utwórz obiekt PDF
  const pdfContent = {
    content: content,
    styles: {
      sectionTitle: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10],
      },
      // Dodaj inne style, jeśli potrzebujesz
    },
  };

  // Generuj i pobierz plik PDF
  pdfMake.createPdf(pdfContent).download("Błażej_Bartoszewski_CV.pdf");
}
