import React from "react";

function faceTreatmentInfo() {
  return (
    <div id="all-face-treatments">
      <h2>Klassisk ansiktsbehandling |<span className="time-and-price"> 50 min - 900:-</span> </h2>
      <p>
        "En avslappnande, klassisk ansiktsbehandling som innehåller rengöring,
        hudanalys, peeling samt ansiktsmassage. Behandlingen inleds med
        rengöring av ansikte, hals samt dekolletage. Din teraput gör sedan en
        hudanalys för att kunna skräddarsy resten av din behandling. Vidare
        peelar vi huden med en peelingcreme för att få bort gammal hud och
        lugnar sedan ansiktet med massage och svalkande ansiktsmask."
      </p>
      <div className="line-treatments">
        <hr />
      </div>
      <h2>Djuprengörande ansiktsbehandling |<span className="time-and-price"> 55 min - 990:- </span></h2>
      <p>
        "En ansiktsbehandling med fokus på djuprengöring. Behandlingen inleds
        med rengöring av ansikte, hals samt dekolletage. Din teraput gör sedan
        en hudanalys för att kunna skräddarsy resten av din behandling. Ansiktet
        peelas sedan med en speciell roterande borste för att komma ner på
        djupet och fria huden från torra och förbrukade hudceller. Huden värms
        sedan upp med hjälp av ånga för att förbereda den på för portömning.
        Behandlingen avslutas med en anpassad dagcreme."
      </p>
      <div className="line-treatments">
        <hr />
      </div>
      <h2>Fuktbomb |<span className="time-and-price"> 50 min - 900:-</span></h2>
      <p>
        "En ansiktsbehandling med fokus på massor med fukt. Behandlingen inleds
        med rengöring av ansikte, hals samt dekolletage. Din teraput gör sedan
        en hudanalys för att kunna skräddarsy resten av din behandling. Du får
        sedan en fuktgivande peeling följt av en djupgåenge ansiktsmask som
        tillfär massor med fukt till din hy. Avslutas med mjut massage samt en
        näringsrik och återfuktande creme för en lugnare hy."
      </p>
    </div>
  );
}

export default faceTreatmentInfo;
