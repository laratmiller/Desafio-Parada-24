function Names(){
    const signos = ["Aquário", "Gêmeos", "Leão", "Peixes", "Áries", "Câncer", "Capricórnio", "Libra", "Escorpião", "Sagitário"];
    let rnd = Math.floor(Math.random() * 10);
    return signos[rnd];
    }