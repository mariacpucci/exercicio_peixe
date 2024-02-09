var config = {
    type : Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var tartaruguinha;

function preload() {
    //carregar o fundo
    this.load.image('mar', 'assets/bg_azul-claro.png');


    //carregar o logo
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    // carregar a tartaruga
    this.load.image('tartaruga', 'assets/peixes/tartaruga.png');

    // carregar concha
    this.load.image('concha', 'assets/peixes/concha.png');

    this.load.image('concha2', 'assets/peixes/concha.png');
}

function create() {
    //adicionar o fundo na tela
    this.add.image(400,300, 'mar');

    //adicionar o logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

    //adicionar a concha na tela
    this.add.image(50, 50, 'concha').setScale(1);

    this.add.image(750, 550, 'concha2').setScale(1);

    //guardar a tartaruga em uma variavel
    tartaruguinha = this.add.image(400, 300, 'tartaruga').setOrigin(0.5, 0.5).setFlip(true, false);

    //transforando a variavel
    tartaruguinha.setFlip(true, false);
}

function update() {

    //adicionando controles na tartaruga
    tartaruguinha.x = this.input.x;
    tartaruguinha.y = this.input.y;
}