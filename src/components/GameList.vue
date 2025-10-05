<template>
  <div class="layout">
    <section class="games">
      <div
        v-for="(game, index) in filteredGames"
        :key="index"
        class="game-card"
      >
        <div class="cover">
          <img
            :src="game.image"
            :alt="`${game.name} cover`"
            loading="lazy"
            @error="($event.target.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%231e293b%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Poppins,Segoe UI,sans-serif%22 font-size=%2228%22 fill=%22white%22>No cover</text></svg>')"
          />
        </div>

        <div class="game-info">
          <h3>{{ game.name }}</h3>
          <p>{{ game.description }}</p>
          <span class="year">{{ game.year }}</span>

          <div class="actions">
            <router-link
              v-if="game.internal"
              :to="{ name: 'Hangman' }"
              class="play-btn"
            >
              Play
            </router-link>
            <a
              v-else
              :href="game.url"
              target="_blank"
              rel="noopener noreferrer"
              class="play-btn"
            >
              Play
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "GameList",
  props: {
    search: String,
    sort: String
  },
  data() {
    return {
      games: [
        {
          name: "Marvel’s Spider-Man 2",
          description: "Accompany Peter Parker and Miles Morales...",
          year: 2023,
          image:
            "https://image.api.playstation.com/vulcan/ap/rnd/202212/0816/L3mXnGABTPnfAdznM0spNiNi.png",
          url: "https://www.playstation.com/en-us/games/marvels-spider-man-2/"
        },
        {
          name: "EA Sports FC (FIFA)",
          description: "Soccer simulation game...",
          year: 2023,
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3b/0e/23/3b0e232f-a3e3-fd0c-e11e-7995f66dacc1/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/246x0w.webp",
          url: "https://www.ea.com/fifa"
        },
        {
          name: "LEGO Star Wars: The Skywalker Saga",
          description: "Relive all 9 films of the LEGO series...",
          year: 2022,
          image:
            "https://image.api.playstation.com/vulcan/ap/rnd/202112/2121/e8lPDqJ7MFHdaIyaLyQy0BgZ.png",
          url: "https://www.lego.com/games/starwars"
        },
        {
          name: "Animal Crossing: New Horizons",
          description: "Create your own island...",
          year: 2020,
          image:
            "https://sm.ign.com/t/ign_fr/cover/a/animal-cro/animal-crossing-sur-nintendo-switch_rhmb.460.jpg",
          url: "https://www.animal-crossing.com/new-horizons/"
        },
        {
          name: "Hangman",
          description: "Classic hangman game implemented by us",
          year: 2025,
          image:
            "https://static.vecteezy.com/system/resources/previews/026/629/338/non_2x/hangman-icon-symbol-design-illustration-vector.jpg",
          internal: true
        },
        {
          name: "Tetris",
          description: "Juego de puzzle con piezas que caen",
          year: 1984,
          image:
            "https://play-lh.googleusercontent.com/7Zn2QBzByBf4XyQPhuRVsOkSaKSYsty1ka-6_bh6Ub-2kQri6xqqRdK52qxEM69N6cw",
          url: "https://tetris.com/play-tetris",
          internal: false
        },
        {
          name: "Snake",
          description: "Clásico juego de la serpiente",
          year: 1997,
          image:
            "https://play-lh.googleusercontent.com/S9ZmNx5LYCj7h2IJZb0QqkXAGki6JRaMQ25ycKfrngDkNBA6jk7rM87YcAH1prV_OA",
          url: "https://playsnake.org/",
          internal: false
        },
        {
          name: "Pac-Man",
          description: "Come puntos y esquiva fantasmas en el laberinto.",
          year: 1980,
          image:
            "https://th.bing.com/th/id/R.5eb29d50c4c8c3cd79fb30802952e438?rik=Cik73rNSOx0MMQ&pid=ImgRaw&r=0",
          url: "https://www.bandainamcoent.com",
          internal: false
        },
        {
          name: "DOOM",
          description: "Shooter clásico frenético contra demonios.",
          year: 1993,
          image:
            "https://th.bing.com/th/id/R.2edbbe06916dea6301b21cf4d53624d5?rik=9Z8hwM0sERKzmg&pid=ImgRaw&r=0",
          url: "https://www.doom.com",
          internal: false
        },
        {
          name: "2048",
          description: "Desliza fichas y combina potencias de 2.",
          year: 2014,
          image:
            "https://play-lh.googleusercontent.com/dywX42tLJgBFMRqYkb53hp2d3HP_talM9NaD27m67xS0hsiLMfG1cwW2JUYmKSKcrRd9",
          url: "https://juego2048.es/"
        },
        {
          name: "Minecraft",
          description: "Construye y sobrevive en mundos infinitos.",
          year: 2011,
          image:
            "https://i.pinimg.com/550x/82/b2/1f/82b21fe6d9166c673eed585a5fc38ef5.jpg",
          url: "https://www.minecraft.net",
          internal: false
        },
        {
          name: "Stardew Valley",
          description: "Vida en el campo, granja y pueblo con encanto.",
          year: 2016,
          image:
            "https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA06840_00/1/i_afb1d73df2515936410908f99940dcbe1050a2732eb1b6a5a400f4bdf0980d36/i/icon0.png",
          url: "https://www.stardewvalley.net",
          internal: false
        },
        {
          name: "Rocket League",
          description: "Fútbol con coches y turbo.",
          year: 2015,
          image:
            "https://dsmorus.cl/wp-content/uploads/2021/07/rocket-league-switch-hero-1-980x980.jpg",
          url: "https://www.rocketleague.com",
          internal: false
        },
        {
          name: "Hades",
          description: "Roguelike de acción con mitología griega.",
          year: 2020,
          image:
            "https://image.api.playstation.com/vulcan/ap/rnd/202104/0517/9AcM3vy5t77zPiJyKHwRfnNT.png",
          url: "https://www.supergiantgames.com/games/hades",
          internal: false
        },
        {
          name: "The Legend of Zelda: Breath of the Wild",
          description: "Aventura de mundo abierto en Hyrule.",
          year: 2017,
          image:
            "https://clipground.com/images/zelda-breath-of-the-wild-logo-png-8.jpg",
          url: "https://www.nintendo.com",
          internal: false
        }
      ]
    };
  },
  computed: {
    filteredGames() {
      const searchTerm = this.search ? this.search.toLowerCase() : "";

      // 🔧 cambio: ahora busca en name y en description
      let list = this.games.filter(
        (g) =>
          g.name.toLowerCase().includes(searchTerm) ||
          g.description.toLowerCase().includes(searchTerm)
      );

      if (this.sort === "newest") {
        return list.sort((a, b) => b.year - a.year);
      } else {
        return list.sort((a, b) => a.year - b.year);
      }
    },

    keywordsFromDescriptions() {
      const allWords = this.filteredGames
        .map((g) => g.description.toLowerCase().split(/\W+/))
        .flat();

      const unique = [...new Set(allWords.filter((w) => w.length > 4))];

      return unique.slice(0, 15);
    }
  },

  watch: {
    search() {
      this.emitKeywords();
    },
    sort() {
      this.emitKeywords();
    },
    filteredGames() {
      this.emitKeywords();
    }
  },

  methods: {
    emitKeywords() {
      this.$emit("updateKeywords", this.keywordsFromDescriptions);
    }
  },

  mounted() {
    this.emitKeywords();
  }
};
</script>
