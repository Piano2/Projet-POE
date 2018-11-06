const BoutonModifierProfil = document.querySelector(profilmodifBtn);

BoutonModifierProfil.addEventListener('click', function (event) {

    event.preventDefault();
    event.stopPropagation();
    tasList.childNodes.forEach(function (task) {
            if (task.nodeType == 1) {
                if (task.classList.contains('hiddenTask') ) {
                    task.classList.remove('hiddenTask');

                }
            }
        }
    )
});









// <header class="header">
//     <h1 class="headerTitleProfil">Profil de "Pseudo"</h1>
// </header>
// <div class="content">
//     <main class="maine">
//     <img class="user" src="image/user.svg" about="Avatar">
//     <div class="pseudo">"Pseudo"</div>
//     <div class="MotDepasse">********</div>
//     <div class="avancement">
//     "Avancement du joueur"
// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
// aliquid animi aut autem beatae, delectus ea earum eum, laboriosam, laudantiu
// m modi molestiae porro quaerat quas quis quisquam velit. A!
// </div>
// <!--Bouton pour supprimer la sauvegarde au besoin-->
// <button class="ProfilBtn SauvegardeBtn">Modifier Sauvegarde</button>
//
// <div class="NbPointA">"PointA"</div>
//     <div class="NbPointB">"PointB"</div>
//
//     <!--Bouton pour modifier le profil au besoin-->
//     <button class="ProfilBtn profilmodifBtn">Modifier Profil</button>
// <!--Bouton pour retourner à la salle d'entrée-->
// <button class="ProfilBtn"><a href="Salleentrée.html" class="linkProfilJeux">Retour à l'aventure</a></button>
// </main>
// <aside class="aside">
//     </aside>
//     </div>
//     <footer class="footer">
//     <P>BICDULE@MACHIN.TRUC</P>
// </footer>
// <script type="text/javascript" src="Script.js"></script>
//     </body>
//     </html>