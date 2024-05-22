import { Component, OnInit } from '@angular/core';
import { UserService } from '../home/services/user.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss'],
})
export class InstructionComponent implements OnInit {
  userLevel = 1;
  isLoading = true;

  templateMap = new Map<number, string>();

  constructor(private userService: UserService) {
    this.templateMap.set(
      0,
      "<p>Bienvenue dans le dojo Sipios immobilier.</p> <p>Ce soir, pour quelques heures, vous serez plongés dans la peau d'un investisseur immobilier. Vous êtes sur la page qui vous servira de guide dans cette aventure.</p> <p> Au cours de cette dernière vous aurez pour but de faire grimper votre score en investissant toujours plus. Cependant, la plateforme sur laquelle vous vous trouvez n'est pas parfaite... Il vous faudra la remettre sur pied au fur et à mesure afin de pouvoir débloquer de nouvelles fonctionnalités. </p> <p> Dans un premier temps, n'hésitez pas à explorer les différentes pages qui s'offrent à vous. </p> <p> Dans un premier temps, vous devriez peut être essayer de consulter votre solde. Comment ça ? Il n'est pas disponible ? Cela vient peut être de la base de code. Front ? Back ? Les deux ? A vous de deviner.</p> <p> Une fois ce problème réglé, il est temps d'acheter un appartement. Pour cela, vous devriez essayer d'accéder aux pages disponibles dans la barre de navigation.</p>",
    );
    this.templateMap.set(
      1,
      "<p>Bravo ! Tu as atteint le premier niveau de ce dojo. Pour rappel, ton but est de t'enrichir le plus possible grâce à de superbes transactions immobilières. Mais chacun doit bien démarrer quelque part... Ton budget est limité, il faudrait donc que tu trouves un placement peu coûteux dans un premier temps. </p> <p> Petit indice : Si les prix des appartements que tu vois sont astronomiques, c'est parce que tu ne vois que les plus chers d'entre eux.</p>",
    );
    this.templateMap.set(
      2,
      "<p>Bravo ! Tu es désormais en bonne voie pour devenir un investisseur de génie ! </p> <p> Cependant, un véritable investisseur a plusieurs cordes à son arc. Les plus grands ne font pas qu'acheter, ils sont aussi capables de repérer les occasions parfaites pour revendre leurs biens. Et si toi aussi tu essayais ?</p>",
    );
    this.templateMap.set(
      3,
      "<p>Super ! Tu es désormais un investisseur complet.</p> <p>Maintenant, à vous de devenir le plus grand d'entre tous. Achetez, vendez, faites exploser votre capital.</p> <p>Cependant, restez à l'affut, vous n'êtes peut être pas encore à l'abri d'une surprise...</p>",
    );
    this.templateMap.set(
      4,
      "<p>Mince...</p> <p>Comme tu peux le remarquer, au moins un de tes biens ne te rapporte plus rien... C'est un sacré manque d'aubaine quand on veut devenir le plus fortuné de tous... Cela a sûrement quelque chose à voir avec la classe énergétique de ce logement. Si seulement on pouvait le rénover...</p>",
    );
    this.templateMap.set(
      5,
      "<p>Bravo ! </p> <p>Tu es arrivé au bout de ce dojo. Merci beaucoup pour ta participation.</p> <p>Si tu le souhaites, tu peux continuer à réaliser des opérations pour faire exploser ton score et prendre l'ascendant sur les autres investisseurs.</p>",
    );
  }

  ngOnInit(): void {
    this.userService.getUserLevel().subscribe((userL) => {
      this.userLevel = userL;
      this.isLoading = false;
    });
  }
}
