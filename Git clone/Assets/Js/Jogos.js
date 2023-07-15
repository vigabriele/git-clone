function createGme(player1,hour,player2){
    return`
    <li>
    <img src="assets/Times/icon-${player1}.png" alt="Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="assets/Times/icon-${player2}.png" alt="Bandeira do ${player2}"/>
    `
}
let delay = -0.4;
function createCard(date,day,games){
    delay = delay + 0.4;
    return`
    <div class="card"style="animation-delay:${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML =
createCard("15/07","sábado",createGme("corinthians", "21:00", "palmeiras"))+
createCard("20/07","Quinta-Feira",createGme("SP", "21:00", "Vasco"))+
createCard("21/07","Sexta-Feira",createGme("Atletico", "18:00", "Bahia"))
+createCard("22/07","Sábado",createGme("cruzeiro", "21:00", "gremio"))
+createCard("19/07","Segunda-Feira",createGme("bota", "21:00", "vasco"))
+createCard("21/07","Sexta-Feira",createGme("flamengo", "21:00", "inter"))